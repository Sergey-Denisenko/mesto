import { Section } from '../components/Section.js';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { optionObject } from '../utils/optionObject.js';
import { Api } from '../components/Api.js';
import {
  nameInput,
  //jobInput,
  editButton,
  popupProfile,
  profileAddButton,
  popupAddCard,
  cardContainer,
  dataUserInfo,
  popupImage,
  userCardData,
  popupAvatarUpdate,
  profileAvatarButton,
  popupAvatarUpdateFormSubmitButton,
  popupAddCardFormSubmit,
  popupProfileFormSubmit,
  optionsApi
} from '../utils/constants.js';

import '../pages/index.css';

import { PopupDeleteCard } from '../components/PopupDeleteCard.js';

const userInfo = new UserInfo({ dataObject: dataUserInfo });

//ПОЛУЧЕНИЕ ДАННЫХ ПОЛЬЗОВАТЕЛЯ С СЕРВЕРА
const api = new Api(optionsApi);
api.getUserDataDefaultFromServer()
  .then((data) => {
    userInfo.getUserInfoFromServer(data);
    userInfo.setUserInfoToPage(dataUserInfo.titleName, dataUserInfo.subtitleAbout, dataUserInfo.avatar);
    const cardTo = function (dataObject) {
      const cardListDefault = new Section({
        items: dataObject.reverse(),
        renderer: (item) => {
          const card = new Card(
            item,
            '.card-template',
            handleCardClick,
            () => {
              popupDeleteCard.open();
              popupDeleteCard.setEventListeners(item._id, () => { card.deleteCard() });
            },
            data
          );

          const cardElement = card.generateCard(() => {
            api.likePlus(item._id)
              .then(() => {
                card.cardLikePlus();
                card.regenLikesCounter();
              })
              .catch((err) => {
                console.log('Ошибка. Запрос не выполнен: ', err);
              });
          },
            () => {
              api.likeMinus(item._id)
                .then(() => {
                  card.cardLikeMinus();
                  card.regenLikesCounter();
                })
                .catch((err) => {
                  console.log('Ошибка. Запрос не выполнен: ', err);
                });
            });
          cardListDefault.addItem(cardElement);
          card.showTrashIcon();
        }
      },
        cardContainer
      );
      cardListDefault.renderItems();// отрисовка карточек
    }

    //ПОЛУЧЕНИЕ МАССИВА КАРТОЧЕК С СЕРВЕРА
    api.getCardDefaultFromServer()
      .then((cardDefaultFromServer) => {
        cardTo(cardDefaultFromServer);
      })
      .catch((err) => {
        console.log('Ошибка. Запрос не выполнен: ', err);
      })

    //ПАТТЕРН ДЛЯ ИНПУТА
    nameInput.pattern = "[A-Za-zА-Яа-я -]{1,}";

    //ФУНКЦИЯ ОТКРЫТИЯ ПОПАПА С КАРТИНКОЙ ПРИ КЛИКЕ НА КАРТИНКУ
    const popupWithImage = new PopupWithImage(popupImage);
    const handleCardClick = function (imageName, imageLink) {
      popupWithImage.open(imageName, imageLink);
      popupWithImage.setEventListeners();
    };

    //  //РАБОТА С ПОПАПОМ ПРОФИЛЯ
    const tempSubmitButtonProfileFormTextContent = popupProfileFormSubmit.textContent;
    const popupProfileForm = new PopupWithForm(
      popupProfile,
      (inputValues) => {
        api.setNewDataUser(inputValues)
          .then((data) => {
            userInfo.getUserInfoFromServer(data);
            userInfo.setUserInfoToPage(dataUserInfo.titleName, dataUserInfo.subtitleAbout, dataUserInfo.avatar);
            return data;
          })
          .catch((err) => {
            console.log('Ошибка. Запрос не выполнен: ', err);
          })
          .finally(() => {
            renderLoading(false, tempSubmitButtonProfileFormTextContent, popupProfileFormSubmit);
            popupProfileForm.close();
          })
      },
      () => { renderLoading(true, tempSubmitButtonProfileFormTextContent, popupProfileFormSubmit) },
    );

    editButton.addEventListener('click', (evt) => {
      if (evt) {
        popupProfileForm.open();
        userInfo.setUserInfoToPage(dataUserInfo.titleName, dataUserInfo.subtitleAbout, dataUserInfo.avatar);
      }
      validatorProfile.hideError();
      popupProfile.querySelector('.popup__button').classList.add('popup__button_disabled');
    });
    popupProfileForm.setEventListeners();

    //РАБОТА С ПОПАПОМ ДОБАВЛЕНИЯ КАРТОЧКИ
    const tempSubmitButtonAddCardTextContent = popupAddCardFormSubmit.textContent;
    const popupAddCardForm = new PopupWithForm(popupAddCard, dataInputFields => {
      userCardData.name = dataInputFields.name;
      userCardData.link = dataInputFields.link;
      userCardData.likes = '';

      api.addNewCardToServer(userCardData)
        .then((data) => {
          return cardTo([data]);
        })
        .catch((err) => {
          console.log('Ошибка. Запрос не выполнен: ', err);
        })
        .finally(() => {
          renderLoading(false, tempSubmitButtonAddCardTextContent, popupAddCardFormSubmit);
          popupAddCardForm.close();
        })
    },
      () => { renderLoading(true, tempSubmitButtonAddCardTextContent, popupAddCardFormSubmit) }
    );

    //РАБОТА С ПОПАПОМ АВАТАРА
    const tempSubmitButtonTextContent = popupAvatarUpdateFormSubmitButton.textContent;
    const popupAvatarUpdateForm = new PopupWithForm(popupAvatarUpdate, dataInputFields => {
      api.avatarUpdate(dataInputFields.link)
        .then((data) => {
          userInfo.getUserInfoFromServer(data);
          userInfo.setUserInfoToPage(dataUserInfo.titleName, dataUserInfo.subtitleAbout, dataUserInfo.avatar);
        })
        .catch((err) => {
          console.log('Ошибка. Запрос не выполнен: ', err);
        })
        .finally(() => {
          renderLoading(false, tempSubmitButtonTextContent, popupAvatarUpdateFormSubmitButton);
          popupAvatarUpdateForm.close();
        })
    },
      () => { renderLoading(true, tempSubmitButtonTextContent, popupAvatarUpdateFormSubmitButton) }
    );

    //Рендер надписи на кнопке сабита во время передачи данных
    function renderLoading(isLoading, tempSubmitButtonText, submitButtonTextContent) {
      if (isLoading) {
        submitButtonTextContent.textContent = 'Сохранение...'
      } else {
        submitButtonTextContent.textContent = tempSubmitButtonText
      }
    }

    //РАБОТА С ПОПАПОМ УДАЛЕНИЯ КАРТОЧКИ
    const popupCardDeleteSelector = document.querySelector('.popup-card-delete');
    const popupDeleteCard = new PopupDeleteCard(
      popupCardDeleteSelector,
      (id, deleteCardFromClassCard) => {
        api.deleteCardFromServer(id)
          .then(res => {
            deleteCardFromClassCard();
          })
          .catch((err) => {
            console.log('Ошибка. Запрос не выполнен: ', err);
          })
          .finally(() => {
            popupDeleteCard.close();
          })
      }
    );

    profileAddButton.addEventListener('click', (evt) => {
      if (evt) {
        popupAddCardForm.open();
      }
      validatorAddCard.hideError();
      popupAddCard.querySelector('.popup__button').classList.add('popup__button_disabled');
    });
    popupAddCardForm.setEventListeners();

    profileAvatarButton.addEventListener('click', (evt) => {
      if (evt) {
        popupAvatarUpdateForm.open();
      }
      validatorAvatarUpdate.hideError();
      popupAvatarUpdate.querySelector('.popup__button').classList.add('popup__button_disabled');
    });
    popupAvatarUpdateForm.setEventListeners();

    const formElementPopupProfile = popupProfile.querySelector(optionObject.formSelector);
    const validatorProfile = new FormValidator(optionObject, formElementPopupProfile);
    validatorProfile.enableValidation();
    validatorProfile.toggleButtonState();

    const formElementPopupAddCard = popupAddCard.querySelector(optionObject.formSelector);
    const validatorAddCard = new FormValidator(optionObject, formElementPopupAddCard);
    validatorAddCard.enableValidation();
    validatorAddCard.toggleButtonState();

    const formElementPopupAvatarUpdate = popupAvatarUpdate.querySelector(optionObject.formSelector);
    const validatorAvatarUpdate = new FormValidator(optionObject, formElementPopupAvatarUpdate);
    validatorAvatarUpdate.enableValidation();
    validatorAvatarUpdate.toggleButtonState();
  })
  .catch((err) => {
    console.log('Ошибка. Запрос не выполнен: ', err);
  });
