  //popupForm = formElement
  //popupInput = formInput

  const popupForm = document.querySelector('.popup__form');
  const popupInput = popupForm.querySelector('.popup__input');
  // Выбираем элемент ошибки на основе id
  const popupError = popupForm.querySelector(`#${popupInput.id}-error`);

  popupForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
  });
  popupInput.addEventListener('input', function (evt) {
    console.log(evt.target.validity.valid);
    console.log('работает');
  });

  const showInputError = function(formElement, inputElement, errorMessage) {

    //popup__error_visible
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);



    inputElement.classList.add('popup__input_type_error'); //popup__input_type_error
    // Заменим содержимое span с ошибкой на переданный параметр
    errorElement.textContent = errorMessage;
    // Показываем сообщение об ошибке
    errorElement.classList.add('popup__error_visible');//popup__error_visible
  };

  const hideInputError = function(formElement, inputElement) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove('popup__input_type_error');
    // Скрываем сообщение об ошибке
    errorElement.classList.remove('popup__error_visible');
     // Очистим ошибку
    errorElement.textContent = '';
  };

  // Функция проверки валидности поля - переписанная для нескольких полей
  const isValid = function(formElement, inputElement) {
    if (!inputElement.validity.valid) {
      // Если поле не проходит валидацию, покажем ошибку
      showInputError(formElement, inputElement ,inputElement.validationMessage);
    } else {
      // Если проходит валидацию, скроем
      hideInputError(formElement, inputElement);
    }
  };
  //Работа с кнопкой сабмит и отмена стандартного поведения
  popupForm.addEventListener('submit', function (evt) {
    // Отменим стандартное поведение по сабмиту
    evt.preventDefault();
  });



  //Блокировка кнопки
  const hasInvalidInput = function (inputList) {
    return inputList.some(function(inputElement) {
      console.log(!inputElement.validity.valid + ' - проверка !inputElement.validity.valid');
      return !inputElement.validity.valid;
    })
  }

  const toggleButtonState = function(inputList, buttonElement) {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add('popup__button_disabled');
    } else {
      buttonElement.classList.remove('popup__button_disabled');
    }
  };





  const setEventListeners = function(formElement) {
   const inputList = Array.from(formElement.querySelectorAll('.popup__input'));

  // Найдём в текущей форме кнопку отправки
    const buttonElement = formElement.querySelector('.popup__button');
    toggleButtonState(inputList, buttonElement);

   inputList.forEach(function(inputElement) {
     inputElement.addEventListener('input', function() {
       isValid(formElement, inputElement);

   // Вызовем toggleButtonState и передадим ей массив полей и кнопку
       toggleButtonState(inputList, buttonElement);

     });
   });
  }

  const enableValidation = function() {
    const formList = Array.from(document.querySelectorAll('.popup__form'));
    formList.forEach(function(formElement) {
      formElement.addEventListener('submit', function(evt) {
        evt.preventDefault();
      });
      setEventListeners(formElement);
    });
  }
  // enableValidation();
  enableValidation({
    formSelector: '.popup__form', // Класс формы
    inputSelector: '.popup__input', // Класс инпута
    submitButtonSelector: '.popup__button', // Класс кнопки
    inactiveButtonClass: 'popup__button_disabled', // Класс отключающий кнопку
    inputErrorClass: 'popup__input_type_error', // Класс отрабатывающий ошибку
    errorClass: 'popup__error_visible' // Класс показывающий ошибку
  });
