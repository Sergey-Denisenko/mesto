const optionObject = {
  formSelector: '.popup__form', // Класс формы
  inputSelector: '.popup__input', // Класс инпута
  submitButtonSelector: '.popup__button', // Класс кнопки
  inactiveButtonClass: 'popup__button_disabled', // Класс отключающий кнопку
  inputErrorClass: 'popup__input_type_error', // Класс отрабатывающий ошибку
  errorClass: 'popup__error_visible' // Класс показывающий ошибку
};

const enableValidation = function() {
  const formList = Array.from(document.querySelectorAll(optionObject.formSelector));
  formList.forEach(function(popupForm) {
    popupForm.addEventListener('submit', function(evt) {
      evt.preventDefault();
    });
    setEventListeners(popupForm);
  });
}

const showInputError = function(formElement, inputElement, errorMessage) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(optionObject.inputErrorClass); //popup__input_type_error
  errorElement.textContent = errorMessage;
  errorElement.classList.add(optionObject.errorClass);//popup__error_visible
};

const hideInputError = function(formElement, inputElement) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(optionObject.inputErrorClass);
  errorElement.classList.remove(optionObject.errorClass);
  errorElement.textContent = '';
};

const isValid = function(formElement, inputElement) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement ,inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

//Блокировка кнопки
const hasInvalidInput = function (inputList) {
  return inputList.some(function(inputElement) {
    return !inputElement.validity.valid;
  })
}

const toggleButtonState = function(inputList, buttonElement) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(optionObject.inactiveButtonClass);
  } else {
    buttonElement.classList.remove(optionObject.inactiveButtonClass);
  }
};

const setEventListeners = function(formElement) {
  const inputList = Array.from(formElement.querySelectorAll(optionObject.inputSelector));
  const buttonElement = formElement.querySelector(optionObject.submitButtonSelector);
  toggleButtonState(inputList, buttonElement);
  inputList.forEach(function(inputElement) {
    inputElement.addEventListener('input', function() {
      isValid(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
}

enableValidation(optionObject);
