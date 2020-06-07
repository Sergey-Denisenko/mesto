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
function addCardToPage(evt, item){
  item.prepend(evt);
};

/*ОТКРЫТИЕ POPUP*/
function openPopupImage() {
  popupCommon(popupImage, 'popup-image_opened');
  document.addEventListener("keydown", popupImageCloseEsc, {once: true});
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

/*ОТКРЫТИЕ И ЗАКРЫТИЕ ОКНА POPUP*/

//Общая функция открытия / закрытия окна попапа
function popupCommon(item, className) {
  item.classList.toggle(className);
}


// function popupRemoveVisible(formEl) {
//   const popupRemoveVisibleArray = Array.from(formEl.querySelectorAll(`#${popupInput.id}-error`));
//   popupRemoveVisibleArray.forEach(function(inputSpan) {
//     inputSpan.classList.remove('popup__error_visible')
//   });
// }
// const popupRemoveVisible = document.querySelector('.popup__error');
// popupRemoveVisible.classList.remove('popup__error_visible');




// function eraseError(){
//   editButton.addEventListener('click', function() {

//     (optionObject.inputSelector).closest(optionObject.errorClass).remove();
//   });
// };

//ФУНКЦИИ ОБРАБОТКИ ОТКРЫТИЯ / ЗАКРЫТИЯ ПОПАПОВ С ИНДИВИДУАЛЬНЫМ ФУНКЦИОНАЛОМ
// function form(item) {

//   const cardTemplate = document.querySelector(".popup__form");


// const item =

//   item.querySelector('.popup__input').addEventListener('click', function(evt) {
//     evt.target.closest('.popup__error_visible').remove();
//   });
//   }




function openPopup() {
  // popup.classList.remove('popup__error_visible');
  // cardElement.querySelector('.card__trash').addEventListener('click', function(evt) {
  //   evt.target.closest('.card').remove();
  // });
  // eraseError(editButton);

// form();
  // popupCommon(popup, 'popup__error_visible');

  nameInput.value = profileTitleName.textContent;
  jobInput.value = profileSubtitleAbout.textContent;
  popupCommon(popup, 'popup_opened');
  //popupRemoveVisible(popup);
  // popup.classList.remove('popup__error_visible');
  // hideInputError(formElement, inputElement);
  document.addEventListener("keydown", popupCloseEsc, {once: true});
}

function closePopup() {
  popupCommon(popup, 'popup_opened');
}

function openPopupAddCard() {
  addCardNameInput.value = '';
  addCardImageLink.value = '';
  popupCommon(popupAddCard, 'popup-add-card_opened');
  //popupRemoveVisible(popupAddCard);
  document.addEventListener("keydown", popupAddCardCloseEsc, {once: true});
}

function closePopupAddCard() {
  popupCommon(popupAddCard, 'popup-add-card_opened');
}

function closePopupImage() {
  popupCommon(popupImage, 'popup-image_opened');
  };


  // const popupCloseOverlay = function() {
  //   popupImage.addEventListener('click', closePopupImage);
  // }
  // popupCloseOverlay();


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
// popupImage.addEventListener('click', closePopupImage);

// popup.addEventListener('click', closePopupImage());

// function popupCloseEsc() {
//   const popupCloseEsc = document.querySelector('.popup_opened');
//   document.addEventListener('keydown', function(event) {


//       closePopup();
//       event.repeat = false;
//       console.log('сработал Escape');
//       return;
//     }
//   });

// }



function popupCloseEsc(event) {
  if (event.code === 'Escape') {
    closePopup();
    event.repeat = false;
    console.log('сработал Escape');
};
};

function popupAddCardCloseEsc(event) {
  if (event.code === 'Escape') {
    closePopupAddCard();
    event.repeat = false;
    console.log('сработал Escape');
};
};

function popupImageCloseEsc(event) {
  if (event.code === 'Escape') {
    closePopupImage();
    event.repeat = false;
    console.log('сработал Escape');
};
};

// let closeEsc = document.querySelector('.popup');

// let closeEsc = document.querySelector('.popup');
// closeEsc.addEventListener("keydown", popupCloseEsc, {once: true});

// popupCloseEsc.addEventListener('keydown', function (evt) {
//     if (evt.keyCode === 27) {
//     closePopup();
//     console.log('ESC pressed');
//     };
//  });



// window.onkeydown = function(event) {
//   if ( event.keyCode == 27 ) {
//       console.log( 'escape pressed' );
//   }
// };
// document.addEventListener('keydown', function(event) {
//   if (event.code == 'Escape') {
//     alert('Отменить!')
//     console.log('сработал')
//   }
// });

// popupCloseEsc.addEventListener('keydown', function (evt) {
//     if (evt.code === 27) {
//     closePopup();
//     console.log('ESC pressed');
//     };
//  });

