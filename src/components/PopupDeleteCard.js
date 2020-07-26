import { Popup } from './Popup.js';

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
      this._collbackFunctionDeleteApi(setCardId, deleteCardFromClassCard);
    });
  }
}
