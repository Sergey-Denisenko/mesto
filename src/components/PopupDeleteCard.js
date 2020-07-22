import { Popup } from './Popup.js';
import { Api } from './Api.js';

export class PopupDeleteCard extends Popup {
	constructor(popupSelector, collbackFunctionDeleteApi) {
    super(popupSelector);
    this._popupCardDeleteFormSubmit = this._popupSelector.querySelector('.popup-card-delete__form-submit');
    this._collbackFunctionDeleteApi = collbackFunctionDeleteApi;
  }

  setEventListeners(setCardId, deleteCardFromClassCard) {
    super.setEventListeners();
    this._popupCardDeleteFormSubmit.addEventListener('click', (evt) => {
      evt.preventDefault();
      console.log('PopupDeleteCard setEventListeners() 0');
      this._collbackFunctionDeleteApi(setCardId, deleteCardFromClassCard);
      console.log('this._collbackFunctionDeleteApi()');
      this.close();
    });
    console.log('PopupDeleteCard setEventListeners() 1');
  }
}
