import { Section } from '../components/Section.js';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { initialCards } from '../script/initial-cards.js';
import { optionObject } from '../script/optionObject.js';
import {
  nameInput,
  jobInput,
  editButton,
  popupProfile,
  popupContainer,
  profileAddButton,
  popupAddCard,
  addCardNameInput,
  addCardImageLink,
  popupAddCardContainer,
  cardContainer,
  dataUserInfo,
  popupImage
} from '../script/constants.js';

import '../pages/index.css';

nameInput.pattern = "[A-Za-zА-Яа-я -]{1,}";

//ФУНКЦИЯ ОТКРЫТИЯ ПОПАПА С КАРТИНКОЙ ПРИ КЛИКЕ НА КАРТИНКУ
const handleCardClick = function(imageName, imageLink) {
  const popupWithImage = new PopupWithImage(popupImage);
  popupWithImage.open(imageName, imageLink);
  popupWithImage.setEventListeners();
  };

//ОТРИСОВКА И ДОБАВЛЕНИЕ КАРТОЧЕК ПО УМОЛЧАНИЮ В КОНТЕЙНЕР
const initCardsCopy = initialCards.slice();
const initCardsRevers = initCardsCopy.reverse();
const cardListDefault = new Section({
  items: initCardsRevers,
  renderer: (item) => {
    const card = new Card(item, '.card-template', handleCardClick);
    const cardElement = card.generateCard();
    cardListDefault.addItem(cardElement);
  }
},
  cardContainer
);
cardListDefault.renderItems();// отрисовка карточек

/*УБИРАЮ ПОКАЗ СООБЩЕНИЙ ВАЛИДАНИИ ИНПУТОВ ПРИ ОТКРЫТИИ POPUP*/
function hideError(form) {
  form.querySelectorAll('.popup__error').forEach(function(deleteErrorText) {
    deleteErrorText.classList.remove("popup__error_visible");
  });
  form.querySelectorAll('.popup__input').forEach(function(deleteErrorText) {
    deleteErrorText.classList.remove("popup__input_type_error");
  });
};

const userInfo = new UserInfo({ dataObject: dataUserInfo });

/*РАБОТА С ФОРМОЙ ОКНА ИЗМЕНЕНИЯ ДАННЫХ ПОЛЬЗОВАТЕЛЯ*/
function formSubmitHandler(evt) {
  evt.preventDefault();
  popupProfileForm.close();
  userInfo.setUserInfo();
};

/*РАБОТА С ФОРМОЙ ОКНА ДОБАВЛЕНИЯ КАРТОЧКИ*/
function formAddCardSubmitHandler(evt) {
  evt.preventDefault();
  const userCardData = [
    {
    name: addCardNameInput.value,
    link: addCardImageLink.value
    }
  ];
  const cardUser = new Section({
    items: userCardData,
    renderer: (item) => {
      const card = new Card(item, '.card-template', handleCardClick);
      const cardElement = card.generateCard();
      cardUser.addItem(cardElement);
      }
    },
    cardContainer
  );
    cardUser.renderItems();

    popupAddCardForm.close();
};

//СОЗДАНИЕ ЭКЗЕМПЛЯРА КЛАССА PopupWithForm И ОТКРЫТИЕ ПОПАПА ПРОФИЛЯ
const popupProfileForm = new PopupWithForm(popupProfile, formSubmitHandler);
editButton.addEventListener('click', (evt) => {
  if (evt) {
    popupProfileForm.open();
    popupProfileForm.setEventListeners();
    userInfo.getUserInfo();
    nameInput.value = dataUserInfo.titleName;
    jobInput.value = dataUserInfo.subtitleAbout;
  }
  hideError(popupContainer);
  popupProfile.querySelector('.popup__button').classList.add('popup__button_disabled');
});

//СОЗДАНИЕ ЭКЗЕМПЛЯРА КЛАССА PopupWithForm И ОТКРЫТИЕ ПОПАПА ДОБАВЛЕНИЯ КАРТОЧКИ
const popupAddCardForm = new PopupWithForm(popupAddCard, formAddCardSubmitHandler);
profileAddButton.addEventListener('click', (evt) => {
  if (evt) {
    popupAddCardForm.open();
    popupAddCardForm.setEventListeners();
  }
  hideError(popupAddCardContainer);
  popupAddCard.querySelector('.popup__button').classList.add('popup__button_disabled');
});

const formElementPopupProfile = popupProfile.querySelector(optionObject.formSelector);
const validatorProfile = new FormValidator(optionObject, formElementPopupProfile);
validatorProfile.enableValidation();
validatorProfile.toggleButtonState();

const formElementPopupAddCard = popupAddCard.querySelector(optionObject.formSelector);
const validatorAddCard = new FormValidator(optionObject, formElementPopupAddCard);
validatorAddCard.enableValidation();
validatorAddCard.toggleButtonState();
