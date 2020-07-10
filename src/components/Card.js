export class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._cardSelector = cardSelector;
    this._title = data.name;
    this._image = data.link;
    this.handleCardClick = handleCardClick;
  }

  //получаю готовую разметку перед размещением на страницу
  //Возвращаю разметку карточки через return
  _returnCardElement() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.card')
      .cloneNode(true);

    return cardElement;
  }

  _handleImageClick() {
    this.handleCardClick(this._title, this._image);
  }

  _handleLikeClick() {
    this._element.querySelector('.card__like').classList.toggle('card__like_active-black');
  }

  _handleTrashClick() {
    this._element.querySelector('.card__trash').closest('.card').remove();
  }

  _setEventListeners() {
    this._element.querySelector('.card__like').addEventListener('click', () => {
      this._handleLikeClick();
    });
    this._element.querySelector('.card__trash').addEventListener('click', () => {
      this._handleTrashClick();
    });
    this._element.querySelector('.card__image').addEventListener('click', () => {
      this._handleImageClick();
    });
  }

  generateCard() {
    this._element = this._returnCardElement();
    this._setEventListeners();
    this._element.querySelector('.card__title').textContent = this._title;
    this._cardImage = this._element.querySelector('.card__image');
    this._cardImage.src = this._image;
    this._cardImage.alt = `Картинка ${this._title}`;

    return this._element;
  }
}
