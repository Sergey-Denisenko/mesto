export class Popup {
	constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._popupCloseButton = this._popupSelector.querySelector('.popup__close-button');
	}

	open() {//item - конкретный popup
    this._popupSelector.classList.add('popup_opened');
	}

	close() {//item - конкретный popup
    this._popupSelector.classList.remove('popup_opened');
  }

	_handleEscClose(evt) {
    const openedPopup = document.querySelector('.popup_opened');
		if (evt.key === 'Escape' && openedPopup) {
			this.close();
    }
	}

	_handleOverlayClose(evt) {
    if (evt.target.classList.contains('popup__overlay')) {
			this.close();
    }
	}

	//добавляет слушатель клика иконке закрытия попапа
	setEventListeners() {
    this._popupCloseButton.addEventListener('click', () => {
      this.close();
    });

    document.addEventListener("keydown", (evt) => {
      this._handleEscClose(evt);
    });

    this._popupSelector.addEventListener("click", (evt) => {
      this._handleOverlayClose(evt);
    });
	}
}
