const popupImage = document.querySelector('.popup-image');
const popupImageImage = document.querySelector('.popup-image__image');
const popupImageTitle = document.querySelector('.popup-image__title');

export function openPopupImage(imageName, imageLink) {
  popupImageTitle.textContent = imageName;
  popupImageImage.src = imageLink;
  popupImageImage.alt = `Картинка ${imageName}`;
  popupCommon(popupImage, 'popup_opened');
};

//Общая функция открытия / закрытия окна попапа
export function popupCommon(item, className) {
  item.classList.toggle(className);
  if (item.classList.contains('popup_opened')) {
    document.addEventListener("keydown", commonFunctionCloseEsc);
    item.addEventListener("click", commonFunctionClickOverlay);
    item.addEventListener('click', commonFunctionClickCloseButton);
  } else {
    document.removeEventListener("keydown", commonFunctionCloseEsc);
    item.removeEventListener("click", commonFunctionClickOverlay);
    item.removeEventListener('click', commonFunctionClickCloseButton);
  };
};

/*ОБЩАЯ ФУНКЦИЯ ЗАКРЫТИЯ ОКНА POPUP ПО НАЖАТИЮ ESCAPE*/
function commonFunctionCloseEsc(evt) {
  const openedPopup = document.querySelector('.popup_opened');
  if (evt.key === 'Escape' && openedPopup) {
    popupCommon(openedPopup, 'popup_opened');
  };
};

/*ОБЩАЯ ФУНКЦИЯ ЗАКРЫТИЯ ОКНА POPUP ПО КЛИКУ ПО ОВЕРЛЕЙ*/
function commonFunctionClickOverlay(evt) {
  const openedPopup = document.querySelector('.popup_opened');
  if (evt.target.classList.contains('popup__overlay')) {
    popupCommon(openedPopup, 'popup_opened');
  };
};

/*ОБЩАЯ ФУНКЦИЯ ЗАКРЫТИЯ ОКНА POPUP ПО КЛИКУ НА КРЕСТИК */
function commonFunctionClickCloseButton(evt) {
  const openedPopup = document.querySelector('.popup_opened');
  if (evt.target.classList.contains('popup__close-button')) {
    popupCommon(openedPopup, 'popup_opened');
  };
};
