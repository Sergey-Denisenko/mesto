import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
	constructor(popupSelector, callBackSubmitForm) {
    super(popupSelector);
    this._callBackSubmitForm = callBackSubmitForm;
    this._popupButtonSubmitForm = this._popupSelector.querySelector('.popup__button')
  }

  _getInputValues() {
    this.inputValues = this._popupSelector.querySelectorAll('.popup__input');
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupButtonSubmitForm.addEventListener('click', this._callBackSubmitForm);
    this._popupCloseButton.addEventListener('click', () => {
      this.close();
    });
  }

  close() {
    this._popupButtonSubmitForm.removeEventListener('click', this._callBackSubmitForm);
    this._popupCloseButton.removeEventListener('click', () => {
      this.close();
    });
    this._getInputValues();
    super.close();
  }
}
