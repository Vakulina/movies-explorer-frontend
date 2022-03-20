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
  getInfoUser(user) {
    const url =`${this._url}users/me`
    return fetch(url, {
      method: "GET",
      headers: this._headers,
      credentials: 'include',
      }).then(this._checkRequest);
  }
  updateUserInfo({name, email}) {
    const url = `${this._url}users/me`
    return fetch(url, {
      method: "PATCH",
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({ name, email }),
      
    }).then(this._checkRequest);
  }
  getSavedMovies() {
    const url = `${this._url}movies`
    return fetch(url, {
      method: "GET",
      headers: this._headers,
      credentials: 'include',
     }).then(this._checkRequest);
  }

  postNewMovie(movie) {
    const url = `${this._url}movies`
    return fetch(url, {
      method: "POST",
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify(movie),
     }).then(this._checkRequest);
  }

  postUser(user) {
    const url = `${this._url}signup`
    return fetch(url, {
      method: "POST",
      credentials: 'include',
      body: JSON.stringify(user),
      headers: this._headers,
    }).then(this._checkRequest);
  }

  loginUser(user) {
    const url = `${this._url}signin`
    return fetch(url, {
      method: "POST",
      credentials: 'include',
      body: JSON.stringify(user),
      headers: this._headers,
    }).then(this._checkRequest);
  }

  unloginUser(){
    const url = `${this._url}signout`
    return fetch(url, {
      method: "POST",
      credentials: 'include',
      headers: this._headers,
    }).then(this._checkRequest);
  }

  deleteMovie(id) {
    const url = `${this._url}movies/_${id}`
    return fetch(url, {
      method: "DELETE",
      credentials: 'include',
      headers: this._headers,
    }).then(this._checkRequest);
  }

}

const mainApi = new MainApi(configConnection);
export { mainApi };