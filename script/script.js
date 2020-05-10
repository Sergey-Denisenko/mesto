// Находим форму в DOM
// let formElement = ;// Воспользуйтесь методом querySelector()



/*ПРИСВАИВНИЕ ПОЛЯМ ФОРМЫ ЗНАЧЕНИЙ ПОЛЕЙ ПРОФИЛЯ*/



/* Задаю переменные для получения информации из полей профиля  */
let profileTitleName = document.querySelector('.profile__title-name');
let profileSubtitleAbout = document.querySelector('.profile__subtitle-about');
console.log(profileTitleName.textContent, 'Имя взятое из профиля');
console.log(profileSubtitleAbout.textContent, 'Профессия взятая из профиля');
/* Задаю переменные для получения информации из полей формы по умолчанию  */
let nameInput = document.querySelector('.popup__form-name');
let jobInput = document.querySelector('.popup__form-about');
console.log(nameInput.value, 'Значение Имя в форме по умолчанию1');
console.log(jobInput.value, 'Значение Профессия в форме по умолчанию1');
/* Присваиваю полям формы по умолчанию значения полей профиля  */
nameInput.value = profileTitleName.textContent;
jobInput.value = profileSubtitleAbout.textContent;
console.log(nameInput.value, 'Значение Имя в форме по умолчанию2');
console.log(jobInput.value, 'Значение Профессия в форме по умолчанию2');



/*ОТКРЫТИЕ И ЗАКРЫТИЕ ОКНА POPUP*/



let editButton = document.querySelector('.profile__edit-button');
let popupFormCloseButton = document.querySelector('.popup__form-close-button');
const popup = document.querySelector('.popup');

/* Открываю popup по нажатию на кнопку  */
editButton.addEventListener('click', openPopup);
function openPopup() {
    // console.log('Мы открыли popup');
  popup.classList.add('popup_opened');
    // console.log(popup.classList);
 let popupOpened = document.querySelector('.popup_opened');
  popupOpened.setAttribute('style', 'display: block')
}

popupFormCloseButton.addEventListener('click', closePopup);
function closePopup() {
    // console.log('Мы закрыли popup');
  let popupOpened = document.querySelector('.popup_opened');
    // console.log(popupOpened);
  popupOpened.removeAttribute('style');
  popup.classList.remove('popup_opened');
    // console.log(popup.classList);
}



/*РАБОТА С ФОРМОЙ ОКНА POPUP*/



let popupFormSubmit = document.querySelector('.popup__form-submit');
    // Обработчик «отправки» формы, хотя пока
    // она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    // Так мы можем определить свою логику отправки.
    // О том, как это делать, расскажем позже.

    // Находим поля формы в DOM
    // Воспользуйтесь инструментом .querySelector()
    let nameInput = document.querySelector('.popup__form-name');
    let jobInput = document.querySelector('.popup__form-about');
      // console.log(nameInput.value, 'Значение Имя в форме по умолчанию3');
      // console.log(jobInput.value, 'Значение Профессия в форме по умолчанию3');
    // Получите значение полей из свойства value
    // Выберите элементы, куда должны быть вставлены значения полей
    // Вставьте новые значения с помощью textContent
    profileTitleName.textContent = nameInput.value;
    profileSubtitleAbout.textContent = jobInput.value;
      // console.log(profileTitleName.textContent, 'Значение Имя');
      // console.log(profileSubtitleAbout.textContent, 'Значение Профессия');
}
popupFormSubmit.addEventListener('click', formSubmitHandler);
popupFormSubmit.addEventListener('submit', formSubmitHandler);

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
// formElement.addEventListener('submit', formSubmitHandler);
