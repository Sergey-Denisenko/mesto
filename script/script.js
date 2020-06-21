// КАРТОЧКИ ПО УМОЛЧАНИЮ ПОДКЛЮЧЕНЫ ОТДЕЛЬНЫМ ФАЙЛОМ - initial-cards.js

const profileTitleName = document.querySelector('.profile__title-name');
const profileSubtitleAbout = document.querySelector('.profile__subtitle-about');

const nameInput = document.querySelector('.popup__form-name');
const jobInput = document.querySelector('.popup__form-about');

const editButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup-profile');
const popupFormSubmit = document.querySelector('.popup__form-submit');
const popupContainer = popupProfile.querySelector('.popup__container');

const profileAddButton = document.querySelector('.profile__add-button');
const popupAddCard = document.querySelector('.popup-add-card');
const addCardNameInput = document.querySelector('.popup-add-card__form-name');
const addCardImageLink = document.querySelector('.popup-add-card__form-image-link');
const popupAddCardFormSubmit = document.querySelector('.popup-add-card__form-submit');
const popupAddCardContainer = popupAddCard.querySelector('.popup-add-card__container');

const userDataForCardObject = [
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







class Card {
  //  constructor(data, cardSelector) {//один параметр - Селектор темплейта
   constructor(cardSelector) {//один параметр - Селектор темплейта
    this._cardSelector = cardSelector;
      // super(cardSelector);
      // this._title = data.name;
      // this._image = data.link;

      console.log('Card cardSelector check');
   }
  //получаю готовую разметку перед размещением на страницу
  //Задача метода _getTemplate — вернуть разметку карточки через return
  _getTemplate() {
    // забираю размеку из HTML и клонирую элемент
    const cardElement = document
    .querySelector(this._cardSelector)//('.card-template')
    // .querySelector('.card-template')
    .content
    .querySelector('.card')
    .cloneNode(true);
    // верну DOM-элемент карточки
    // this._element = cardElement;
    return cardElement;
    }

    // //Подготовка карточки к публикации. Добавление данных в разметку
    // generateCard() {
    //   this._element = this._getTemplate();
    //   this._setEventListeners();
    //   this._element.querySelector('.card__title').textContent = this._title //itemPicName; //СВОЙСТВО
    //   this._element.querySelector('.card__image').src = this._image; //СВОЙСТВО
    //   this._element.querySelector('.card__image').alt = `Картинка ${this._title}`; //СВОЙСТВО
    //   return this._element;
    // }

    _handleImageClick() {
      openPopupImage();
    }

    _handleLikeClick() {
      this._element.querySelector('.card__like').classList.toggle('card__like_active-black');
    }


    _handleTrashClick() {
      this._element.querySelector('.card__trash').closest('.card').remove();
    }



    _setEventListeners() {
      this._element.querySelector('.card__like').addEventListener('click', () => {
        this._handleLikeClick();
      });
      this._element.querySelector('.card__trash').addEventListener('click', () => {
        this._handleTrashClick();
      });
      this._element.querySelector('.card__image').addEventListener('click', () => {
        this._handleImageClick();
      });

    }
}


class DefaultCard extends Card {
  constructor(data, cardSelector) {//один параметр - Селектор темплейта
  super(cardSelector);

  this._title = data.name;
  this._image = data.link;

    console.log('DefaultCard check');
    // console.log(this._title, this._image);

 }

  //Подготовка карточки к публикации. Добавление данных в разметку
  generateCard() {
    this._element = super._getTemplate();
    super._setEventListeners();
    this._element.querySelector('.card__title').textContent = this._title //itemPicName; //СВОЙСТВО
    this._element.querySelector('.card__image').src = this._image; //СВОЙСТВО
    this._element.querySelector('.card__image').alt = `Картинка ${this._title}`; //СВОЙСТВО
    console.log(this._element);
    console.log('generateCard DefaultCard check');

    return this._element;

  }
}
class UserCard extends Card {
  constructor(userDataForCardObject, cardSelector) {//один параметр - Селектор темплейта
    super(cardSelector);

    this._title = userDataForCardObject.name;
    this._image = userDataForCardObject.link;
    this._isUser = true;

      console.log('UserCard check');
   }

  generateCard() {
    this._element = super._getTemplate();
    super._setEventListeners();
    this._element.querySelector('.card__title').textContent = addCardNameInput.value //itemPicName; //СВОЙСТВО
    this._element.querySelector('.card__image').src = addCardImageLink.value; //СВОЙСТВО
    this._element.querySelector('.card__image').alt = `Картинка ${addCardNameInput.value}`; //СВОЙСТВО
    return this._element;
  }
}

function addCardToContainer(item, cardType) {
  // const card = item.isDefault
  //   ? new DefaultCard(item, '.card-template')
  //   : new UserCard(item, '.card-template');
    const card = new cardType(item, '.card-template')
    const cardElement = card.generateCard();
    cardContainer.prepend(cardElement);
}

//Перебор массива в обратном порядке
const initCardsCopy = initialCards.slice();
const initCardsRevers = initCardsCopy.reverse();
initCardsRevers.forEach(function (item) {
  addCardToContainer(item, DefaultCard);
  });


//--------------------------РАБОЧИЙ ВАРИАНТ
// initialCards.forEach(function (item) {
//   const card = new Card(item, '.card-template');
//   const cardElement = card.generateCard();
//   cardContainer.append(cardElement);
// });

//--------------------------РАБОЧИЙ ВАРИАНТ
// initialCards.forEach(function (item) {
//   const card = new Card(item);
//   const cardElement = card.generateCard();
//   cardContainer.append(cardElement);
// });
//--------------------------

console.log('check');









/*ДОБАВЛЯЮ КАРТОЧКИ НА СТРАНИЦУ*/
// function addCardToPage(card, container){
//   container.prepend(card);
// };

/*ОТКРЫТИЕ POPUP*/
function openPopupImage(imageName, imageLink) {
  popupImageTitle.textContent = imageName;
  popupImageImage.src = imageLink;
  popupImageImage.alt = `Картинка ${imageName}`;
  popupCommon(popupImage, 'popup_opened');
};

/*ДОБАВЛЕНИЕ ИМЕНОВАННОЙ ФУНКЦИИ ПОСТАВИТЬ / СНЯТЬ ЛАЙК*/
// const cardLikeSwitcher = function(evt) {
//   evt.target.classList.toggle('card__like_active-black');
// };

/*ДОБАВЛЕНИЕ ИМЕНОВАННОЙ ФУНКЦИИ УДАЛЕНИЯ КАРТОЧКИ*/
// const cardToTrash = function(evt) {
//   evt.target.closest('.card').remove();
// };

/*МАКЕТ КАРТОЧКИ*/
// function cardToPage(itemPicName, itemLink) {
//   const cardTemplate = document.querySelector('#card').content;
//   const cardElement = cardTemplate.cloneNode(true);
//   cardElement.querySelector('.card__title').textContent = itemPicName; //СВОЙСТВО
//   cardElement.querySelector('.card__image').src = itemLink; //СВОЙСТВО
//   cardElement.querySelector('.card__image').alt = `Картинка ${itemPicName}`; //СВОЙСТВО

//   cardElement.querySelector('.card__image').addEventListener('click', function() {
//     openPopupImage(itemPicName, itemLink);
//   }); //МЕТОД

//   cardElement.querySelector('.card__like').addEventListener('click', function(evt) {
//     cardLikeSwitcher(evt); //МЕТОД
//   });

//   cardElement.querySelector('.card__trash').addEventListener('click', function(evt) {
//     cardToTrash(evt); //МЕТОД
//   });
//   return cardElement;
// };

//Перебор массива в обратном порядке
// const initCardsCopy = initialCards.slice();
// const initCardsRevers = initCardsCopy.reverse();
//Добавление карточек по умолчанию
// for (let i = 0; i < initCardsRevers.length; i++) {
//   addCardToPage(cardToPage(initCardsRevers[i].name, initCardsRevers[i].link), cardContainer);
// };

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
  const inputList = Array.from(popupProfile.querySelectorAll('.popup__input'));
  toggleButtonState(inputList, popupFormSubmit);
  popupCommon(popupProfile, 'popup_opened');
  nameInput.value = profileTitleName.textContent;
  jobInput.value = profileSubtitleAbout.textContent;
  hideError(popupContainer);
  popupProfile.querySelector('.popup__button').classList.add('popup__button_disabled');
};

function openPopupAddCard() {
  const inputList = Array.from(popupAddCard.querySelectorAll('.popup__input'));
  toggleButtonState(inputList, popupAddCardFormSubmit);
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
  // addCardToPage(cardToPage(addCardNameInput.value, addCardImageLink.value), cardContainer);
  //cardContainer.append(addCardToContainer());
  // addCardToContainer();
  // cardContainer.append(addCardToContainer(new UserCard(userDataForCardObject, cardSelector)));
  addCardToContainer(userDataForCardObject, UserCard);
  popupCommon(popupAddCard, 'popup_opened');
};

editButton.addEventListener('click', openPopupProfile);
profileAddButton.addEventListener('click', openPopupAddCard);

popupProfile.querySelector('.popup__form').addEventListener('submit', formSubmitHandler);
popupAddCard.querySelector('.popup__form').addEventListener('submit', formAddCardSubmitHandler);
