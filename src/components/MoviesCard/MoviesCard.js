import './MoviesCard.css';
import { useState } from 'react';
import poster from '../../images/poster-1.jpg'

export default function MoviesCard({card, typeList }) {
  const [like, setLike] = useState(false);
  const hours=`${Math.floor(card.duration/60)}ч`
  const minutes = `${card.duration%60}м`
  //
  return (
    <article className="card">
      <img className="card__image" src={`https://api.nomoreparties.co/${card.image.url}`} alt='Постер к фильму' />
      <div className="card__two-columns">
        <h3 className="card__name">{card.nameRU}</h3>
        {(typeList === 'search-movies') && <button className={`card__like ${like ? 'card__like_liked' : ''}`}
          onClick={() => setLike(!like)} type="button"></button>}
        {(typeList === 'saved-movies') && <button className='card__delete' type="button"></button>}
      </div>
      <p className="card__duration">{`${hours?hours:''} ${minutes}`}</p>
    </article>
  )
}

