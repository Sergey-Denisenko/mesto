
import {
  profileTitleName,
  profileSubtitleAbout,
  nameInput,
  jobInput,
} from '../script/constants.js';

export class UserInfo {
  constructor({ dataObject }) {
    this._dataObject = dataObject;
    this._profileTitleName = profileTitleName;
    this._profileSubtitleAbout = profileSubtitleAbout;
    this._nameInput = nameInput;
    this._jobInput = jobInput;
  }

  getUserInfo() {//возвращает объект с данными пользователя
    this._dataObject.titleName = this._profileTitleName.textContent;
    this._dataObject.subtitleAbout = this._profileSubtitleAbout.textContent;
  }

  setUserInfo() {//принимает новые данные пользователя и добавляет их на страницу
    this._profileTitleName.textContent = this._nameInput.value;
    this._profileSubtitleAbout.textContent = this._jobInput.value;
  }
}
