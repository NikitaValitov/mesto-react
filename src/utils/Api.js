class Api {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }
  
  #onResponce(res) {
    return res.ok ? res.json() : res.json().then(errData => Promise.reject(errData));
  }

  getInfo() {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: this._headers
    })
      .then(this.#onResponce)
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      method: "GET",
      headers: this._headers
    })
      .then(this.#onResponce)
  }

  editUserInfo(data) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(data)
    })
      .then(this.#onResponce)
  }

  addNewCard(data) {
    return fetch(`${this._url}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(data),
    })
      .then(this.#onResponce)
  }

  changeLike(idCard, isLiked) {
    return fetch(`${this._url}/cards/${idCard}/likes`, {
      method: isLiked ? 'DELETE' : 'PUT',
      headers: this._headers,
    })
    .then(this.#onResponce)
  }

  deleteCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    })
    .then(this.#onResponce);
  }

  editAvatar(data) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(data)
    })
    .then(this.#onResponce);
  }
} 

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-73',
  headers: {
    "content-type": 'application/json',
    "authorization": '570b2666-b41f-4db7-ab46-34b70d53b1fa'
  }
});

export default api;
