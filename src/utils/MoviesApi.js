const configConnection = {
  url: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    'Content-Type': 'application/json'
  }
}

class MoviesApi {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

}

const moviesApi = new MoviesApi(configConnection);
export { moviesApi };