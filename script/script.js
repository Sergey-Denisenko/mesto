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

const initialCards = [
  {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

/*ДОБАВЛЯЮ КАРТОЧКИ НА СТРАНИЦУ*/
function addCardToPage(evt){
  const cardContainer = document.querySelector('.card-container');
  cardContainer.prepend(evt);
};

/*ОТКРЫТИЕ POPUP*/
function openPopupImage() {
  popupCommon(popupImage, 'popup-image_opened');
  animationOpen(popupImage, 'animation-opacity', 'animation-close-popup');
}

/*МАКЕТ КАРТОЧКИ*/
function cardToPage(itemPicName, itemLink) {
  const cardTemplate = document.querySelector('#card').content;
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector('.card__title').textContent = itemPicName;
  cardElement.querySelector('.card__image').src = itemLink;
  cardElement.querySelector('.card__image').alt = itemPicName;

  cardElement.querySelector('.card__image').addEventListener('click', function() {
    openPopupImage();
    popupImageTitle.textContent = itemPicName;
    popupImageImage.src = itemLink;
    popupImageImage.alt = itemPicName;
  })

  cardElement.querySelector('.card__like').addEventListener('click', function(evt) {
    evt.target.classList.toggle('card__like_active-black');
  });

  cardElement.querySelector('.card__trash').addEventListener('click', function(evt) {
    evt.target.closest('.card').remove();
  });
  addCardToPage(cardElement);
}

//Перебор массива в обратном порядке
const initCardsCopy = initialCards.slice();
const initCardsRevers = initCardsCopy.reverse();
//Добавление карточек по умолчанию
for (let i = 0; i < initCardsRevers.length; i++) {
  cardToPage(initCardsRevers[i].name, initCardsRevers[i].link);
}

/*ОТКРЫТИЕ И ЗАКРЫТИЕ ОКНА POPUP*/

//Функция использует setTimeout для корректного применения
//анимации затухания окна попапа с последующим удалением класса
function popupCommon(item, className) {
  setTimeout(function() {
    item.classList.toggle(className)
  }, 200);
}
//Функция анимации открытия попапа
function animationOpen(item, classNameAdd, classNameRemove) {
  item.classList.add(classNameAdd);
  item.classList.remove(classNameRemove);
}
//Функция анимации закрытия попапа
function animationClose(item, classNameAdd, classNameRemove) {
  item.classList.add(classNameAdd);
  item.classList.remove(classNameRemove);
}

//ФУНКЦИИ ОБРАБОТКИ ОТКРЫТИЯ / ЗАКРЫТИЯ ПОПАПОВ С ИНДИВИДУАЛЬНЫМ ФУНКЦИОНАЛОМ

function openPopup() {
  nameInput.value = profileTitleName.textContent;
  jobInput.value = profileSubtitleAbout.textContent;
  popupCommon(popup, 'popup_opened');
  animationOpen(popup, 'animation-opacity', 'animation-close-popup');
}

function closePopup() {
  popupCommon(popup, 'popup_opened');
  animationClose(popup, 'animation-close-popup', 'animation-opacity');
}

function openPopupAddCard() {
  addCardNameInput.value = '';
  addCardImageLink.value = '';
  popupCommon(popupAddCard, 'popup-add-card_opened');
  animationOpen(popupAddCard, 'animation-opacity', 'animation-close-popup');
}

function closePopupAddCard() {
  popupCommon(popupAddCard, 'popup-add-card_opened');
  animationClose(popupAddCard, 'animation-close-popup', 'animation-opacity');
}

function closePopupImage() {
  popupCommon(popupImage, 'popup-image_opened');
  animationClose(popupImage, 'animation-close-popup', 'animation-opacity');
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
  cardToPage(addCardNameInput.value, addCardImageLink.value);
  closePopupAddCard();
}

popupFormSubmit.addEventListener('click', formSubmitHandler);
popupFormSubmit.addEventListener('submit', formSubmitHandler);
editButton.addEventListener('click', openPopup);
popupFormCloseButton.addEventListener('click', closePopup);
profileAddButton.addEventListener('click', openPopupAddCard);
popupAddFormCloseButton.addEventListener('click', closePopupAddCard);
popupAddCardFormSubmit.addEventListener('click', formAddCardSubmitHandler);
popupImageCloseButton.addEventListener('click', closePopupImage);
