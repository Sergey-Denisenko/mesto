//import { initialCards } from '../utils/initial-cards.js';
export class Api {
  constructor () {
    this._baseUrl = 'https://mesto.nomoreparties.co/v1/cohort-13';
  }

  getUserDataDefaultFromServer() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        authorization: 'b301150e-99e5-48e9-bfa2-35f39eea584a'
      }
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
        return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then((data) => {
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
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log('Ошибка. Запрос не выполнен: ', err);
    });
  }

  setNewDataUser(userData, renderSubmitButtonText, handlerCloseForm) {
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
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
        return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then((data) => {
      handlerCloseForm.close();
      return data;
    })
    .catch((err) => {
      console.log('Ошибка. Запрос не выполнен: ', err);
    })
    .finally(() => {
      renderSubmitButtonText();
    })
  }

  addNewCardToServer(userCardData, cardTo, renderLoading, closePopupAddCardForm) {
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
        return res.json();
      }
        return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then((data) => {
      renderLoading();
      closePopupAddCardForm.close();
      return cardTo([data]);
    })
    .catch((err) => {
      console.log('Ошибка. Запрос не выполнен: ', err);
    });
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
        return res.json();
      }
        return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch((err) => {
      console.log('Ошибка. Запрос не выполнен: ', err);
    });
  }

  likePlus(id) {
    return fetch(`${this._baseUrl}/cards/likes/${id}`, {
      method: 'PUT',
      headers: {
        authorization: 'b301150e-99e5-48e9-bfa2-35f39eea584a',
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
        return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch((err) => {
      console.log('Ошибка. Запрос не выполнен: ', err);
    });
  }

  likeMinus(id) {
    return fetch(`${this._baseUrl}/cards/likes/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: 'b301150e-99e5-48e9-bfa2-35f39eea584a',
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
        return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch((err) => {
      console.log('Ошибка. Запрос не выполнен: ', err);
    });
  }

  avatarUpdate(newAvatarLink) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: 'b301150e-99e5-48e9-bfa2-35f39eea584a',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: newAvatarLink
      })
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
        return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch((err) => {
      console.log('Ошибка. Запрос не выполнен: ', err);
    });
  }
}
