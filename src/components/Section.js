
export class Section {
  constructor({ items, renderer }, cardContainerSelector) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._cardContainerSelector = cardContainerSelector;
  }
  //Отрисовка каждого отдельного элемента (на странице)
  renderItems() {
    this._renderedItems.forEach(item =>
      this._renderer(item)
    );
  }
  //принимает DOM-элемент и добавляет его в контейнер
  addItem(element) {
    this._cardContainerSelector.prepend(element);
  }
}
