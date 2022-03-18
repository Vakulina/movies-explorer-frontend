/*GET /users/me

# обновляет информацию о пользователе (email и имя)

PATCH /users/me

# возвращает все сохранённые текущим  пользователем фильмы
GET /movies

# создаёт фильм с переданными в теле
# country, director, duration, year, description, image, trailer, nameRU, nameEN и thumbnail, movieId 
POST /movies

# удаляет сохранённый фильм по id
DELETE /movies/_id */

import path from 'path';

const configConnection = {
  url: 'https://https://api.movies-project.nomoredomains.work/',
  headers: {
    'Content-Type': 'application/json'
  }
}

class MainApi {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }
  
  _checkRequest(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(res.statusText);
    }
  }
  getInfoUser() {
    const url = new URL(path.join('users', 'me'), this._url).href;
    return fetch(url, {
      method: "GET",
      headers: this._headers,
    }).then(this._checkRequest);
  }
  updateUserInfo(data) {
    const url = new URL(path.join('users', 'me'), this._url).href;
    return fetch(url, {
      method: "PATCH",
      body: JSON.stringify({ name: data.name, about: data.about }),
      headers: this._headers,
    }).then(this._checkRequest);
  }


  getInitialCards() {
    const url = new URL(path.join('cards'), this._url).href;
    console.log(url);
     return fetch(url, {
       method: "GET",
       headers: this._headers,
     }).then(this._checkRequest);
   }



  setNewUserInfo(data) {
    const url = new URL(path.join('users', 'me'), this._url).href;
    return fetch(url, {
      method: "PATCH",
      body: JSON.stringify({ name: data.name, about: data.about }),
      headers: this._headers,
    }).then(this._checkRequest);
  }

  setNewCard(body) {
    const url = new URL(path.join('cards'), this._url).href;
    return fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: this._headers,
    }).then(this._checkRequest);
  }
  likeCard(cardId, isLiked) {
    const url = new URL(path.join('cards', 'likes', cardId), this._url).href;
    return fetch(url, {
      method: isLiked ? "DELETE" : "PUT",
      headers: this._headers,
    })
      .then(this._checkRequest);
  }
  setAvatar(avatar) {
    const url = new URL(path.join('users', 'me', 'avatar'), this._url).href;
    return fetch(url, {
      method: "PATCH",
      body: JSON.stringify(avatar),
      headers: this._headers,
    })
      .then(this._checkRequest)

  }
  deleteCard(cardId) {
    const url = new URL(path.join('cards', cardId), this._url).href;
    return fetch(url, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkRequest);
  }
 
}

const mainApi = new MainApi(configConnection);
export { mainApi };