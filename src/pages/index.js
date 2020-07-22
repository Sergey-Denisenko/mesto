import { Section } from '../components/Section.js';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { initialCards } from '../utils/initial-cards.js';
import { optionObject } from '../utils/optionObject.js';
import { Api } from '../components/Api.js';
import {
  nameInput,
  jobInput,
  editButton,
  popupProfile,
  profileAddButton,
  popupAddCard,
  cardContainer,
  dataUserInfo,
  popupImage,
  userCardData
} from '../utils/constants.js';

import '../pages/index.css';

import { PopupDeleteCard } from '../components/PopupDeleteCard.js';

//-----------------------------------------------
  // fetch('https://mesto.nomoreparties.co/v1/cohort-13/users/me', {
  //   headers: {
  //     authorization: 'b301150e-99e5-48e9-bfa2-35f39eea584a'
  //   }
  // })
  // .then((res) => {
  //   return res.json();
  // })
  // .then((data) => {
  //     console.log(data.name); // если мы попали в этот then, data — это объект
  //     console.log(data.about);
  //     console.log(data.avatar);
  //     console.log(data);
  //     console.log(typeof data);
  //     profileTitleNameDefault.textContent = data.name;
  //     profileSubtitleAboutDefault.textContent = data.about;
  //     profileAvatarDefault.src = data.avatar;
  //     return data;
  // })
  // .catch((err) => {
  //   console.log('Ошибка. Запрос не выполнен: ', err);
  // });
//-----------------------------------------------
//-----------------ПОЛУЧЕНИЕ ДАННЫХ ПОЛЬЗОВАТЕЛЯ С СЕРВЕРА
// const likeToServerApi = new Api();

const profileTitleNameDefault = document.querySelector('.profile').querySelector('.profile__title-name');
const profileSubtitleAboutDefault = document.querySelector('.profile').querySelector('.profile__subtitle-about');
const profileAvatarDefault = document.querySelector('.profile').querySelector('.profile__avatar');

const api = new Api();
api.getUserDataDefaultFromServer()
  .then((data) => {
    profileTitleNameDefault.textContent = data.name;
    profileSubtitleAboutDefault.textContent = data.about;
    profileAvatarDefault.src = data.avatar;

  console.log('data----------------');
  console.log(data._id);

const cardTo = function(dataObject) {
  const cardListDefault = new Section({
    items: dataObject.reverse(),
    renderer: (item) => {
      //const card = new Card(item, '.card-template', handleCardClick, openCardDeletePopup, dataUserInfo); //, openCardDeletePopup);

      const card = new Card(
        item,
        '.card-template',
        handleCardClick,
        () => {
        popupDeleteCard.open();
        popupDeleteCard.setEventListeners(item._id, () => {card.deleteCard()});
        },
        data
      );

      const cardElement = card.generateCard(() => {
        api.likePlus(item._id)
        .then(res => {
          card.cardLikePlus();
          card.regenLikesCounter();
          console.log(res)}
          )
        },
        () => {
        api.likeMinus(item._id)
        .then(res => {
          card.cardLikeMinus();
          card.regenLikesCounter();
          console.log(res)}
          )
        }
      );//popupDeleteCard);
      cardListDefault.addItem(cardElement);
      card.showTrashIcon();
    }
  },
    cardContainer
  );
  cardListDefault.renderItems();// отрисовка карточек
}

//-----------------ПОЛУЧЕНИЕ МАССИВА КАРТОЧЕК С СЕРВЕРА

api.getCardDefaultFromServer()
.then((cardDefaultFromServer) => {
  cardTo(cardDefaultFromServer);
})


nameInput.pattern = "[A-Za-zА-Яа-я -]{1,}";

//ФУНКЦИЯ ОТКРЫТИЯ ПОПАПА С КАРТИНКОЙ ПРИ КЛИКЕ НА КАРТИНКУ
const popupWithImage = new PopupWithImage(popupImage);
const handleCardClick = function(imageName, imageLink) {
  popupWithImage.open(imageName, imageLink);
  popupWithImage.setEventListeners();
};

console.log('1');
 const userInfo = new UserInfo({ dataObject: dataUserInfo });

console.log('2');
//СОЗДАНИЕ ЭКЗЕМПЛЯРА КЛАССА PopupWithForm И ОТКРЫТИЕ ПОПАПА ПРОФИЛЯ
  const popupProfileForm = new PopupWithForm(popupProfile, dataInputFields => {
    userInfo.setUserInfo(dataInputFields);
    api.setNewDataUser(dataInputFields);
  });

  editButton.addEventListener('click', (evt) => {
    if (evt) {
      popupProfileForm.open();
      userInfo.getUserInfo();
      nameInput.value = dataUserInfo.titleName;
      jobInput.value = dataUserInfo.subtitleAbout;
    }
    validatorProfile.hideError();
    popupProfile.querySelector('.popup__button').classList.add('popup__button_disabled');
  });

  popupProfileForm.setEventListeners();

console.log('3');

const popupAddCardForm = new PopupWithForm(popupAddCard, dataInputFields => {
  userCardData.name = dataInputFields.name;
  userCardData.link = dataInputFields.link;
  userCardData.likes = '';
    console.log('userCardData');
    console.log(userCardData);

  api.addNewCardToServer(userCardData, cardTo)

  popupAddCardForm.close();
});

const popupCardDeleteSelector = document.querySelector('.popup-card-delete');

  const popupDeleteCard = new PopupDeleteCard(
    popupCardDeleteSelector,
    (id, deleteCardFromClassCard) => {
    api.deleteCardFromServer(id)
    .then(res => {
      deleteCardFromClassCard();
      console.log(res)}
      )
    }
  );

console.log('4');

profileAddButton.addEventListener('click', (evt) => {
  if (evt) {
    popupAddCardForm.open();
  }
  validatorAddCard.hideError();
  popupAddCard.querySelector('.popup__button').classList.add('popup__button_disabled');
});

popupAddCardForm.setEventListeners();

const formElementPopupProfile = popupProfile.querySelector(optionObject.formSelector);
const validatorProfile = new FormValidator(optionObject, formElementPopupProfile);
validatorProfile.enableValidation();
validatorProfile.toggleButtonState();

const formElementPopupAddCard = popupAddCard.querySelector(optionObject.formSelector);
const validatorAddCard = new FormValidator(optionObject, formElementPopupAddCard);
validatorAddCard.enableValidation();
validatorAddCard.toggleButtonState();
console.log('5');


// return data;
});
