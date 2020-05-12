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
    // console.log('Popup закрылся')
}
popupFormSubmit.addEventListener('click', formSubmitHandler);
popupFormSubmit.addEventListener('submit', formSubmitHandler);
editButton.addEventListener('click', openPopup);
popupFormCloseButton.addEventListener('click', closePopup);
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
// formElement.addEventListener('submit', formSubmitHandler);
