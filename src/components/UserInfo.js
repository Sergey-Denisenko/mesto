export class UserInfo {
  constructor({ dataObject }) {
    this._dataObject = dataObject;
    this._profileTitleName = document.querySelector('.profile__title-name');
    this._profileSubtitleAbout = document.querySelector('.profile__subtitle-about');
    this._profileAvatar = document.querySelector('.profile__avatar');
  }

  getUserInfo() {//возвращает объект с данными пользователя
    this._dataObject.titleName = this._profileTitleName.textContent;
    this._dataObject.subtitleAbout = this._profileSubtitleAbout.textContent;

    this._dataObject.titleName = this._profileTitleName.textContent;
    this._dataObject.subtitleAbout = this._profileSubtitleAbout.textContent;
    return this._dataObject;
  }

  setUserInfo() {//принимает новые данные пользователя и добавляет их на страницу
    this._profileTitleName.textContent = this._dataObject.titleName;
    this._profileSubtitleAbout.textContent = this._dataObject.subtitleAbout;
  }
}
