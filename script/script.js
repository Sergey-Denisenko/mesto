// КАРТОЧКИ ПО УМОЛЧАНИЮ ПОДКЛЮЧЕНЫ ОТДЕЛЬНЫМ ФАЙЛОМ - initial-cards.js

const profileTitleName = document.querySelector('.profile__title-name');
const profileSubtitleAbout = document.querySelector('.profile__subtitle-about');

const nameInput = document.querySelector('.popup__form-name');
const jobInput = document.querySelector('.popup__form-about');

const editButton = document.querySelector('.profile__edit-button');
const popupFormCloseButton = document.querySelector('.popup__form-close-button');
const popup = document.querySelector('.popup');
const popupFormSubmit = document.querySelector('.popup__form-submit');
const popupContainer = popup.querySelector('.popup__container');
const popupProfile = document.querySelector('.popup-profile');

const profileAddButton = document.querySelector('.profile__add-button');
const popupAddCard = document.querySelector('.popup-add-card');
const popupAddFormCloseButton = document.querySelector('.popup-add-card__form-close-button');
const addCardNameInput = document.querySelector('.popup-add-card__form-name');
const addCardImageLink = document.querySelector('.popup-add-card__form-image-link');
const popupAddCardFormSubmit = document.querySelector('.popup-add-card__form-submit');
const popupAddCardContainer = popupAddCard.querySelector('.popup-add-card__container');

const popupImage = document.querySelector('.popup-image');
const popupImageCloseButton = document.querySelector('.popup-image__close-button');
const popupImageImage = document.querySelector('.popup-image__image');
const popupImageTitle = document.querySelector('.popup-image__title');

const cardContainer = document.querySelector('.card-container');
nameInput.pattern = "[A-Za-zА-Яа-я -]{1,}";

/*ДОБАВЛЯЮ КАРТОЧКИ НА СТРАНИЦУ*/
function addCardToPage(card, container){
  container.prepend(card);
};

/*ОТКРЫТИЕ POPUP*/
function openPopupImage(imageName, imageLink) {
  popupImageTitle.textContent = imageName;
  popupImageImage.src = imageLink;
  popupImageImage.alt = `Картинка ${imageName}`;
  popupCommon(popupImage, 'popup_opened');
  popupImageCloseButton.addEventListener('click', closePopupImage);
};

/*ДОБАВЛЕНИЕ ИМЕНОВАННОЙ ФУНКЦИИ ПОСТАВИТЬ / СНЯТЬ ЛАЙК*/
const cardLikeSwitcher = function(evt) {
  evt.target.classList.toggle('card__like_active-black');
};

/*ДОБАВЛЕНИЕ ИМЕНОВАННОЙ ФУНКЦИИ УДАЛЕНИЯ КАРТОЧКИ*/
const cardToTrash = function(evt) {
  evt.target.closest('.card').remove();
};

/*МАКЕТ КАРТОЧКИ*/
function cardToPage(itemPicName, itemLink) {
  const cardTemplate = document.querySelector('#card').content;
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector('.card__title').textContent = itemPicName;
  cardElement.querySelector('.card__image').src = itemLink;
  cardElement.querySelector('.card__image').alt = `Картинка ${itemPicName}`;

  cardElement.querySelector('.card__image').addEventListener('click', function() {
    openPopupImage(itemPicName, itemLink);
  });

  cardElement.querySelector('.card__like').addEventListener('click', function(evt) {
    cardLikeSwitcher(evt);
  });

  cardElement.querySelector('.card__trash').addEventListener('click', function(evt) {
    cardToTrash(evt);
  });
  return cardElement;
};

//Перебор массива в обратном порядке
const initCardsCopy = initialCards.slice();
const initCardsRevers = initCardsCopy.reverse();
//Добавление карточек по умолчанию
for (let i = 0; i < initCardsRevers.length; i++) {
  addCardToPage(cardToPage(initCardsRevers[i].name, initCardsRevers[i].link), cardContainer);
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
  } else {
    document.removeEventListener("keydown", commonFunctionCloseEsc);
    item.removeEventListener("click", commonFunctionClickOverlay);
  }
};

function openPopupProfile() {
  const inputList = Array.from(popup.querySelectorAll('.popup__input'));
  toggleButtonState(inputList, popupFormSubmit);
  popupCommon(popup, 'popup_opened');
  nameInput.value = profileTitleName.textContent;
  jobInput.value = profileSubtitleAbout.textContent;
  hideError(popupContainer);
  popupFormCloseButton.addEventListener('click', closePopupProfile);
  popup.querySelector('.popup__button').classList.add('popup__button_disabled');
  popup.querySelector('.popup__form').addEventListener('submit', formSubmitHandler);
};

function closePopupProfile() {
  popupFormCloseButton.removeEventListener('click', closePopupProfile);
  popupCommon(popup, 'popup_opened');
};

function openPopupAddCard() {
  const inputList = Array.from(popupAddCard.querySelectorAll('.popup__input'));
  toggleButtonState(inputList, popupAddCardFormSubmit);
  addCardNameInput.value = '';
  addCardImageLink.value = '';
  popupCommon(popupAddCard, 'popup_opened');
  hideError(popupAddCardContainer);
  popupAddFormCloseButton.addEventListener('click', closePopupAddCard);
  popupAddCard.querySelector('.popup__button').classList.add('popup__button_disabled');
  popupAddCard.querySelector('.popup__form').addEventListener('submit', formAddCardSubmitHandler);
};

function closePopupAddCard() {
  popupCommon(popupAddCard, 'popup_opened');
  popupAddFormCloseButton.removeEventListener('click', closePopupAddCard);
};

function closePopupImage() {
  popupCommon(popupImage, 'popup_opened');
  popupImageCloseButton.removeEventListener('click', closePopupImage);
};

/*ОБЩАЯ ФУНКЦИЯ ЗАКРЫТИЯ ОКНА POPUP ПО НАЖАТИЮ ESCAPE*/

function commonFunctionCloseEsc(evt) {
  const openedPopup = document.querySelector('.popup_opened');
  if (evt.key === 'Escape' && openedPopup) {
    openedPopup.classList.remove('popup_opened');
  };
};

/*ОБЩАЯ ФУНКЦИЯ ЗАКРЫТИЯ ОКНА POPUP ПО КЛИКУ ПО ОВЕРЛЕЙ*/

function commonFunctionClickOverlay(evt) {
  const openedPopup = document.querySelector('.popup_opened');
  if (evt.target.classList.contains('popup__overlay')) {
    openedPopup.classList.remove('popup_opened');
  };
};

/*РАБОТА С ФОРМОЙ ОКНА ИЗМЕНЕНИЯ ДАННЫХ ПОЛЬЗОВАТЕЛЯ*/

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileTitleName.textContent = nameInput.value;
  profileSubtitleAbout.textContent = jobInput.value;
  closePopupProfile();
};

/*РАБОТА С ФОРМОЙ ОКНА ДОБАВЛЕНИЯ КАРТОЧКИ*/

function formAddCardSubmitHandler(evt) {
  evt.preventDefault();
  addCardToPage(cardToPage(addCardNameInput.value, addCardImageLink.value), cardContainer)
  closePopupAddCard();
};

editButton.addEventListener('click', openPopupProfile);
profileAddButton.addEventListener('click', openPopupAddCard);
