export class UserInfo {
  constructor({ dataObject }) {
    this._dataObject = dataObject;
    this._profileTitleName = document.querySelector('.profile__title-name');
    this._profileSubtitleAbout = document.querySelector('.profile__subtitle-about');
    this._profileAvatar = document.querySelector('.profile__avatar');
    this._nameInput = document.querySelector('.popup__form-name');
    this._jobInput = document.querySelector('.popup__form-about');
  }

  getUserInfoFromServer(dataFromServer) {//получает данные от запроса сервера и помещает их в объект данных пользователя
    this._dataFromServer = dataFromServer;
    this._dataObject.titleName = this._dataFromServer.name;
    this._dataObject.subtitleAbout = this._dataFromServer.about;
    this._dataObject.avatar = this._dataFromServer.avatar;

    return this._dataObject;
  }

  setUserInfoToPage(titleName, subtitleAbout, avatar) {//устанавливает данные из объекта данных пользователя в поля профиля страницы
    this._titleName = titleName;
    this._subtitleAbout = subtitleAbout;
    this._avatar = avatar;
    this._profileAvatar.src = this._avatar;
    this._profileTitleName.textContent = this._titleName;
    this._profileSubtitleAbout.textContent = this._subtitleAbout;
    this._nameInput.value = this._titleName;
    this._jobInput.value = this._subtitleAbout;
  }
}
