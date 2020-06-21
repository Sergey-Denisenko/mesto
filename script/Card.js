console.log('Файл Card.js подключился');

// class Card {
//   constructor(title, image) {
//     this._title = title;
//     this._image = image;
//   }
//   //получаю готовую разметку перед размещением на страницу
//   _getTemplate() {
//     // забираю размеку из HTML и клонирую элемент
//     const cardElement = document
//     .querySelector('.template-card')
//     .content
//     .querySelector('.card')
//     .cloneNode(true);
//     // верну DOM-элемент карточки
//     return cardElement;
//     }

//     //Подготовка карточки к публикации. Добавление данных в разметку
//     generateCard() {
//       this._element = this._getTemplate();
//       this._element.querySelector('.card__title').textContent = this._title //itemPicName; //СВОЙСТВО
//       this._element.querySelector('.card__image').src = this._image; //СВОЙСТВО
//       this._element.querySelector('.card__image').alt = `Картинка ${this._title}`; //СВОЙСТВО
//       return this._element;
//     }
// }

// initialCards.forEach(function (item) {
//   const card = new Card(item.name, item.link);
//   const cardElement = card.generateCard();
//   cardContainer.append(cardElement);
// });

class Card {
  constructor(data) {
    this._title = data.name;
    this._image = data.link;
  }
  //получаю готовую разметку перед размещением на страницу
  _getTemplate() {
    // забираю размеку из HTML и клонирую элемент
    const cardElement = document
    .querySelector('.template-card')
    .content
    .querySelector('.card')
    .cloneNode(true);
    // верну DOM-элемент карточки
    return cardElement;
    }

    //Подготовка карточки к публикации. Добавление данных в разметку
    generateCard() {
      this._element = this._getTemplate();
      this._element.querySelector('.card__title').textContent = this._title //itemPicName; //СВОЙСТВО
      this._element.querySelector('.card__image').src = this._image; //СВОЙСТВО
      this._element.querySelector('.card__image').alt = `Картинка ${this._title}`; //СВОЙСТВО
      return this._element;
    }
}

initialCards.forEach(function (item) {
  const card = new Card(item);
  const cardElement = card.generateCard();
  cardContainer.append(cardElement);
});



//------------------------------------------


class Card {
  constructor(data) {//один параметр - Селектор темплейта
     this._title = data.name;
     this._image = data.link;
     console.log('Card check');
  }
 //получаю готовую разметку перед размещением на страницу
 //Задача метода _getTemplate — вернуть разметку карточки через return
 _getTemplate() {
   // забираю размеку из HTML и клонирую элемент
   const cardElement = document
   .querySelector('.card-template')
   .content
   .querySelector('.card')
   .cloneNode(true);
   return cardElement;
   }

   //Подготовка карточки к публикации. Добавление данных в разметку
   generateCard() {
     this._element = this._getTemplate();
     this._setEventListeners();
     this._element.querySelector('.card__title').textContent = this._title //itemPicName; //СВОЙСТВО
     this._element.querySelector('.card__image').src = this._image; //СВОЙСТВО
     this._element.querySelector('.card__image').alt = `Картинка ${this._title}`; //СВОЙСТВО
     return this._element;
   }

   _handleImageClick() {
     openPopupImage();
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

initialCards.forEach(function (item) {
 const card = new Card(item);
 const cardElement = card.generateCard();
 cardContainer.append(cardElement);
});


//-------------------------------------------------

class Card {
  constructor(data, cardSelector) {//один параметр - Селектор темплейта
     // super(cardSelector);
     this._title = data.name;
     this._image = data.link;
     this._cardSelector = cardSelector;
     console.log('Card check');
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

   //Подготовка карточки к публикации. Добавление данных в разметку
   generateCard() {
     this._element = this._getTemplate();
     this._setEventListeners();
     this._element.querySelector('.card__title').textContent = this._title //itemPicName; //СВОЙСТВО
     this._element.querySelector('.card__image').src = this._image; //СВОЙСТВО
     this._element.querySelector('.card__image').alt = `Картинка ${this._title}`; //СВОЙСТВО
     return this._element;
   }

   _handleImageClick() {
     openPopupImage();
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

initialCards.forEach(function (item) {
 const card = new Card(item, '.card-template');
 const cardElement = card.generateCard();
 cardContainer.append(cardElement);
});


//---------------------------------------------------








//   const card = new Card();



//     const cardContainer = document.querySelector('.card-container');



// /*МАКЕТ КАРТОЧКИ*/
// function cardToPage(itemPicName, itemLink) {
//   const cardTemplate = document.querySelector('#card').content;
//   const cardElement = cardTemplate.cloneNode(true);
//   cardElement.querySelector('.card__title').textContent = itemPicName; //СВОЙСТВО
//   cardElement.querySelector('.card__image').src = itemLink; //СВОЙСТВО
//   cardElement.querySelector('.card__image').alt = `Картинка ${itemPicName}`; //СВОЙСТВО

//   cardElement.querySelector('.card__image').addEventListener('click', function() {
//     openPopupImage(itemPicName, itemLink);
//   }); //МЕТОД

//   cardElement.querySelector('.card__like').addEventListener('click', function(evt) {
//     cardLikeSwitcher(evt); //МЕТОД
//   });

//   cardElement.querySelector('.card__trash').addEventListener('click', function(evt) {
//     cardToTrash(evt); //МЕТОД
//   });
//   return cardElement;
// };


// const initCardsCopy = initialCards.slice();
// const initCardsRevers = initCardsCopy.reverse();

// for (let i = 0; i < initCardsRevers.length; i++) {
//   addCardToPage(cardToPage(initCardsRevers[i].name, initCardsRevers[i].link), cardContainer);
// };


//     function addCardToPage(card, container){
//       container.prepend(card);
//     };


//   }


// }

























class Card {
  constructor(cardSelector) {//один параметр - Селектор темплейта
    this._cardSelector = cardSelector;
  }
 //получаю готовую разметку перед размещением на страницу
 _getTemplate() {
   // забираю размеку из HTML и клонирую элемент
   const cardElement = document
   //.querySelector(this._cardSelector)//('.card-template')
   .querySelector('.card-template')
   .content
   .querySelector('.card')
   .cloneNode(true);
   // верну DOM-элемент карточки
   // this._element = cardElement;
   return cardElement;
   }

   //Подготовка карточки к публикации. Добавление данных в разметку
   // generateCard() {
   //   this._element = this._getTemplate();
   //   this._setEventListeners();
   //   this._element.querySelector('.card__title').textContent = this._title //itemPicName; //СВОЙСТВО
   //   this._element.querySelector('.card__image').src = this._image; //СВОЙСТВО
   //   this._element.querySelector('.card__image').alt = `Картинка ${this._title}`; //СВОЙСТВО
   //   return this._element;
   // }

   _handleImageClick() {
     openPopupImage();
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

class DefaultCard extends Card {
 constructor(data, cardSelector) {
   super(cardSelector);
   this._title = data.name;
   this._image = data.link;
   console.log('DefaultCard check');

 }

 generateCard() {
   this._element = super._getTemplate();
   super._setEventListeners();
   this._element.querySelector('.card__title').textContent = this._title //itemPicName; //СВОЙСТВО
   this._element.querySelector('.card__image').src = this._image; //СВОЙСТВО
   this._element.querySelector('.card__image').alt = `Картинка ${this._title}`; //СВОЙСТВО
   console.log('DefaultCard generateCard() check');
   return this._element;
 }
}

class UserCard extends Card {
 constructor(data, cardSelector) {
   super(cardSelector);
   this._title = data.name;
   this._image = data.link;
   console.log('UserCard check');

 }
 generateCard() {
   this._element = super._getTemplate();
   super._setEventListeners();
   this._element.querySelector('.card__title').textContent = addCardNameInput.value //itemPicName; //СВОЙСТВО
   this._element.querySelector('.card__image').src = addCardImageLink.value; //СВОЙСТВО
   this._element.querySelector('.card__image').alt = `Картинка ${addCardNameInput.value}`; //СВОЙСТВО
   return this._element;
 }
}

// function addCardToPage(card, container){
//   container.prepend(card);
// };


initialCards.forEach((item) => {
 console.log('initialCards.forEach');
 const card = new DefaultCard(item, '.card');
 console.log(card);
 // const cardElement = card.generateCard();
 // console.log(cardElement);

 // const card = new DefaultCard(item, '.template-card');
 // const cardElement = card.generateCard();
 // cardContainer.append(cardElement);
 cardContainer.append(card);
})//generateCard(card)
 // function addCardToContainer(item) {
 // const card = new DefaultCard(item, '.card'); //data, cardSelector
 // const cardElement = card.generateCard();
 // cardContainer.append(cardElement);
 // // addCardToContainer
 // console.log(cardElement);

 // }
 // initialCards.forEach((item) => {
 //      console.log('initialCards.forEach');
 //   addCardToContainer(item);
 // })

//   function addCardToContainer(item) {
//   const card = new Card(item, '.card'); //data, cardSelector
//   const cardElement = generateCard();
//   cardContainer.append(card);
//   }
// initialCards.forEach(
//   // function (item) {
//   // const card = new Card(item);
//   // const cardElement = card.generateCard();
//   // cardContainer.append(cardElement);
// addCardToContainer
// // });
// );
console.log('check');



// const renderElements = (isGrid) => {

//   card.forEach((item) => {
//     const card = isGrid
//       ? new DefaultCard(item, '.default-card')
//       : new HorizontalCard(item, '.horizontal-card');

//     const cardElement = card.generateCard();
//     cardList.append(cardElement);
//   });

// };

// const renderElements = (isDefaultCard) => {
//   // cardList.innerHTML = '';
//   initialCards.forEach((item) => {
//     const card = isDefaultCard
//       ? new DefaultCard(item, '.card')
//       : new UserCard(item, '.card');

//     const cardElement = card.generateCard();
//     cardContainer.append(cardElement);
//   });
// }
