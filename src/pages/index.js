import { Section } from '../components/Section.js';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { initialCards } from '../utils/initial-cards.js';
import { optionObject } from '../utils/optionObject.js';
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

nameInput.pattern = "[A-Za-zА-Яа-я -]{1,}";

//ФУНКЦИЯ ОТКРЫТИЯ ПОПАПА С КАРТИНКОЙ ПРИ КЛИКЕ НА КАРТИНКУ
const popupWithImage = new PopupWithImage(popupImage);
const handleCardClick = function(imageName, imageLink) {
  popupWithImage.open(imageName, imageLink);
  popupWithImage.setEventListeners();
};

const initCardsRevers = initialCards.slice().reverse();
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

const userInfo = new UserInfo({ dataObject: dataUserInfo });

/* ФУНКЦИЯ formSubmitHandler - РАБОТА С ФОРМОЙ ОКНА ОКНА ИЗМЕНЕНИЯ ДАННЫХ ПОЛЬЗОВАТЕЛЯ И САБМИТА УПРАЗДНЕНА.
ФУНКЦИОНАЛ САБМИТ ПЕРЕНЕСЕН В PopupWithForm */
/* ФУНКЦИЯ formAddCardSubmitHandler - РАБОТА С ФОРМОЙ ОКНА ДОБАВЛЕНИЯ КАРТОЧКИ И САБМИТА УПРАЗДНЕНА.
ФУНКЦИОНАЛ САБМИТ ПЕРЕНЕСЕН В PopupWithForm */

//СОЗДАНИЕ ЭКЗЕМПЛЯРА КЛАССА PopupWithForm И ОТКРЫТИЕ ПОПАПА ПРОФИЛЯ
const popupProfileForm = new PopupWithForm(popupProfile, dataInputFields => {
  userInfo.setUserInfo(dataInputFields);
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

//СОЗДАНИЕ ЭКЗЕМПЛЯРА КЛАССА PopupWithForm И ОТКРЫТИЕ ПОПАПА ДОБАВЛЕНИЯ КАРТОЧКИ
const popupAddCardForm = new PopupWithForm(popupAddCard, dataInputFields => {
  userCardData.name = dataInputFields.name;
  userCardData.link = dataInputFields.link;
  const card = new Card(userCardData, '.card-template', handleCardClick);
  const cardElement = card.generateCard();
  cardListDefault.addItem(cardElement);
  popupAddCardForm.close();
});

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
