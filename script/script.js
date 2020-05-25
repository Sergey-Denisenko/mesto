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
  //Циклом добавляю карточки по умолчанию
for (let i = 0; i < initialCards.length; i++) {
  //Вызов функции добавления одной карточки
  cardToPage(i);
}
/*ДОБАВЛЕНИЕ КАРТОЧКИ ПО УМОЛЧАНИЮ*/
function cardToPage(evt) {
    //Объявление константы, кладем в нее template карточки
  const cardTemplate = document.querySelector('#card').content;
    //Объявление константы, клонирование содержимого template в переменную
  const cardElement = cardTemplate.cloneNode(true);
    //Объявление константы для дальнейшей вставки карточки
  const cardContainer = document.querySelector('.card-container');
    //Присвоение элементу карточки значения поля формы
  cardElement.querySelector('.card__title').textContent = initialCards[evt].name;
  const itemPicName = initialCards[evt].name;
    //Присвоение элементу карточки значения поля формы
  cardElement.querySelector('.card__image').src = initialCards[evt].link;
  const itemLink = initialCards[evt].link
  console.log('Вставка массива карточек сработала');
  //Открытие попапа картинки и добавление в попап имени картинки и адреса загрузки
  // cardElement.querySelector('.card__image').addEventListener('click', openPopupImage);
  cardElement.querySelector('.card__image').addEventListener('click', function() {
    //Открытие попапа
  openPopupImage();
    //Добавление имени картинки в попап
  popupImageTitle.textContent = itemPicName;
  console.log(`${popupImageTitle.textContent} - значение popupImageTitle.textContent`);
    //Добавление адреса загрузки картинки в попап
  popupImageImage.src = itemLink;
  console.log(`${popupImageImage.src} - значение popupImageImage.src`);
     //Добавляю в альт имя картинки
  popupImageImage.alt = itemPicName;
  })
    //LIKE РВБОТА
  cardElement.querySelector('.card__like').addEventListener('click', function(evt) {
    evt.target.classList.toggle('card__like_active-black');
  });
    //УДАЛЕНИЕ КАРТОЧКИ
  cardElement.querySelector('.card__trash').addEventListener('click', function(evt) {
    evt.target.closest('.card').remove();
  });
    //ДОБАВЛЕНИЕ КАРТОЧКИ ПО УМОЛЧАНИЮ В КОНЕЦ ОЧЕРЕДИ / СПИСКА
  cardContainer.append(cardElement);
}

/*ФУНКЦИЯ ДОБАВЛЕНИЯ КАРТОЧКИ ПОЛЬЗОВАТЕЛЕМ*/
function addInfo() {
    //бъявление константы, кладем в нее template карточки
  const cardTemplate = document.querySelector('#card').content;
    //Объявление константы, клонирование содержимого template в переменную
  const cardElement = cardTemplate.cloneNode(true);
    //Объявление константы для дальнейшей вставки карточки
  const cardContainer = document.querySelector('.card-container');
    //Присвоение элементу карточки значения поля формы
  cardElement.querySelector('.card__title').textContent = addCardNameInput.value;
  const itemPicName = addCardNameInput.value;
    //Присвоение элементу карточки значения поля формы
  cardElement.querySelector('.card__image').src = addCardImageLink.value;
  const itemLink = addCardImageLink.value
  console.log('Вставка одной карточки сработала');
  //Открытие попапа картинки
  // cardElement.querySelector('.card__image').addEventListener('click', openPopupImage);
  cardElement.querySelector('.card__image').addEventListener('click', function() {
    //Открытие попапа
  openPopupImage();
    //Добавление имени картинки в попап
  popupImageTitle.textContent = itemPicName;
  console.log(`${popupImageTitle.textContent} - значение popupImageTitle.textContent`);
    //Добавление адреса загрузки картинки в попап
  popupImageImage.src = itemLink;
  console.log(`${popupImageImage.src} - значение popupImageImage.src`);
  //Добавляю в альт имя картинки
  popupImageImage.alt = itemPicName;
  })
    //LIKE РВБОТА
  cardElement.querySelector('.card__like').addEventListener('click', function(evt) {
    evt.target.classList.toggle('card__like_active-black');
  });
    //УДАЛЕНИЕ КАРТОЧКИ
  cardElement.querySelector('.card__trash').addEventListener('click', function(evt) {
    evt.target.closest('.card').remove();
  });
    //ДОБАВЛЕНИЕ КАРТОЧКИ ПОЛЬЗОВАТЕЛЕМ В НАЧАЛО ОЧЕРЕДИ / СПИСКА
  cardContainer.prepend(cardElement);
}


/*ОТКРЫТИЕ И ЗАКРЫТИЕ ОКНА POPUP*/


/* Открываю popup профиля по нажатию на кнопку  */
function openPopup() {
  /* Присваиваю полям формы по умолчанию значения полей профиля  */
  nameInput.value = profileTitleName.textContent;
  jobInput.value = profileSubtitleAbout.textContent;
    /* Добавляю модификатор класса popup*/
  popup.classList.remove('animation-close-popup');
  popup.classList.add('popup_opened');
  popup.classList.add('animation-opacity');
}

/* Закрываю popup профиля по нажатию на кнопку  */
function closePopup() {
/* Удаляю модификатор класса popup*/
  popup.classList.add('animation-close-popup');
  popup.classList.remove('animation-opacity');
  setTimeout(function() {
    popup.classList.remove('popup_opened')
  }, 200);
}

/* Открываю popup добавления карточки по нажатию на кнопку  */
function openPopupAddCard() {
  /* Запись пустой строки в поля формы */
  addCardNameInput.value = '';
  addCardImageLink.value = '';
  /* Добавляю модификатор класса popup*/
  popupAddCard.classList.remove('animation-close-popup');
  popupAddCard.classList.add('popup-add-card_opened');
  popupAddCard.classList.add('animation-opacity');
}

/* Закрываю popup добавления карточки по нажатию на кнопку  */
function closePopupAddCard() {
/* Удаляю модификатор класса popup*/
popupAddCard.classList.add('animation-close-popup');
popupAddCard.classList.remove('animation-opacity');
setTimeout(function() {
  popupAddCard.classList.remove('popup-add-card_opened')
}, 200);
  console.log('popupAddCard закрыт');
}


/* Открываю popup открытия большой картинки по нажатию на rкартинку */
function openPopupImage() {
  /* Добавляю модификатор класса popup-image*/
  popupImage.classList.remove('animation-close-popup');
  popupImage.classList.add('popup-image_opened');
  popupImage.classList.add('animation-opacity');
  console.log('popupImage открыт');
  // console.log(popup.classList);
}

/* Закрываю popup открытия большой картинки по нажатию на кнопку  */
function closePopupImage() {
  /* Удаляю модификатор класса popup*/
  popupImage.classList.add('animation-close-popup');
  popupImage.classList.remove('animation-opacity');
  setTimeout(function() {
    popupImage.classList.remove('popup-image_opened')
  }, 200);
  console.log('popupImage закрыт');
      // console.log(popup.classList);
  };


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
    console.log('Работа функции formSubmitHandler закончена')
}

function formAddCardSubmitHandler (evt) {
  evt.preventDefault();
  addInfo();
  closePopupAddCard();
  console.log('Работа функции formAddCardSubmitHandler закончена')
}

popupFormSubmit.addEventListener('click', formSubmitHandler);
popupFormSubmit.addEventListener('submit', formSubmitHandler);
editButton.addEventListener('click', openPopup);
popupFormCloseButton.addEventListener('click', closePopup);

profileAddButton.addEventListener('click', openPopupAddCard);
popupAddFormCloseButton.addEventListener('click', closePopupAddCard);
popupAddCardFormSubmit.addEventListener('click', formAddCardSubmitHandler);

popupImageCloseButton.addEventListener('click', closePopupImage);
