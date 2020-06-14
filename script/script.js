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
function addCardToPage(evt, item){
  item.prepend(evt);
};

/*ОТКРЫТИЕ POPUP*/
function openPopupImage(ImageName, ImageLink) {
  popupImageTitle.textContent = ImageName;
  popupImageImage.src = ImageLink;
  popupImageImage.alt = `Картинка ${ImageName}`;
  popupCommon(popupImage, 'popup_opened');
  document.addEventListener("keydown", commonFunctionCloseEsc);
  popupImage.addEventListener("click", commonFunctionClickOverlay);
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
  const popupErrors = form.querySelectorAll('.popup__error');
  popupErrors.forEach(function(deleteErrorText) {
    deleteErrorText.classList.remove("popup__error_visible");
  });
};

/*ОТКЛЮЧАЮ КНОПКУ САБМИТ ПРИ ОТКРЫТИИ POPUP*/
// Функция отключения кнопки переделана и перенесена в файл validate.js

/*ОТКРЫТИЕ И ЗАКРЫТИЕ ОКНА POPUP*/

//Общая функция открытия / закрытия окна попапа
function popupCommon(item, className) {
  item.classList.toggle(className);
};

function openPopupProfile() {
  popupCommon(popup, 'popup_opened');
  nameInput.value = profileTitleName.textContent;
  jobInput.value = profileSubtitleAbout.textContent;
  document.addEventListener("keydown", commonFunctionCloseEsc);
  popup.addEventListener("click", commonFunctionClickOverlay);
  hideError(popupContainer);
  popupFormCloseButton.addEventListener('click', closePopupProfile);
  popup.querySelector('.popup__button').classList.add('popup__button_disabled');
  popup.querySelector('.popup__form').addEventListener('submit', formSubmitHandler, enableValidation(optionObject));
};

function closePopupProfile() {
  document.removeEventListener("keydown", commonFunctionCloseEsc);
  popup.removeEventListener("click", commonFunctionClickOverlay);
  popupFormCloseButton.removeEventListener('click', closePopupProfile);
  popup.querySelector('.popup__form').removeEventListener('submit', formSubmitHandler, enableValidation(optionObject));
  popupCommon(popup, 'popup_opened');
};

function openPopupAddCard() {
  addCardNameInput.value = '';
  addCardImageLink.value = '';
  popupCommon(popupAddCard, 'popup_opened');
  document.addEventListener("keydown", commonFunctionCloseEsc);
  popupAddCard.addEventListener("click", commonFunctionClickOverlay);
  hideError(popupAddCardContainer);
  popupAddFormCloseButton.addEventListener('click', closePopupAddCard);
  popupAddCard.querySelector('.popup__button').classList.add('popup__button_disabled');
  popupAddCard.querySelector('.popup__form').addEventListener('submit', formAddCardSubmitHandler, enableValidation(optionObject));
};

function closePopupAddCard() {
  popupCommon(popupAddCard, 'popup_opened');
  document.removeEventListener("keydown", commonFunctionCloseEsc);
  popupAddCard.removeEventListener("click", commonFunctionClickOverlay);
  popupAddFormCloseButton.removeEventListener('click', closePopupAddCard);
  popupAddCard.querySelector('.popup__form').removeEventListener('submit', formAddCardSubmitHandler, enableValidation(optionObject));
};

function closePopupImage() {
  popupCommon(popupImage, 'popup_opened');
  document.removeEventListener("keydown", commonFunctionCloseEsc);
  popupImage.removeEventListener("click", commonFunctionClickOverlay);
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
  if (evt.target.closest('.popup__overlay') == null && openedPopup) {
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
