import { Card } from './Card.js';
import { FormValidator, optionObject } from './FormValidator.js';
import { initialCards } from './initial-cards.js';
import { popupCommon } from './utils.js';

// КАРТОЧКИ ПО УМОЛЧАНИЮ ПОДКЛЮЧЕНЫ ОТДЕЛЬНЫМ ФАЙЛОМ - initial-cards.js

const profileTitleName = document.querySelector('.profile__title-name');
const profileSubtitleAbout = document.querySelector('.profile__subtitle-about');

const nameInput = document.querySelector('.popup__form-name');
const jobInput = document.querySelector('.popup__form-about');

const editButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup-profile');
const popupContainer = popupProfile.querySelector('.popup__container');

const profileAddButton = document.querySelector('.profile__add-button');
const popupAddCard = document.querySelector('.popup-add-card');
const addCardNameInput = document.querySelector('.popup-add-card__form-name');
const addCardImageLink = document.querySelector('.popup-add-card__form-image-link');
const popupAddCardContainer = popupAddCard.querySelector('.popup-add-card__container');

const cardContainer = document.querySelector('.card-container');
nameInput.pattern = "[A-Za-zА-Яа-я -]{1,}";

function addCardToContainer(item, cardTemlateClass) {
  const card = new Card(item, cardTemlateClass);
  const cardElement = card.generateCard();
  cardContainer.prepend(cardElement);
};
//Перебор массива в обратном порядке
const initCardsCopy = initialCards.slice();
const initCardsRevers = initCardsCopy.reverse();
initCardsRevers.forEach(function (cardItem) {
  addCardToContainer(cardItem, '.card-template');
});

/*Функцию открытия попапа картинки openPopupImage перенесена файл utils.js*/

/*УБИРАЮ ПОКАЗ СООБЩЕНИЙ ВАЛИДАНИИ ИНПУТОВ ПРИ ОТКРЫТИИ POPUP*/

function hideError(form) {
  form.querySelectorAll('.popup__error').forEach(function(deleteErrorText) {
    deleteErrorText.classList.remove("popup__error_visible");
  });
  form.querySelectorAll('.popup__input').forEach(function(deleteErrorText) {
    deleteErrorText.classList.remove("popup__input_type_error");
  });
};

/*ОТКРЫТИЕ И ЗАКРЫТИЕ ОКНА POPUP*/

//Общая функция открытия / закрытия окна попапа popupCommon перенесена в файл utils.js

function openPopupProfile() {
  popupCommon(popupProfile, 'popup_opened');
  nameInput.value = profileTitleName.textContent;
  jobInput.value = profileSubtitleAbout.textContent;
  hideError(popupContainer);
  popupProfile.querySelector('.popup__button').classList.add('popup__button_disabled');
};

function openPopupAddCard() {
  addCardNameInput.value = '';
  addCardImageLink.value = '';
  popupCommon(popupAddCard, 'popup_opened');
  hideError(popupAddCardContainer);
  popupAddCard.querySelector('.popup__button').classList.add('popup__button_disabled');
};

/*ОБЩАЯ ФУНКЦИЯ ЗАКРЫТИЯ ОКНА POPUP ПО НАЖАТИЮ*/
/*ESCAPE commonFunctionCloseEsc ПЕРЕНЕСЕНА В ФАЙЛ utils.js*/

/*ОБЩАЯ ФУНКЦИЯ ЗАКРЫТИЯ ОКНА POPUP ПО КЛИКУs*/
/*ПО ОВЕРЛЕЙ commonFunctionClickOverlay ПЕРЕНЕСЕНА В ФАЙЛ utils.js*/

/*ОБЩАЯ ФУНКЦИЯ ЗАКРЫТИЯ ОКНА POPUP ПО КЛИКУ*/
/*НА КРЕСТИК commonFunctionClickCloseButton ПЕРЕНЕСЕНА В ФАЙЛ utils.js*/

/*РАБОТА С ФОРМОЙ ОКНА ИЗМЕНЕНИЯ ДАННЫХ ПОЛЬЗОВАТЕЛЯ*/

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileTitleName.textContent = nameInput.value;
  profileSubtitleAbout.textContent = jobInput.value;
  popupCommon(popupProfile, 'popup_opened');
};

/*РАБОТА С ФОРМОЙ ОКНА ДОБАВЛЕНИЯ КАРТОЧКИ*/

function formAddCardSubmitHandler(evt) {
  evt.preventDefault();
  const userCardData = {
    name: addCardNameInput.value,
    link: addCardImageLink.value
  }
  addCardToContainer(userCardData, '.card-template');
  popupCommon(popupAddCard, 'popup_opened');
};

editButton.addEventListener('click', openPopupProfile);
profileAddButton.addEventListener('click', openPopupAddCard);

popupProfile.querySelector('.popup__form').addEventListener('submit', formSubmitHandler);
popupAddCard.querySelector('.popup__form').addEventListener('submit', formAddCardSubmitHandler);

const formElementPopupProfile = popupProfile.querySelector(optionObject.formSelector);
const validatorProfile = new FormValidator(optionObject, formElementPopupProfile);
validatorProfile.enableValidation();
validatorProfile._toggleButtonState();

const formElementPopupAddCard = popupAddCard.querySelector(optionObject.formSelector);
const validatorAddCard = new FormValidator(optionObject, formElementPopupAddCard);
validatorAddCard.enableValidation();
validatorAddCard._toggleButtonState();
