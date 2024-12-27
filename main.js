/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// ./src/scripts/inputErrors.js
var errorMessages = {
  valueMissing: 'Вы пропустили это поле.',
  tooShort: function tooShort(minLength, currentLength) {
    return "\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432: ".concat(minLength, ". \u0414\u043B\u0438\u043D\u0430 \u0442\u0435\u043A\u0441\u0442\u0430 \u0441\u0435\u0439\u0447\u0430\u0441: ").concat(currentLength, " \u0441\u0438\u043C\u0432\u043E\u043B.");
  },
  tooLong: function tooLong(maxLength, currentLength) {
    return "\u041C\u0430\u043A\u0441\u0438\u043C\u0443\u043C ".concat(maxLength, " \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432. \u0421\u0435\u0439\u0447\u0430\u0441 ").concat(currentLength, ".");
  },
  invalidValue: 'Некорректное значение.',
  typeMissmatch: 'Введите адрес сайта.'
};
/* harmony default export */ const inputErrors = (errorMessages);
;// ./src/scripts/Api.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Api = /*#__PURE__*/function () {
  function Api(options) {
    _classCallCheck(this, Api);
    this._baseUrl = options.baseUrl;
    this._token = options.headers;
  }
  return _createClass(Api, [{
    key: "_getResponseData",
    value: function _getResponseData(res) {
      if (!res.ok) {
        return Promise.reject(res.status);
      }
      return res.json();
    }
  }, {
    key: "getInitialCards",
    value: function getInitialCards() {
      var _this = this;
      return fetch("".concat(this._baseUrl, "/cards"), {
        headers: this._token
      }).then(function (res) {
        return _this._getResponseData(res);
      });
    }
  }, {
    key: "getUserInfo",
    value: function getUserInfo() {
      var _this2 = this;
      return fetch("".concat(this._baseUrl, "/users/me"), {
        headers: this._token
      }).then(function (res) {
        return _this2._getResponseData(res);
      });
    }
  }, {
    key: "addCard",
    value: function addCard(formData) {
      var _this3 = this;
      return fetch("".concat(this._baseUrl, "/cards"), {
        method: 'POST',
        headers: this._token,
        body: JSON.stringify(formData)
      }).then(function (res) {
        return _this3._getResponseData(res);
      });
    }
  }, {
    key: "editUserInfo",
    value: function editUserInfo(formData) {
      var _this4 = this;
      return fetch("".concat(this._baseUrl, "/users/me"), {
        method: 'PATCH',
        headers: this._token,
        body: JSON.stringify(formData)
      }).then(function (res) {
        return _this4._getResponseData(res);
      });
    }
  }, {
    key: "deleteCard",
    value: function deleteCard(cardId) {
      var _this5 = this;
      return fetch("".concat(this._baseUrl, "/cards/").concat(cardId), {
        method: 'DELETE',
        headers: this._token
      }).then(function (res) {
        return _this5._getResponseData(res);
      });
    }
  }, {
    key: "togleLike",
    value: function togleLike(cardId, set) {
      var _this6 = this;
      return fetch("".concat(this._baseUrl, "/cards/").concat(cardId, "/likes"), {
        method: set,
        headers: this._token
      }).then(function (res) {
        return _this6._getResponseData(res);
      });
    }
  }, {
    key: "changeAvatar",
    value: function changeAvatar(formData) {
      var _this7 = this;
      return fetch("".concat(this._baseUrl, "/users/me/avatar"), {
        method: 'PATCH',
        headers: this._token,
        body: JSON.stringify(formData)
      }).then(function (res) {
        return _this7._getResponseData(res);
      });
    }
  }]);
}();

;// ./src/scripts/index.js
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }




// DOM узлы
var cardTemplate = document.querySelector('#card-template');
var placesList = document.querySelector('.places__list');
var popupImage = document.querySelector('.popup_type_image');
var popupImageElement = popupImage.querySelector('.popup__image');
var popupCaption = popupImage.querySelector('.popup__caption');
var popupCloseButton = popupImage.querySelector('.popup__close');
var popupNewCard = document.querySelector('.popup_type_new-card');
var popupNewCardOpenButton = document.querySelector('.profile__add-button');
var popupNewCardCloseButton = popupNewCard.querySelector('.popup__close');
var popupNewCardForm = popupNewCard.querySelector('.popup__form');
var cardNameInput = popupNewCardForm.querySelector('.popup__input_type_card-name');
var cardLinkInput = popupNewCardForm.querySelector('.popup__input_type_url');
var cardSubmitButton = popupNewCardForm.querySelector('.popup__button');
var popupEditProfile = document.querySelector('.popup_type_edit');
var popupEditProfileOpenButton = document.querySelector('.profile__edit-button');
var popupEditProfileCloseButton = popupEditProfile.querySelector('.popup__close');
var popupEditProfileForm = popupEditProfile.querySelector('.popup__form');
var popupEditProfileImage = document.querySelector('.popup_type_avatar-edit');
var popupEditAvatarCloseButton = popupEditProfileImage.querySelector('.popup__close');
var profileEditImageButton = document.querySelector('.profile__edit-image-button');
var popupEditProfileImageForm = popupEditProfileImage.querySelector('.popup__form');
var profileImageUrlInput = popupEditProfileImageForm.querySelector('.popup__input_type_url');
var profileNameInput = popupEditProfileForm.querySelector('.popup__input_type_name');
var profileDescriptionInput = popupEditProfileForm.querySelector('.popup__input_type_description');
var profileButton = popupEditProfileForm.querySelector('.popup__button');
var profileTitle = document.querySelector('.profile__title');
var profileAvatar = document.querySelector('.profile__image');
var profileDescription = document.querySelector('.profile__description');
var profileNameError = document.getElementById('profileNameError');
var profileDescriptionError = document.getElementById('profileDescriptionError');
var placeNameError = document.getElementById('placeNameError');
var placeUrlError = document.getElementById('placeUrlError');
var group = 'apf-cohort-202';
var token = '7a4bd0ae-32bb-4b21-ae9d-22ebbb5433fc';
var api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/".concat(group),
  headers: {
    authorization: token,
    'Content-Type': 'application/json'
  }
});
var id;
api.getUserInfo().then(function (info) {
  id = info._id;
  console.log(id);
});

// Функция создания карточки
function createCard(data) {
  var cardElement = cardTemplate.content.cloneNode(true).querySelector('.card');
  var imageElement = cardElement.querySelector('.card__image');
  var titleElement = cardElement.querySelector('.card__title');
  var deleteButton = cardElement.querySelector('.card__delete-button');
  var likeButton = cardElement.querySelector('.card__like-button');
  var likeCounter = cardElement.querySelector('.card__like-counter');
  imageElement.src = data.link;
  imageElement.alt = data.name;
  titleElement.textContent = data.name;
  likeCounter.textContent = data.likes.length;
  console.log(data);
  if (id != data.owner._id) {
    deleteButton.style.display = 'none';
  }
  if (data.likes.map(function (dict) {
    return dict._id;
  }).includes(id)) {
    var buttonClass = 'card__like-button_is-active';
    likeButton.classList.toggle(buttonClass);
  }

  // Добавляем обработчик удаления
  deleteButton.addEventListener('click', function () {
    return removeCard(cardElement, data._id);
  });

  // Добавляем обработчик лайка
  likeButton.addEventListener('click', function () {
    return toggleLike(likeButton, likeCounter, data._id);
  });

  // Добавляем обработчик открытия попапа с изображением
  imageElement.addEventListener('click', function () {
    return openImagePopup(data);
  });
  return cardElement;
}

// Функция удаления карточки
function removeCard(card, id) {
  card.remove();
  api.deleteCard(id);
}

// Функция переключения лайка
function toggleLike(button, likeCounter, id) {
  var buttonClass = 'card__like-button_is-active';
  button.classList.toggle(buttonClass);
  var method;
  if (button.classList.contains(buttonClass)) {
    likeCounter.textContent++;
    method = 'PUT';
  } else {
    likeCounter.textContent--;
    method = 'DELETE';
  }
  api.togleLike(id, method);
}

// Функция открытия попапа с изображением
function openImagePopup(data) {
  popupImageElement.src = data.link;
  popupImageElement.alt = data.name;
  popupCaption.textContent = data.name;
  openPopup(popupImage);
}

// Функция открытия попапа
function openPopup(popup) {
  popup.classList.add('popup_is-opened');
}

// Функция закрытия попапа
function closePopup(popup) {
  popup.classList.remove('popup_is-opened');
}

//Добавляем обработчик для открытия попапа с  редактированием автара
profileEditImageButton.addEventListener('click', function () {
  return openPopup(popupEditProfileImage);
});

// Добавляем обработчик для закрытия попапа с изображением
popupCloseButton.addEventListener('click', function () {
  return closePopup(popupImage);
});

// Обработчик открытия попапа добавления новой карточки
popupNewCardOpenButton.addEventListener('click', function () {
  return openPopup(popupNewCard);
});

// Обработчик закрытия попапа добавления новой карточки
popupNewCardCloseButton.addEventListener('click', function () {
  return closePopup(popupNewCard);
});

// Обработчик отправки формы добавления новой карточки
popupNewCardForm.addEventListener('submit', function (event) {
  event.preventDefault();
  api.addCard({
    name: cardNameInput.value,
    link: cardLinkInput.value
  }).then(function (card) {
    var newCard = createCard(card);
    placesList.prepend(newCard);
  });
  closePopup(popupNewCard);
});
cardNameInput.addEventListener('input', function () {
  return showInputError(cardNameInput, placeNameError, cardSubmitButton);
});
cardLinkInput.addEventListener('input', function () {
  return showInputError(cardLinkInput, placeUrlError, cardSubmitButton);
});

// Обработчик открытия попапа редактирования профиля
popupEditProfileOpenButton.addEventListener('click', function () {
  profileNameInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openPopup(popupEditProfile);
});

// Обработчик закрытия попапа редактирования профиля
popupEditProfileCloseButton.addEventListener('click', function () {
  return closePopup(popupEditProfile);
});
popupEditAvatarCloseButton.addEventListener('click', function () {
  return closePopup(popupEditProfileImage);
});
function showInputError(input, errorElement, button) {
  // Если поле валидное, убираем сообщение об ошибке и стили
  if (input.validity.valid) {
    errorElement.textContent = '';
    input.classList.remove('popup__input_is-error');
    button.disabled = false;
    return;
  }

  // Сопоставление ошибок с сообщениями
  var errorMessagesMap = {
    valueMissing: inputErrors.valueMissing,
    tooShort: inputErrors.tooShort(input.minLength, input.value.length),
    tooLong: inputErrors.tooLong(input.maxLength, input.value.length),
    invalidValue: inputErrors.invalidValue,
    typeMismatch: inputErrors.typeMissmatch
  };

  // Определение текущей ошибки
  for (var _i = 0, _Object$entries = Object.entries(errorMessagesMap); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
      key = _Object$entries$_i[0],
      message = _Object$entries$_i[1];
    if (input.validity[key]) {
      errorElement.textContent = message;
      break;
    }
  }

  // Добавляем класс для стилизации ошибки
  input.classList.add('popup__input_is-error');
  button.disabled = true;
}

// Обработчик отправки формы редактирования профиля с валидацией
popupEditProfileForm.addEventListener('submit', function (event) {
  event.preventDefault();
  profileTitle.textContent = profileNameInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  api.editUserInfo({
    name: profileNameInput.value,
    about: profileDescriptionInput.value
  });
  closePopup(popupEditProfile);
});

// Обработчик отправки формы редактирования аватара
popupEditProfileImageForm.addEventListener('submit', function (event) {
  event.preventDefault();
  api.changeAvatar({
    avatar: profileImageUrlInput.value
  });
  closePopup(popupEditProfile);
});
profileNameInput.addEventListener('input', function () {
  return showInputError(profileNameInput, profileNameError, profileButton);
});
profileDescriptionInput.addEventListener('input', function () {
  return showInputError(profileDescriptionInput, profileDescriptionError, profileButton);
});

// Функция для закрытия всех попапов при клике за их пределами
function closePopupOnClickOutside(event) {
  // Проверяем, был ли клик сделан за пределами попапа
  if (event.target.classList.contains('popup_is-opened')) {
    closePopup(event.target);
  }
}

// Функция для закрытия попапа при нажатии клавиши Escape
function closePopupOnEscape(event) {
  if (event.key === 'Escape') {
    var openedPopup = document.querySelector('.popup_is-opened');
    if (openedPopup) {
      closePopup(openedPopup);
    }
  }
}

// Добавляем обработчик для закрытия попапов при клике за пределами попапа
document.addEventListener('click', closePopupOnClickOutside);

// Добавляем обработчик для закрытия попапа при нажатии на клавишу Escape
document.addEventListener('keydown', closePopupOnEscape);
api.getInitialCards().then(function (cards) {
  cards.forEach(function (card) {
    placesList.appendChild(createCard(card));
  });
});
api.getUserInfo().then(function (info) {
  profileTitle.textContent = info.name;
  profileDescription.textContent = info.about;
  console.log(info.avatar);
  profileAvatar.style.backgroundImage = "url(".concat(info.avatar, ")");
});
/******/ })()
;