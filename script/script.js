// Находим форму в DOM
// let formElement = ;// Воспользуйтесь методом querySelector()

const profileTitleName = document.querySelector('.profile__title-name');
const profileSubtitleAbout = document.querySelector('.profile__subtitle-about');
const nameInput = document.querySelector('.popup__form-name');
const jobInput = document.querySelector('.popup__form-about');
const editButton = document.querySelector('.profile__edit-button');
const popupFormCloseButton = document.querySelector('.popup__form-close-button');
const popup = document.querySelector('.popup');
const popupFormSubmit = document.querySelector('.popup__form-submit');

const profileAddButton = document.querySelector('.profile__add-button');
const cardTitle = document.querySelector('.card__title'); // Заголовок картинки
const cardImage = document.querySelector('.card__image'); // Картинка карточки
const cardLike = document.querySelector('.card__like'); // Значек Like
const popupAddCard = document.querySelector('.popup-add-card'); // Попап  AddCard
const popupAddFormCloseButton = document.querySelector('.popup-add-card__form-close-button');
const AddCardNameInput = document.querySelector('.popup-add-card__form-name');
const AddCardImageLink = document.querySelector('.popup-add-card__form-image-link');

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

/*ОТКРЫТИЕ И ЗАКРЫТИЕ ОКНА POPUP*/


/* Открываю popup по нажатию на кнопку  */
function openPopup() {
  /* Присваиваю полям формы по умолчанию значения полей профиля  */
  nameInput.value = profileTitleName.textContent;
  jobInput.value = profileSubtitleAbout.textContent;
    // console.log('Мы открыли popup');
    /* Добавляю модификатор класса popup*/
  popup.classList.add('popup_opened');
    // console.log(popup.classList);
}

/* Закрываю popup по нажатию на кнопку  */
function closePopup() {
/* Удаляю модификатор класса popup*/
  popup.classList.remove('popup_opened');
    // console.log(popup.classList);
}



function openPopupAddCard() {
  /* Присваиваю полям формы по умолчанию значения полей профиля  */
  // AddCardNameInput.value = cardTitle.textContent;
  // AddCardImageLink.value = cardImage.src;
    // console.log('Мы открыли popup');
    /* Добавляю модификатор класса popup*/
    popupAddCard.classList.add('popup_opened');
    // console.log(popup.classList);
}

/* Закрываю popup по нажатию на кнопку  */
function closePopupAddCard() {
/* Удаляю модификатор класса popup*/
popupAddCard.classList.remove('popup_opened');
    // console.log(popup.classList);
}



/*РАБОТА С ФОРМОЙ ОКНА POPUP*/


    // Обработчик «отправки» формы, хотя пока
    // она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    // Так мы можем определить свою логику отправки.
    // О том, как это делать, расскажем позже.
    // Находим поля формы в DOM
    // Воспользуйтесь инструментом .querySelector()
    // Получите значение полей из свойства value
    // Выберите элементы, куда должны быть вставлены значения полей
    // Вставьте новые значения с помощью textContent
    profileTitleName.textContent = nameInput.value;
    profileSubtitleAbout.textContent = jobInput.value;


    // console.log(profileTitleName.textContent, 'Значение Имя')
    // console.log(profileSubtitleAbout.textContent, 'Значение Профессия')
    closePopup();
    closePopupAddCard();
    // console.log('Popup закрылся')
}
popupFormSubmit.addEventListener('click', formSubmitHandler);
popupFormSubmit.addEventListener('submit', formSubmitHandler);
editButton.addEventListener('click', openPopup);
popupFormCloseButton.addEventListener('click', closePopup);
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
// formElement.addEventListener('submit', formSubmitHandler);

profileAddButton.addEventListener('click', openPopupAddCard);
popupAddFormCloseButton.addEventListener('click', closePopupAddCard);



// добавление карточек средствами JS
// - создать ячейку карточки в качестве шаблона, которую буду вставлять   ГОТОВО

// - создаю форму добавления карточек (подумать как использовать уже готовую форму попапа)
//     форма должна открываться по нажатию плюса   ГОТОВО
//     форма должна закрываться по нажатию креста   ГОТОВО

// - добавление карточки на страницу
//     возможность задать в форме имя карточки
//     возможность задать в форме дрес карточке для загрузки в контейнер
//     при клике =сохранить= новая карточка должна встать на первое место, в начало контейнера
//     при клике =сохранить= диалоговое окно должно закрываться

//     - возможность ставить лайки
//         сердечко должно менять цвет

// - удаление карточки
//     добавитть иконку корзины (удаления)   ГОТОВО
//     карточка удаляется при клике на иконку удаления

// - открытие попапа с картинкой
//     открытие попапа при нажатии на картинку
//     закрфтие попапа при нажатии на крестик

