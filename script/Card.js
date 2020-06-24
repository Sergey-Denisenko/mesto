import { openPopupImage } from './index.js';

class Card {
  constructor(cardSelector) {//один параметр - Селектор темплейта
  this._cardSelector = cardSelector;
  };
  //получаю готовую разметку перед размещением на страницу
  //Возвращаю разметку карточки через return
  _getTemplate() {
    const cardElement = document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.card')
    .cloneNode(true);
    return cardElement;
  };

  _handleLikeClick() {
    this._element.querySelector('.card__like').classList.toggle('card__like_active-black');
  };

  _handleTrashClick() {
    this._element.querySelector('.card__trash').closest('.card').remove();
  };

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
  };
}

export class DefaultCard extends Card {
  constructor(data, cardSelector) {
  super(cardSelector);
  this._title = data.name;
  this._image = data.link;
  };

  _handleImageClick() {
    openPopupImage(this._title, this._image);
  };

  //Подготовка карточки к публикации. Добавление данных в разметку
  generateCard() {
    this._element = super._getTemplate();
    super._setEventListeners();
    this._element.querySelector('.card__title').textContent = this._title;
    this._element.querySelector('.card__image').src = this._image;
    this._element.querySelector('.card__image').alt = `Картинка ${this._title}`;
    return this._element;
  };
}
export class UserCard extends Card {
  constructor(userDataCardObject, cardSelector) {
    super(cardSelector);
    this._title = userDataCardObject.name;
    this._image = userDataCardObject.link;
   };

  _handleImageClick() {
    openPopupImage(this._title, this._image);
  };

  generateCard() {
    this._element = super._getTemplate();
    super._setEventListeners();
    this._element.querySelector('.card__title').textContent = this._title;
    this._element.querySelector('.card__image').src = this._image;
    this._element.querySelector('.card__image').alt = `Картинка ${this._title}`;
    return this._element;
  };
}
