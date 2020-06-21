const optionObject = {
  formSelector: '.popup__form', // Класс формы
  inputSelector: '.popup__input', // Класс инпута
  submitButtonSelector: '.popup__button', // Класс кнопки
  inactiveButtonClass: 'popup__button_disabled', // Класс отключающий кнопку
  inputErrorClass: 'popup__input_type_error', // Класс отрабатывающий ошибку
  errorClass: 'popup__error_visible' // Класс показывающий ошибку
};

export class FormValidator {
  //  constructor(data, cardSelector) {//один параметр - Селектор темплейта
  constructor(optionObject, formElement) { //Принимает объект настроек
  // this._cardSelector = cardSelector;
  console.log('Card cardSelector check');
  this._formSelector = optionObject.formSelector; // Класс формы
  this._inputSelector = optionObject.inputSelector; // Класс инпута
  this._submitButtonSelector = optionObject.submitButtonSelector; // Класс кнопки
  this._inactiveButtonClass = optionObject.inactiveButtonClass; // Класс отключающий кнопку
  this._inputErrorClass = optionObject.inputErrorClass; // Класс отрабатывающий ошибку
  this._errorClass = optionObject.errorClass;// Класс показывающий ошибку
  this._formElement = formElement;
  }


  _showInputError(formElement, inputElement, errorMessage) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass); //popup__input_type_error
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);//popup__error_visible
  };

  _hideInputError(formElement, inputElement) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  };

  _isValid(formElement, inputElement) {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement ,inputElement.validationMessage);
    } else {
      hideInputError(formElement, inputElement);
    }
  };

  _hasInvalidInput(inputList) {
    return inputList.some(function(inputElement) {
      return !inputElement.validity.valid;
    })
  };

  _toggleButtonState(inputList, buttonElement) {
    if (_hasInvalidInput(inputList)) {
      buttonElement.classList.add(this._inactiveButtonClass);
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.remove(this._inactiveButtonClass);
      buttonElement.disabled = false;
    }
  };


  _setEventListeners(formElement) {
      const inputList = Array.from(formElement.querySelectorAll(this._inputSelector));
      const buttonElement = formElement.querySelector(this._submitButtonSelector);
      inputList.forEach(function(inputElement) {
        inputElement.addEventListener('input', function() {
          isValid(formElement, inputElement);
          toggleButtonState(inputList, buttonElement);
        });
      });
  };

  enableValidation(optionObject) {
    const formList = Array.from(document.querySelectorAll(this._formSelector));
    formList.forEach(function(formItem) {
      formItem.addEventListener('submit', function(evt) {
        evt.preventDefault()
      });
      _setEventListeners(formItem);
    });
  }

};


enableValidation(optionObject);



// const showInputError = function(formElement, inputElement, errorMessage) {
//   const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
//   inputElement.classList.add(optionObject.inputErrorClass); //popup__input_type_error
//   errorElement.textContent = errorMessage;
//   errorElement.classList.add(optionObject.errorClass);//popup__error_visible
// };

// const hideInputError = function(formElement, inputElement) {
//   const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
//   inputElement.classList.remove(optionObject.inputErrorClass);
//   errorElement.classList.remove(optionObject.errorClass);
//   errorElement.textContent = '';
// };

// const isValid = function(formElement, inputElement) {
//   if (!inputElement.validity.valid) {
//     showInputError(formElement, inputElement ,inputElement.validationMessage);
//   } else {
//     hideInputError(formElement, inputElement);
//   }
// };

// //Блокировка кнопки
// const hasInvalidInput = function (inputList) {
//   return inputList.some(function(inputElement) {
//     return !inputElement.validity.valid;
//   })
// }

// const toggleButtonState = function(inputList, buttonElement) {
//   if (hasInvalidInput(inputList)) {
//     buttonElement.classList.add(optionObject.inactiveButtonClass);
//     buttonElement.disabled = true;
//   } else {
//     buttonElement.classList.remove(optionObject.inactiveButtonClass);
//     buttonElement.disabled = false;
//   }
// };

// const setEventListeners = function(formElement) {
//   const inputList = Array.from(formElement.querySelectorAll(optionObject.inputSelector));
//   const buttonElement = formElement.querySelector(optionObject.submitButtonSelector);
//   inputList.forEach(function(inputElement) {
//     inputElement.addEventListener('input', function() {
//       isValid(formElement, inputElement);
//       toggleButtonState(inputList, buttonElement);
//     });
//   });
// }

// const enableValidation = function(optionObject) {
//   const formList = Array.from(document.querySelectorAll(optionObject.formSelector));
//   formList.forEach(function(formItem) {
//     formItem.addEventListener('submit', function(evt) {
//       evt.preventDefault()
//     });
//     setEventListeners(formItem);
//   });
// };

// enableValidation(optionObject);
