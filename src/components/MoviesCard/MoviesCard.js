import './MoviesCard.css';
import { useEffect, useState } from 'react';
import { mainApi } from '../../utils/MainApi';

const ERROR_LINK = 'https://yandex.ru/images/search?from=tabbar&text=%D0%BD%D0%B5%20%D0%BD%D0%B0%D0%B9%D0%B4%D0%B5%D0%BD%D0%BE&pos=4&img_url=https%3A%2F%2Fsun9-26.userapi.com%2FRM0NmLETJfOJTstUhk3lz4dxlfiIuMqn1nKiWQ%2FpnLNw0Nbofo.jpg&rpt=simage'
const ERROR_STRING = 'не указано'

export default function MoviesCard({ card, typeList, isLike, movieId, handleGetSavedMovies, handleDeleteSavedMovie }) {

  const [like, setLike] = useState(false);

  const hours = `${Math.floor(card.duration / 60)}ч`
  const minutes = `${card.duration % 60}м`
  const imageUrl = (typeList === 'search-movies') ? `https://api.nomoreparties.co${card.image.url}` : card.image;
  const thumbnail = (typeList === 'search-movies') ? `https://api.nomoreparties.co${card.image.formats.thumbnail.url}` : card.thumbnail;
  const description = (typeList === 'search-movies') ? card.description.slice(0, 300) || ERROR_STRING : card.description;
  const currentMovie = {
    country: card.country || ERROR_STRING,
    director: card.director || ERROR_STRING,
    duration: card.duration || ERROR_STRING,
    year: card.year || ERROR_STRING,
    description: description,
    image: imageUrl || ERROR_LINK,
    trailerLink: card.trailerLink || ERROR_LINK,
    thumbnail: thumbnail || ERROR_LINK,
    movieId: card.id,
    nameRU: card.nameRU || ERROR_STRING,
    nameEN: card.nameEN || ERROR_STRING,
  }

  useEffect(() => {
    setLike(isLike);
  },
    [isLike])

  const clickLikeButton = (e) => {
    e.stopPropagation();
    if (!like) {
      mainApi.postNewMovie(currentMovie)
        .then((res) => {
          setLike(!like)
          handleGetSavedMovies();
        })
        .catch(err => console.log(err))
    }
    else {
      mainApi.deleteMovie(movieId)
        .then(() => {
          setLike(!like);
          handleGetSavedMovies();
        })
        .catch(err => console.log(err))
    }
  }

  const clickOnDeleteButton = (e) => {
    e.stopPropagation();
    mainApi.deleteMovie(card._id)
      .then((res) => {
        console.log(res)
        handleDeleteSavedMovie(res);
      })
      .catch(err => console.log(err))
  }

  return (
    <article className="card" onClick={() => window.open(card.trailerLink)}>
      <img className="card__image" src={imageUrl} alt='Постер к фильму' />
      <div className="card__two-columns">
        <h3 className="card__name">{card.nameRU}</h3>
        {(typeList === 'search-movies') &&
          <button
            className={`card__like ${like ? 'card__like_liked' : ''}`}
            onClick={clickLikeButton}
            type="button"
          />
        }
        {(typeList === 'saved-movies') &&
          <button
            className='card__delete'
            type="button"
            onClick={clickOnDeleteButton}
          />
        }
      </div>
      <p className="card__duration">{`${hours ? hours : ''} ${minutes}`}</p>
    </article>
  )
}

