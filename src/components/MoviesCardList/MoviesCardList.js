import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import useResize from '../../hooks/useResize/useResize';
import { useEffect, useState, useContext } from 'react'
import { SavedMoviesContext } from '../../contexts/SavedMoviesContext'

export default function MoviesCardList({ typeList, movies, handleGetSavedMovies, handleDeleteSavedMovie }) {
  const savedMovies = useContext(SavedMoviesContext);
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
  const [shownMovies, addMovies] = useState([])
  const [isEnd, setIsEnd] = useState(false)



  useEffect(() => {
    addMovies(movies.slice(0, changeCountItems(width)))
    setIsEnd(movies.length <= shownMovies.length)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movies, width])

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

          let isLike = savedMovies.some((savedMovie) => {
            return savedMovie.movieId === item.id
          })

          const likesMovie = savedMovies.find((element) => {
            if (element.movieId === item.id) {
              return element._id
            }
            else { return false }
          })
          const movieId = likesMovie?._id

          return <MoviesCard
            key={item.id || item._id}
            card={item}
            typeList={typeList}
            isLike={isLike}
            movieId={movieId}
            handleGetSavedMovies={handleGetSavedMovies}
            handleDeleteSavedMovie={handleDeleteSavedMovie}
          />
        })
        }
      </section>
      {(typeList === 'search-movies') && !isEnd &&
        <button className='listMovies__more-btn' onClick={() => handleClick()}>Ещё</button>
      }
    </>
  )
}