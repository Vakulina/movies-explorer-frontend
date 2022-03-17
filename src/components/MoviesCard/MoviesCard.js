import './MoviesCard.css';
import { useState } from 'react';
import poster from '../../images/poster-1.jpg'

export default function MoviesCard({ typeList }) {
  const [like, setLike] = useState(false);
  return (
    <article className="card">
      <img className="card__image" src={poster} alt='Постер к фильму' />
      <div className="card__two-columns">
        <h3 className="card__name">33 слова о дизайне</h3>
        {(typeList === 'search-movies') && <button className={`card__like ${like ? 'card__like_liked' : ''}`}
          onClick={() => setLike(!like)} type="button"></button>}
        {(typeList === 'saved-movies') && <button className='card__delete' type="button"></button>}
      </div>
      <p className="card__duration">1ч 47м</p>
    </article>
  )
}

