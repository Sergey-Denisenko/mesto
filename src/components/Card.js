export class Card {
  constructor(data, cardSelector, handleCardClick, handleOpenCardDeletePopup, dataUserInfo) {
    this._cardSelector = cardSelector;
    this._title = data.name;
    this._image = data.link;
    this._owner = data.owner;
    this._likes = data.likes;
    this._id = data._id;
    this._handleOpenCardDeletePopup = handleOpenCardDeletePopup;
    this._dataUserInfo = dataUserInfo;
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

  setCardId() {
    return this._id
  }

  _setEventListeners() {
    this._element.querySelector('.card__like').addEventListener('click', () => {
      this._handleLikeClick();
    });

    this._element.querySelector('.card__trash').addEventListener('click', (evt) => {
      evt.preventDefault();
      this._handleOpenCardDeletePopup();
      this.setCardId();
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
    this._element.querySelector('.card__like-counter').textContent = this._likes.length;

    return this._element;
  }

  deleteCard() {
    this._element.querySelector('.card__trash').closest('.card').remove();
  }

  showTrashIcon() {
    if (this._owner._id != this._dataUserInfo._id) {
      this._element.querySelector('.card__trash').classList.add('card__trash_disabled');
    }
  }

}




