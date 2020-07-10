
import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
	constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = document.querySelector('.popup-image');
    this._popupImageImage = document.querySelector('.popup-image__image');
    this._popupImageTitle = document.querySelector('.popup-image__title');
	}

	open(imageName, imageLink) {
    super.open();
    this._popupImageTitle.textContent = imageName;
    this._popupImageImage.src = imageLink;
    this._popupImageImage.alt = `Картинка ${imageName}`;
  }
}
