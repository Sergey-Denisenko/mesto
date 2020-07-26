export const nameInput = document.querySelector('.popup__form-name');
export const jobInput = document.querySelector('.popup__form-about');
export const editButton = document.querySelector('.profile__edit-button');
export const popupProfile = document.querySelector('.popup-profile');
export const profileAddButton = document.querySelector('.profile__add-button');
export const popupAddCard = document.querySelector('.popup-add-card');
export const cardContainer = document.querySelector('.card-container');
export const popupImage = document.querySelector('.popup-image');
export const dataUserInfo = {
  titleName: '',
  subtitleAbout: '',
  avatar: '',
};
export const userCardData = {
  name: '',
  link: ''
};
export const popupAvatarUpdate = document.querySelector('.popup-avatar-update');
export const profileAvatarButton = document.querySelector('.profile__avatar-button');
export const popupAvatarUpdateFormSubmitButton = popupAvatarUpdate.querySelector('.popup-avatar-update__form-submit');
export const popupAddCardFormSubmit = popupAddCard.querySelector('.popup-add-card__form-submit');
export const popupProfileFormSubmit = popupProfile.querySelector('.popup__form-submit');
export const optionsApi = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-13',
  headers: {
    authorization: 'b301150e-99e5-48e9-bfa2-35f39eea584a',
    'Content-Type': 'application/json'
  }
};
