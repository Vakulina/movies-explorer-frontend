import './MoviesCard.css';
import { useEffect, useState } from 'react';
import poster from '../../images/poster-1.jpg';
import { mainApi } from '../../utils/MainApi';
import useSavedMoviesList from '../useSavedMoviesList/useSavedMoviesList';

export default function MoviesCard({ card, typeList, isLike, movieId, handleGetSavedMovies }) {

  const [like, setLike] = useState(false);

  const hours = `${Math.floor(card.duration / 60)}ч`
  const minutes = `${card.duration % 60}м`
  const imageUrl = (typeList === 'search-movies') ? `https://api.nomoreparties.co${card.image.url}` : card.image;
  const thumbnail = (typeList === 'search-movies') ? `https://api.nomoreparties.co${card.image.formats.thumbnail.url}` : card.thumbnail;
  const description = (typeList === 'search-movies') ? card.description.slice(0, 300) || 'не указано' : card.description;
  const currentMovie = {
    country: card.country || 'не указано',
    director: card.director || 'не указано',
    duration: card.duration || 'не указано',
    year: card.year || 'не указано',
    description: description,
    image: imageUrl,
    trailerLink: card.trailerLink,
    thumbnail: thumbnail,
    movieId: card.id,
    nameRU: card.nameRU || 'не указано',
    nameEN: card.nameEN || 'не указано',
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
    }
    else {
      mainApi.deleteMovie(movieId)
        .then(() => {
          setLike(!like);
          handleGetSavedMovies();
        })
    }
  }
  const clickOnDeleteButton = (e)=>{
    e.stopPropagation();
    mainApi.deleteMovie(card._id)
    .then(() => {
      handleGetSavedMovies();
    })
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

