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
  //Присвоение элементу карточки значения поля формы
cardElement.querySelector('.card__image').src = initialCards[evt].link;
console.log('Вставка массива карточек сработала');
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
    //Присвоение элементу карточки значения поля формы
  cardElement.querySelector('.card__image').src = addCardImageLink.value;
  console.log('Вставка одной карточки сработала');
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


/* Открываю popup по нажатию на кнопку  */
function openPopup() {
  /* Присваиваю полям формы по умолчанию значения полей профиля  */
  nameInput.value = profileTitleName.textContent;
  jobInput.value = profileSubtitleAbout.textContent;
    /* Добавляю модификатор класса popup*/
  popup.classList.add('popup_opened');
  console.log('Мы открыли popup - openPopup');
  // console.log(popup.classList);
}

/* Закрываю popup по нажатию на кнопку  */
function closePopup() {
/* Удаляю модификатор класса popup*/
  popup.classList.remove('popup_opened');
  console.log('Мы закрыли popup - closePopup');
    // console.log(popup.classList);
}

/* Открываю popup по нажатию на кнопку  */
function openPopupAddCard() {
  /* Запись пустой строки в поля формы */
  addCardNameInput.value = '';
  addCardImageLink.value = '';
  /* Добавляю модификатор класса popup*/
  popupAddCard.classList.add('popup-add-card_opened');
  console.log('popupAddCard открыт');
  // console.log(popup.classList);
}

/* Закрываю popup по нажатию на кнопку  */
function closePopupAddCard() {
/* Удаляю модификатор класса popup*/
  popupAddCard.classList.remove('popup-add-card_opened');
  console.log('popupAddCard закрыт');
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
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
// formElement.addEventListener('submit', formSubmitHandler);
// popupAddCardFormSubmit.addEventListener('click', formSubmitHandler);
// popupAddCardFormSubmit.addEventListener('submit', formSubmitHandler);
// profileAddButton.addEventListener('click', q);
profileAddButton.addEventListener('click', openPopupAddCard);
popupAddFormCloseButton.addEventListener('click', closePopupAddCard);
popupAddCardFormSubmit.addEventListener('click', formAddCardSubmitHandler);

















// добавление карточек средствами JS
// - создать ячейку карточки в качестве шаблона, которую буду вставлять   ГОТОВО

// - создаю форму добавления карточек (подумать как использовать уже готовую форму попапа)
//     форма должна открываться по нажатию плюса   ГОТОВО
//     форма должна закрываться по нажатию креста   ГОТОВО

// - добавление карточки на страницу
//     по умолчанию встают 6 карточек из заданного массива   ГОТОВО
//     возможность задать в форме имя карточки   ГОТОВО
//     возможность задать в форме адрес карточке для загрузки в контейнер   ГОТОВО
//     при клике =сохранить= новая карточка должна встать на первое место, в начало контейнера   ГОТОВО
//     при клике =сохранить= диалоговое окно должно закрываться   ГОТОВО

//     - возможность ставить лайки   ГОТОВО
//         сердечко должно менять цвет   ГОТОВО

// - удаление карточки   ГОТОВО
//     добавитть иконку корзины (удаления)   ГОТОВО
//     карточка удаляется при клике на иконку удаления   ГОТОВО

// - открытие попапа с картинкой
//     открытие попапа при нажатии на картинку
//     закрфтие попапа при нажатии на крестик

