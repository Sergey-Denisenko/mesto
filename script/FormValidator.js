export const optionObject = {
  formSelector: '.popup__form', // Класс формы
  inputSelector: '.popup__input', // Класс инпута
  submitButtonSelector: '.popup__button', // Класс кнопки
  inactiveButtonClass: 'popup__button_disabled', // Класс отключающий кнопку
  inputErrorClass: 'popup__input_type_error', // Класс отрабатывающий ошибку
  errorClass: 'popup__error_visible' // Класс показывающий ошибку
};

export class FormValidator {
  constructor(optionObject, formElement) { //Принимает объект настроек и элемент формы
    this._optionObject = optionObject;
    this._formElement = formElement;
    this._formSelector = optionObject.formSelector; // Класс формы
    this._inputSelector = optionObject.inputSelector; // Класс инпута
    this._submitButtonSelector = optionObject.submitButtonSelector; // Класс кнопки
    this._inactiveButtonClass = optionObject.inactiveButtonClass; // Класс отключающий кнопку
    this._inputErrorClass = optionObject.inputErrorClass; // Класс отрабатывающий ошибку
    this._errorClass = optionObject.errorClass;// Класс показывающий ошибку
    this._submitButtonElement = this._formElement.querySelector(this._submitButtonSelector); //Поиск кнопки в форме
    this._inputElement = this._formElement.querySelector(this._inputSelector); //Поиск элемента <Input>
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));//Список полей ввода
  };

  _showInputError(formElement, inputElement, errorMessage) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  };

  _hideInputError(formElement, inputElement) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  };

  _isValid(formElement, inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(formElement, inputElement);
    };
  };

  _hasInvalidInput() {
    return this._inputList.some(function(inputElement) {
      return !inputElement.validity.valid;
    });
  };

  _toggleButtonState() {
    if (this._hasInvalidInput(this._inputList)) {
      this._submitButtonElement.classList.add(this._inactiveButtonClass);
      this._submitButtonElement.disabled = true;
    } else {
      this._submitButtonElement.classList.remove(this._inactiveButtonClass);
      this._submitButtonElement.disabled = false;
    };
  };

  _setEventListeners() {
    this._inputList.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
      this._isValid(this._formElement, inputElement);
        this._toggleButtonState(this._inputList, this._submitButtonElement);
      });
    });
  };

  enableValidation() {
  this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault()
    });
    this._setEventListeners();
  };
};

// const formElementPopupProfile = document.querySelector('.popup-profile').querySelector(optionObject.formSelector);
// const validatorProfile = new FormValidator(optionObject, formElementPopupProfile);
// validatorProfile.enableValidation();
// validatorProfile._toggleButtonState();

// const formElementPopupAddCard = document.querySelector('.popup-add-card').querySelector(optionObject.formSelector);
// const validatorAddCard = new FormValidator(optionObject, formElementPopupAddCard);
// validatorAddCard.enableValidation();
// validatorAddCard._toggleButtonState();
