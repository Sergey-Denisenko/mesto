export class UserInfo {
  constructor({ dataObject }) {
    this._dataObject = dataObject;
    this._profileTitleName = document.querySelector('.profile__title-name');
    this._profileSubtitleAbout = document.querySelector('.profile__subtitle-about');
    this._profileAvatar = document.querySelector('.profile__avatar');
  }

  getUserInfoFromServer(dataFromServer) {//получает данные от запроса сервера и помещает их в объект данных пользователя
    this._dataFromServer = dataFromServer;
    this._dataObject.titleName = this._dataFromServer.name;
    this._dataObject.subtitleAbout = this._dataFromServer.about;
    this._dataObject.avatar = this._dataFromServer.avatar;
    this._setUserInfoToPage();
    return this._dataObject;
  }

  _setUserInfoToPage() {//устанавливает данные из объекта данных пользователя в поля профиля страницы
    this._profileTitleName.textContent = this._dataObject.titleName;
    this._profileSubtitleAbout.textContent = this._dataObject.subtitleAbout;
    this._profileAvatar.src = this._dataObject.avatar;
  }

  setUserInfoToInputArea(nameInput, jobInput) {//устанавливает значения из объекта данных пользователя в поля ввода новых данных
    this._nameInput = nameInput;
    this._jobInput = jobInput;
    this._nameInput.value = this._dataObject.titleName;
    this._jobInput.value = this._dataObject.subtitleAbout;
  }
}
