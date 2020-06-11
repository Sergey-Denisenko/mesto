// КАРТОЧКИ ПО УМОЛЧАНИЮ ПОДКЛЮЧЕНЫ ОТДЕЛЬНЫМ ФАЙЛОМ - initial-cards.js

const profileTitleName = document.querySelector('.profile__title-name');
const profileSubtitleAbout = document.querySelector('.profile__subtitle-about');

const nameInput = document.querySelector('.popup__form-name');
const jobInput = document.querySelector('.popup__form-about');

const editButton = document.querySelector('.profile__edit-button');
const popupFormCloseButton = document.querySelector('.popup__form-close-button');
const popup = document.querySelector('.popup');
const popupFormSubmit = document.querySelector('.popup__form-submit');

const profileAddButton = document.querySelector('.profile__add-button');
const popupAddCard = document.querySelector('.popup-add-card');
const popupAddFormCloseButton = document.querySelector('.popup-add-card__form-close-button');
const addCardNameInput = document.querySelector('.popup-add-card__form-name');
const addCardImageLink = document.querySelector('.popup-add-card__form-image-link');
const popupAddCardFormSubmit = document.querySelector('.popup-add-card__form-submit');

const popupImage = document.querySelector('.popup-image');
const popupImageCloseButton = document.querySelector('.popup-image__close-button');
const popupImageImage = document.querySelector('.popup-image__image');
const popupImageTitle = document.querySelector('.popup-image__title');

const cardContainer = document.querySelector('.card-container');
// const cardLikeButton = document.querySelector('.card__like')
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
};

const cardLikeSwitcher = function(evt) {
  evt.target.classList.toggle('card__like_active-black');
  console.log('cardLikeSwitcher сработал');
};

const cardToTrash = function(evt) {
  evt.target.closest('.card').remove();
  console.log('cardToTrash сработал');
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
    console.log('cardLikeSwitcher(evt) сработал');
  });


  cardElement.querySelector('.card__trash').addEventListener('click', function(evt) {
    cardToTrash(evt);
    console.log('cardToTrash(evt) сработал');
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

/*ДОБАВЛЕНИЕ ИМЕНОВАННОЙ ФУНКЦИИ ПОСТАВИТЬ / СНЯТЬ ЛАЙК*/
// const cardLikeSwitcher = function() {
//   const cardLikeList = Array.from(document.querySelectorAll('.card__like'));
//   cardLikeList.forEach(function(likeItem) {
//     likeItem.addEventListener('click', function(evt) {
//       evt.target.classList.toggle('card__like_active-black');
//     });
//   });
// };


/*ДОБАВЛЕНИЕ ИМЕНОВАННОЙ ФУНКЦИИ УДАЛЕНИЯ КАРТОЧКИ*/
// const cardToTrash = function() {
//   const cardTrashItemList = Array.from(document.querySelectorAll('.card__trash'));
//   cardTrashItemList.forEach(function(trashItem) {
//     trashItem.addEventListener('click', function(evt) {
//     evt.target.closest('.card').remove();
//     });
//   });
// };

/*УБИРАЮ ПОКАЗ СООБЩЕНИЙ ВАЛИДАНИИ ИНПУТОВ ПРИ ОТКРЫТИИ POPUP*/
function deleteError() {
  const popupErrors = Array.from(document.querySelectorAll(".popup__error"));
  popupErrors.forEach(function(deleteErrorText) {
    deleteErrorText.classList.remove(optionObject.errorClass);
  });
};

/*ОТКЛЮЧАЮ КНОПКУ САБМИТ ПРИ ОТКРЫТИИ POPUP*/
function disabledButton() {
  const popupSubmitButtons = Array.from(document.querySelectorAll(optionObject.submitButtonSelector));
  popupSubmitButtons.forEach(function(addClassDisabled) {
    addClassDisabled.classList.add(optionObject.inactiveButtonClass);
  });
};

/*ОТКРЫТИЕ И ЗАКРЫТИЕ ОКНА POPUP*/

//Общая функция открытия / закрытия окна попапа
function popupCommon(item, className) {
  item.classList.toggle(className);
};

function openPopupProfile() {
  nameInput.value = profileTitleName.textContent;
  jobInput.value = profileSubtitleAbout.textContent;
  popupCommon(popup, 'popup_opened');
  document.addEventListener("keydown", commonFunctionCloseEsc);
  popup.addEventListener("click", commonFunctionClickOverlay);
  deleteError();
  disabledButton();
  popup.querySelector('.popup__button').addEventListener("click", addProfileData);
};

function closePopupProfile() {
  popupCommon(popup, 'popup_opened');
  document.removeEventListener("keydown", commonFunctionCloseEsc);
  popup.removeEventListener("click", commonFunctionClickOverlay);
  popup.querySelector('.popup__form-submit').removeEventListener("click", addProfileData);
};

function openPopupAddCard() {
  addCardNameInput.value = '';
  addCardImageLink.value = '';
  popupCommon(popupAddCard, 'popup_opened');
  document.addEventListener("keydown", commonFunctionCloseEsc);
  popupAddCard.addEventListener("click", commonFunctionClickOverlay);
  deleteError();
  disabledButton();
  popupAddCard.querySelector('.popup__button').addEventListener("click", addUserCardData);
};

function closePopupAddCard() {
  popupCommon(popupAddCard, 'popup_opened');
  document.removeEventListener("keydown", commonFunctionCloseEsc);
  popupAddCard.removeEventListener("click", commonFunctionClickOverlay);
  popupAddCard.querySelector('.popup__button').removeEventListener("click", addUserCardData);
};

function closePopupImage() {
  popupCommon(popupImage, 'popup_opened');
  document.removeEventListener("keydown", commonFunctionCloseEsc);
  popupImage.removeEventListener("click", commonFunctionClickOverlay);
};

/*ОБЩАЯ ФУНКЦИЯ ЗАКРЫТИЯ ОКНА POPUP ПО НАЖАТИЮ ESCAPE*/

function commonFunctionCloseEsc(evt) {
  if (evt.code == 'Escape') {
    const commonCloseEsc = Array.from(document.querySelectorAll('.popup'));
    commonCloseEsc.forEach(function(evt) {
      evt.classList.remove('popup_opened');
    });
  };
};

/*ОБЩАЯ ФУНКЦИЯ ЗАКРЫТИЯ ОКНА POPUP ПО КЛИКУ ПО ОВЕРЛЕЙ*/

function commonFunctionClickOverlay(evt) {
  if (evt.target.closest(optionObject.formSelector) == null) {
    const commonCloseEsc = Array.from(document.querySelectorAll('.popup'));
    commonCloseEsc.forEach(function(evt) {
      evt.classList.remove('popup_opened');
    });
  };
};

/*ДОБАВЛЕНИЕ ИЗМЕНЕННЫХ ДАННЫХ ПОЛЬЗОВАТЕЛЯ ПО КЛИКУ НА КНОПКУ СОХРАНИТЬ ИЛИ НАЖАТИЮ ENTER*/

function addProfileData() {
  if (!popupFormSubmit.classList.contains('popup__button_disabled')) {
    profileTitleName.textContent = nameInput.value;
    profileSubtitleAbout.textContent = jobInput.value;
    closePopupProfile();
  };
};

/*ДОБАВЛЕНИЕ КАРТОЧКИ ПО КЛИКУ НА КНОПКУ СОЗДАТЬ ИЛИ НАЖАТИЮ ENTER*/

function addUserCardData() {
  if (!popupAddCardFormSubmit.classList.contains('popup__button_disabled')) {
  addCardToPage(cardToPage(addCardNameInput.value, addCardImageLink.value), cardContainer)
  cardLikeSwitcher();
  cardToTrash();
  closePopupAddCard();
  };
};

/*РАБОТА С ФОРМОЙ ОКНА ИЗМЕНЕНИЯ ДАННЫХ ПОЛЬЗОВАТЕЛЯ*/

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileTitleName.textContent = nameInput.value;
  profileSubtitleAbout.textContent = jobInput.value;
};

/*РАБОТА С ФОРМОЙ ОКНА ДОБАВЛЕНИЯ КАРТОЧКИ*/

function formAddCardSubmitHandler (evt) {
  evt.preventDefault();
  addCardToPage(cardToPage(addCardNameInput.value, addCardImageLink.value), cardContainer);
};

popupFormSubmit.addEventListener('submit', formSubmitHandler);
editButton.addEventListener('click', openPopupProfile);
popupFormCloseButton.addEventListener('click', closePopupProfile);

profileAddButton.addEventListener('click', openPopupAddCard);
popupAddFormCloseButton.addEventListener('click', closePopupAddCard);
popupAddCardFormSubmit.addEventListener('submit', formAddCardSubmitHandler);

popupImageCloseButton.addEventListener('click', closePopupImage);

// cardLikeSwitcher();
// cardToTrash();
