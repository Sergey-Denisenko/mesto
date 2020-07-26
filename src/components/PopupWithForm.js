import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
	constructor(popupSelector, callBackSubmitForm, loadingStatus) {
    super(popupSelector);
    this._callBackSubmitForm = callBackSubmitForm;
    this._loadingStatus = loadingStatus;
  }

  _getInputValues() { // - изменен метод
    this._inputValues = {};
    this._inputList = this._popupSelector.querySelectorAll('.popup__input');
    this._inputList.forEach(inputItem => {
      this._inputValues[inputItem.name] = inputItem.value;
    });

    return this._inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupSelector.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._callBackSubmitForm(this._getInputValues());
      this._loadingStatus();
    });

    this._popupCloseButton.addEventListener('click', () => {
      this.close();
    });
  }

  open() {//item - конкретный popup
    super.open();
    this._popupSelector.querySelector('.popup__form').reset();
	}
}
