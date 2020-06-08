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

nameInput.pattern = "[A-Za-zА-Яа-я -]{1,}";

/*ДОБАВЛЯЮ КАРТОЧКИ НА СТРАНИЦУ*/
function addCardToPage(evt, item){
  item.prepend(evt);
};

/*ОТКРЫТИЕ POPUP*/
function openPopupImage() {
  popupCommon(popupImage, 'popup-image_opened');
  document.addEventListener("keydown", popupImageCloseEsc, {once: true});
  popupImage.addEventListener("click", clickOverlayPopupImage, {once: true});
}

/*МАКЕТ КАРТОЧКИ*/
function cardToPage(itemPicName, itemLink) {
  const cardTemplate = document.querySelector('#card').content;
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector('.card__title').textContent = itemPicName;
  cardElement.querySelector('.card__image').src = itemLink;
  cardElement.querySelector('.card__image').alt = `Картинка ${itemPicName}`;

  cardElement.querySelector('.card__image').addEventListener('click', function() {
    openPopupImage();
    popupImageTitle.textContent = itemPicName;
    popupImageImage.src = itemLink;
    popupImageImage.alt = `Картинка ${itemPicName}`;
  })

  cardElement.querySelector('.card__like').addEventListener('click', function(evt) {
    evt.target.classList.toggle('card__like_active-black');
  });

  cardElement.querySelector('.card__trash').addEventListener('click', function(evt) {
    evt.target.closest('.card').remove();
  });

  return cardElement;
}

//Перебор массива в обратном порядке
const initCardsCopy = initialCards.slice();
const initCardsRevers = initCardsCopy.reverse();
//Добавление карточек по умолчанию
for (let i = 0; i < initCardsRevers.length; i++) {
  addCardToPage(cardToPage(initCardsRevers[i].name, initCardsRevers[i].link), cardContainer);
}

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
}

function openPopup() {
  nameInput.value = profileTitleName.textContent;
  jobInput.value = profileSubtitleAbout.textContent;
  popupCommon(popup, 'popup_opened');
  document.addEventListener("keydown", popupCloseEsc, {once: true});
  popup.addEventListener("click", clickOverlay, {once: true});
  deleteError();
  disabledButton()
}

function closePopup() {
  popupCommon(popup, 'popup_opened');
  document.removeEventListener("keydown", popupCloseEsc, {once: true});
  popup.removeEventListener("click", clickOverlay, {once: true});
}

function openPopupAddCard() {
  addCardNameInput.value = '';
  addCardImageLink.value = '';
  popupCommon(popupAddCard, 'popup-add-card_opened');
  document.addEventListener("keydown", popupAddCardCloseEsc, {once: true});
  popupAddCard.addEventListener("click", clickOverlayPopupAddCard, {once: true});
  deleteError();
  disabledButton()
}

function closePopupAddCard() {
  popupCommon(popupAddCard, 'popup-add-card_opened');
  document.removeEventListener("keydown", popupAddCardCloseEsc, {once: true});
  popupAddCard.removeEventListener("click", clickOverlayPopupAddCard, {once: true});
}

function closePopupImage() {
  popupCommon(popupImage, 'popup-image_opened');
  document.removeEventListener("keydown", popupImageCloseEsc, {once: true});
  popupImage.removeEventListener("click", clickOverlayPopupImage, {once: true});
};

/*ЗАКРЫТИЕ ОКНА POPUP ПО НАЖАТИЮ ESCAPE*/

function popupCloseEsc(evt) {
  if (evt.code === 'Escape') {
    closePopup();
    event.repeat = false;
};
};

function popupAddCardCloseEsc(evt) {
  if (evt.code === 'Escape') {
    closePopupAddCard();
    event.repeat = false;
};
};

function popupImageCloseEsc(evt) {
  if (evt.code === 'Escape') {
    closePopupImage();
    event.repeat = false;
};
};

/*ЗАКРЫТИЕ ОКНА POPUP ПО КЛИКУ ПО ОВЕРЛЕЙ*/

function clickOverlay(evt) {
  if (evt.target.closest(optionObject.formSelector) == null) {
    closePopup();
  };
};

function clickOverlayPopupAddCard(evt) {
  if (evt.target.closest(optionObject.formSelector) == null) {
    closePopupAddCard();
  };
};

function clickOverlayPopupImage(evt) {
  if (evt.target.closest(".popup-image__container") == null) {
    closePopupImage();
  };
};

/*РАБОТА С ФОРМОЙ ОКНА POPUP*/

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileTitleName.textContent = nameInput.value;
  profileSubtitleAbout.textContent = jobInput.value;
  closePopup();
}

/*РАБОТА С ФОРМОЙ ОКНА ДОБАВЛЕНИЯ КАРТОЧКИ*/

function formAddCardSubmitHandler (evt) {
  evt.preventDefault();
  addCardToPage(cardToPage(addCardNameInput.value, addCardImageLink.value), cardContainer)
  closePopupAddCard();
}

popupFormSubmit.addEventListener('click', formSubmitHandler);
popupFormSubmit.addEventListener('submit', formSubmitHandler);
editButton.addEventListener('click', openPopup);
popupFormCloseButton.addEventListener('click', closePopup);
popupFormCloseButton.addEventListener('click', closePopup);

profileAddButton.addEventListener('click', openPopupAddCard);
popupAddFormCloseButton.addEventListener('click', closePopupAddCard);
popupAddCardFormSubmit.addEventListener('click', formAddCardSubmitHandler);

popupImageCloseButton.addEventListener('click', closePopupImage);
