import path from 'path';

const configConnection = {
  url: 'https://api.movies-project.nomoredomains.work/',
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
    const url ='https://api.movies-project.nomoredomains.work/users/me'
    return fetch(url, {
      method: "GET",
      credentials: 'include',
      headers: this._headers,
    }).then(this._checkRequest);
  }
  updateUserInfo(name, email) {
    const url = new URL(path.join('users', 'me'), this._url).href;
    return fetch(url, {
      method: "PATCH",
      credentials: 'include',
      body: JSON.stringify({ name, email }),
      headers: this._headers,
    }).then(this._checkRequest);
  }
  getSavedMovies() {
    const url = new URL(path.join('movies'), this._url).href;
    return fetch(url, {
      method: "GET",
      credentials: 'include',
      headers: this._headers,
    }).then(this._checkRequest);
  }

  postNewMovie(movie) {
    const url = new URL(path.join('movies'), this._url).href;
    return fetch(url, {
      method: "POST",
      credentials: 'include',
      body: JSON.stringify(movie),
      headers: this._headers,
    }).then(this._checkRequest);
  }

  postUser(user) {
    const url = new URL(path.join('signup'), this._url).href;
    return fetch(url, {
      method: "POST",
      body: JSON.stringify(user),
      headers: this._headers,
    }).then(this._checkRequest);
  }
  loginUser({name, email}) {
    const url = new URL(path.join('signin'), this._url).href;
    return fetch(url, {
      method: "POST",
      body: JSON.stringify({name, email}),
      headers: this._headers,
    }).then(this._checkRequest);
  }
  unloginUser(){
    const url = new URL(path.join('signout'), this._url).href;
    return fetch(url, {
      method: "POST",
      headers: this._headers,
    }).then(this._checkRequest);
  }

  deleteMovie(id) {
    const url = new URL(path.join('cards', id), this._url).href;
    return fetch(url, {
      method: "DELETE",
      credentials: 'include',
      headers: this._headers,
    }).then(this._checkRequest);
  }

}

const mainApi = new MainApi(configConnection);
export { mainApi };