import { DefaultCard, UserCard } from './Card.js';
import { FormValidator, optionObject } from './FormValidator.js';
import { initialCards } from './initial-cards.js';


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

const userDataCardObject = [
  {
    name: addCardNameInput.value,
    link: addCardImageLink.value
  }
]

const popupImage = document.querySelector('.popup-image');
const popupImageImage = document.querySelector('.popup-image__image');
const popupImageTitle = document.querySelector('.popup-image__title');
const cardContainer = document.querySelector('.card-container');
nameInput.pattern = "[A-Za-zА-Яа-я -]{1,}";

// Добавление карточки на страницу
// item - userDataCardObject или initialCards
 // cardType - класс макета карточки
function addCardToContainer(item, cardType) {
  const card = new cardType(item, '.card-template');
  const cardElement = card.generateCard();
  cardContainer.prepend(cardElement);
}

//Перебор массива в обратном порядке
const initCardsCopy = initialCards.slice();
const initCardsRevers = initCardsCopy.reverse();
initCardsRevers.forEach(function (cardItem) {
  addCardToContainer(cardItem, DefaultCard);
});

/*ОТКРЫТИЕ POPUP*/
export function openPopupImage(imageName, imageLink) {
  popupImageTitle.textContent = imageName;
  popupImageImage.src = imageLink;
  popupImageImage.alt = `Картинка ${imageName}`;
  popupCommon(popupImage, 'popup_opened');
};

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

//Общая функция открытия / закрытия окна попапа
function popupCommon(item, className) {
  item.classList.toggle(className);
  if (item.classList.contains('popup_opened')) {
    document.addEventListener("keydown", commonFunctionCloseEsc);
    item.addEventListener("click", commonFunctionClickOverlay);
    item.addEventListener('click', commonFunctionClickCloseButton);
  } else {
    document.removeEventListener("keydown", commonFunctionCloseEsc);
    item.removeEventListener("click", commonFunctionClickOverlay);
    item.removeEventListener('click', commonFunctionClickCloseButton);
  }
};

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

/*ОБЩАЯ ФУНКЦИЯ ЗАКРЫТИЯ ОКНА POPUP ПО НАЖАТИЮ ESCAPE*/

function commonFunctionCloseEsc(evt) {
  const openedPopup = document.querySelector('.popup_opened');
  if (evt.key === 'Escape' && openedPopup) {
    popupCommon(openedPopup, 'popup_opened');
  };
};

/*ОБЩАЯ ФУНКЦИЯ ЗАКРЫТИЯ ОКНА POPUP ПО КЛИКУ ПО ОВЕРЛЕЙ*/

function commonFunctionClickOverlay(evt) {
  const openedPopup = document.querySelector('.popup_opened');
  if (evt.target.classList.contains('popup__overlay')) {
    popupCommon(openedPopup, 'popup_opened');
  };
};

/*ОБЩАЯ ФУНКЦИЯ ЗАКРЫТИЯ ОКНА POPUP ПО КЛИКУ НА КРЕСТИК */

function commonFunctionClickCloseButton(evt) {
  const openedPopup = document.querySelector('.popup_opened');
  if (evt.target.classList.contains('popup__close-button')) {
    popupCommon(openedPopup, 'popup_opened');
  };
};

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
  userDataCardObject.name = addCardNameInput.value;
  userDataCardObject.link = addCardImageLink.value;
  addCardToContainer(userDataCardObject, UserCard);
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
