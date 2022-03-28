import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import useResize from '../useResize/useResize';
import { useEffect, useState } from 'react'

export default function MoviesCardList({ typeList, movies }) {
  let width = useResize();
  const changeCountItems = (width) => {
    if (width > 768) {
      return 12;
    }
    else if ((width <= 768) && (width > 320)) {
      return 8;
    }
    else if (width <= 320) {
      return 5
    }
  }
  //const startShownMovies = movies.slice(0, changeCountItems(width))
  const [shownMovies, addMovies] = useState([])
  const [isEnd, setIsEnd] = useState(false)
  useEffect(() => {
    addMovies(movies.slice(0, changeCountItems(width)))
    setIsEnd(movies.length <= shownMovies.length)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width])

  const handleClick = () => {
    if (width > 768) {
      addMovies(movies.slice(0, (shownMovies.length + 3)))
      setIsEnd(movies.length <= shownMovies.length + 3)
    }
    else {
      addMovies(movies.slice(0, shownMovies.length + 2))
      setIsEnd(movies.length <= shownMovies.length + 2)
    }
  }

  return (
    <>
      <section className='listMovies'>
        {shownMovies.map((item) => {
          return <MoviesCard key={item.id} card={item} typeList={typeList} />
        })
        }
      </section>
      {(typeList === 'search-movies') && !isEnd && <button className='listMovies__more-btn' onClick={() => handleClick()}>Ещё</button>}
    </>
  )
}