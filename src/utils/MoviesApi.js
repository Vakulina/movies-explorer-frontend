import {DEFAULT_ERROR_MESSAGE} from './constants'
const configConnection = {
  url: 'https://api.nomoreparties.co/beatfilm-movies-1',
  headers: {
    'Content-Type': 'application/json'
  }
}

class MoviesApi {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  _checkRequest(res) {
    if (res.ok) {
      return res.json();
    } else {
      return res.json()
        .then(() => {
          return Promise.reject(new Error(DEFAULT_ERROR_MESSAGE));
        });
    }
  }
  getMovies() {
    return fetch(this._url, {
      method: "GET",
      headers: this._headers,
    }).then(this._checkRequest);
  }


}

const moviesApi = new MoviesApi(configConnection);
export { moviesApi };