
export class Section {
  constructor({ items, renderer }, cardContainerSelector) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._cardContainerSelector = cardContainerSelector;
      console.log('constructor отработал');
      console.log(this._renderedItems);
      console.log(this._renderer);
      console.log(this._cardContainerSelector);

  }
  //Отрисовка каждого отдельного элемента (на странице)
  renderItems() {
      console.log('трэз')
    this._renderedItems.forEach(item =>
      this._renderer(item)
    )
      console.log('renderer отработал');

  }
  //принимает DOM-элемент и добавляет его в контейнер
  addItem(element) {
      console.log('куатро')
    this._cardContainerSelector.prepend(element);
      console.log('addItem отработал');
      console.log(this._cardContainerSelector);
  }

}


// function addCardToContainer(item, cardTemlateClass) {
//   const card = new Card(item, cardTemlateClass);
//   const cardElement = card.generateCard();
//   cardContainer.prepend(cardElement);
// };
// //Перебор массива в обратном порядке
// const initCardsCopy = initialCards.slice();
// const initCardsRevers = initCardsCopy.reverse();
// initCardsRevers.forEach(function (cardItem) {
//   addCardToContainer(cardItem, '.card-template');
// });
