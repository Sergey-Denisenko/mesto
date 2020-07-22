export class UserInfo {
  constructor({ dataObject }) {
    this._dataObject = dataObject;
    this._profileTitleName = document.querySelector('.profile__title-name');
    this._profileSubtitleAbout = document.querySelector('.profile__subtitle-about');
  }

  // _getApiUserInfo(){
  //   return fetch('https://mesto.nomoreparties.co/v1/cohort-13/users/me', {
  //       headers: {
  //         authorization: 'b301150e-99e5-48e9-bfa2-35f39eea584a'
  //       }
  //     })
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //         console.log(data.name); // если мы попали в этот then, data — это объект
  //         console.log(data.about);
  //         console.log(data.avatar);
  //         console.log(data);
  //         return { data };
  //     })
  //     .catch((err) => {
  //       console.log('Ошибка. Запрос не выполнен: ', err);
  //     });
  //}

  getUserInfo() {//возвращает объект с данными пользователя

      // fetch('https://mesto.nomoreparties.co/v1/cohort-13/users/me', {
      //   headers: {
      //     authorization: 'b301150e-99e5-48e9-bfa2-35f39eea584a'
      //   }
      // })
      // .then((res) => {
      //   return res.json();
      // })
      // .then((data) => {
      //     console.log(data.name); // если мы попали в этот then, data — это объект
      //     console.log(data.about);
      //     console.log(data.avatar);
      //     console.log(data);
      //     console.log(typeof data);
      //     return data;
      // })
      // .catch((err) => {
      //   console.log('Ошибка. Запрос не выполнен: ', err);
      // });
      // console.log('data.name1');
      // console.log(data.name);
      // console.log('data.name2');

      this._dataObject.titleName = this._profileTitleName.textContent;
      this._dataObject.subtitleAbout = this._profileSubtitleAbout.textContent;
      return this._dataObject;

    // this._dataObject.titleName = this._profileTitleName.textContent;
    // this._dataObject.subtitleAbout = this._profileSubtitleAbout.textContent;
    // return this._dataObject;

    // console.log('getUserInfo на старте');
    // console.log(_getApiUserInfo.data);
    // console.log(this._dataObject.titleName);
    // this._dataObject.titleName = _getApiUserInfo.data.name;
    // console.log('this._dataObject.titleName');
    // console.log(this._dataObject.titleName);
    // this._dataObject.subtitleAbout = _getApiUserInfo.res.about;
    // console.log('getUserInfo в конце');
    //return this._dataObject;
  }

  setUserInfo(inputsObject) {//принимает новые данные пользователя и добавляет их на страницу
    this._profileTitleName.textContent = inputsObject.name;
    this._profileSubtitleAbout.textContent = inputsObject.prof;
  }
}
