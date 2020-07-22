//import { initialCards } from '../utils/initial-cards.js';
export class Api {
  constructor () {
    this._baseUrl = 'https://mesto.nomoreparties.co/v1/cohort-13';
    // this._profileTitleNameDefault = document.querySelector('.profile').querySelector('.profile__title-name');
    // this._profileSubtitleAboutDefault = document.querySelector('.profile').querySelector('.profile__subtitle-about');
    // this._profileAvatarDefault = document.querySelector('.profile').querySelector('.profile__avatar');



    // this._likes = this._element.querySelector('.card__like-counter');
    //console.log(this._profileTitleNameDefault, this._profileSubtitleAboutDefault, this._profileAvatarDefault);
  }

  getUserDataDefaultFromServer() {
    // fetch('https://mesto.nomoreparties.co/v1/cohort-13/users/me', {
      // console.log(`${this._baseUrl}/users/me`);
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        authorization: 'b301150e-99e5-48e9-bfa2-35f39eea584a'
      }
    })
    .then((res) => {
      if (res.ok) {
        console.log('Всё хорошо 1 getUserDataDefaultFromServer');
        return res.json();
      }
        return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then((data) => {

      // tempObject = data;
      console.log('data api 0 getUserDataDefaultFromServer');
      console.log(data);
      console.log('data._id getUserDataDefaultFromServer');
      console.log(data._id);
      // console.log('dataUserInfo getUserDataDefaultFromServer');
      // console.log(dataUserInfo);

      // this._profileTitleNameDefault.textContent = data.name;
      // this._profileSubtitleAboutDefault.textContent = data.about;
      // this._profileAvatarDefault.src = data.avatar;

      // console.log('data._id');
      // console.log(data._id);
      // const q = data._id;
      // console.log('q');
      // console.log(q);
      return data;
    })
    .catch((err) => {
      console.log('Ошибка. Запрос не выполнен: ', err);
    });
  }

  getCardDefaultFromServer() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: {
        authorization: 'b301150e-99e5-48e9-bfa2-35f39eea584a'
      }
    })
    .then((res) => {
      if (res.ok) {
        console.log('Всё хорошо 2 getCardDefaultFromServer');
        //console.log('res.json()');
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then((data) => {
      console.log('data._id getCardDefaultFromServer');
      console.log([data]);
      const q = data;
      console.log('q getCardDefaultFromServer');
      console.log(q);
      return data;
    })
    .catch((err) => {
      console.log('Ошибка. Запрос не выполнен: ', err);
    });
  }

  setNewDataUser(userData) {
    fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
      authorization: 'b301150e-99e5-48e9-bfa2-35f39eea584a',
      'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: userData.name,
        about: userData.prof
      })
    });
  }

  addNewCardToServer(userCardData, cardTo) {
    fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: {
      authorization: 'b301150e-99e5-48e9-bfa2-35f39eea584a',
      'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: userCardData.name,
        link: userCardData.link
      })
    })
    .then((res) => {
      if (res.ok) {
        console.log('Всё хорошо 3 addNewCardToServer');
        return res.json();
      }
        return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then((data) => {
      // data.likes;
      // this._profileSubtitleAboutDefault.textContent = data.about;
      // this._profileAvatarDefault.src = data.avatar;
      return cardTo([data]);
    })
    .catch((err) => {
      console.log('Ошибка. Запрос не выполнен: ', err);
    });
  }

  compareIds() {

  }


  deleteCardFromServer(id) {
    return fetch(`${this._baseUrl}/cards/${id}`, {
      method: 'DELETE',
      headers: {
      authorization: 'b301150e-99e5-48e9-bfa2-35f39eea584a',
      'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      if (res.ok) {
        console.log('Всё хорошо 4 deleteCardFromServer');
        return res.json();
      }
        return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch((err) => {
      console.log('Ошибка. Запрос не выполнен: ', err);
    });
  }



  // addCardLike() {
  //   fetch(`${this._baseUrl}/cards/likes/`, {
  //     method: 'POST',
  //     headers: {
  //     authorization: 'b301150e-99e5-48e9-bfa2-35f39eea584a',
  //     'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       likes: likes
  //     })
  //   })
  //   .then((res) => {
  //     if (res.ok) {
  //       return res.json();
  //     }
  //       return Promise.reject(`Ошибка: ${res.status}`);
  //   })
  //   .then((data) => {
  //     return data;
  //   })
  //   .catch((err) => {
  //     console.log('Ошибка. Запрос не выполнен: ', err);
  //   });

  //   deleteCardLike() {
  //     fetch(`${this._baseUrl}/cards`, {
  //       method: 'POST',
  //       headers: {
  //       authorization: 'b301150e-99e5-48e9-bfa2-35f39eea584a',
  //       'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({
  //         likes: likes
  //       })
  //     })
  //     .then((res) => {
  //       if (res.ok) {
  //         return res.json();
  //       }
  //         return Promise.reject(`Ошибка: ${res.status}`);
  //     })
  //     .then((data) => {
  //       return data;
  //     })
  //     .catch((err) => {
  //       console.log('Ошибка. Запрос не выполнен: ', err);
  //     });
  // }




}
