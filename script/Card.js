import { openPopupImage } from './script.js';

class Card {
  //  constructor(data, cardSelector) {//один параметр - Селектор темплейта
   constructor(cardSelector) {//один параметр - Селектор темплейта
    this._cardSelector = cardSelector;
      console.log('Card cardSelector check');
   }
  //получаю готовую разметку перед размещением на страницу
  //Задача метода _getTemplate — вернуть разметку карточки через return
  _getTemplate() {
    // забираю размеку из HTML и клонирую элемент
    const cardElement = document
    .querySelector(this._cardSelector)//('.card-template')
    .content
    .querySelector('.card')
    .cloneNode(true);
    // верну DOM-элемент карточки
    // this._element = cardElement;
    return cardElement;
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
}

export class DefaultCard extends Card {
  constructor(data, cardSelector) {
  super(cardSelector);

  this._title = data.name;
  this._image = data.link;

    console.log('DefaultCard check');
    // console.log(this._title, this._image);
  }

  _handleImageClick() {
    openPopupImage(this._title, this._image);
  }

  //Подготовка карточки к публикации. Добавление данных в разметку
  generateCard() {
    this._element = super._getTemplate();
    super._setEventListeners();
    this._element.querySelector('.card__title').textContent = this._title //itemPicName; //СВОЙСТВО
    this._element.querySelector('.card__image').src = this._image; //СВОЙСТВО
    this._element.querySelector('.card__image').alt = `Картинка ${this._title}`; //СВОЙСТВО
    console.log(this._element);
    console.log('generateCard DefaultCard check');

    return this._element;
  }
}
export class UserCard extends Card {
  constructor(userDataCardObject, cardSelector) {
    super(cardSelector);
      // console.log('UserCard check');
    this._title = userDataCardObject.name;
    // console.log(this._title + ' - this._title');
    this._image = userDataCardObject.link;
    // console.log(this._image + ' - this._image');
    // this._isUser = true;
      console.log('UserCard check');
   }

   _handleImageClick() {
    openPopupImage(this._title, this._image);
  }

  generateCard() {
    this._element = super._getTemplate();
    super._setEventListeners();
    this._element.querySelector('.card__title').textContent = this._title //itemPicName; //СВОЙСТВО
    this._element.querySelector('.card__image').src = this._image; //СВОЙСТВО
    this._element.querySelector('.card__image').alt = `Картинка ${this._title}`; //СВОЙСТВО
    return this._element;
  }
}

