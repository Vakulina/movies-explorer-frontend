import './Movies.css';
import { useEffect, useState, useContext } from 'react';
import Header from '../Header/Header';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'
import { moviesApi } from '../../utils/MoviesApi';
import { SavedMoviesContext } from '../../contexts/SavedMoviesContext';

export default function Movies({handleGetSavedMovies}) {
  const savedMovies = useContext(SavedMoviesContext);
  const [isLoading, setLoadingStatus] = useState(false);
  const [error, setError] = useState('');
  const [movies, setMoviesList] = useState([]);

  const [filter, changeFilter] = useState(getInitialFilter())

  const [isShort, toggleShort] = useState(getInitialIsShort())

  const [filteredMovies, filterMoviesList] = useState([])

  function getInitialFilter() {
    let filter
    if (localStorage.getItem('filter') !== null) {
      filter = JSON.parse(localStorage.getItem('filter'))

    }
    else {
      filter = ''
    }
    return filter
  }

  function getInitialIsShort() {
    let isMovieShort
    if (localStorage.getItem('isShort') !== null) {
      isMovieShort = (localStorage.getItem('isShort') === 'true')
    }
    else {
      isMovieShort = false
    }
    return isMovieShort
  }

  function getMovies() {
    setLoadingStatus(true)
    moviesApi.getMovies()
      .then((res) => {
        setError('')
       
        setLoadingStatus(false)
        localStorage.setItem('allMovies', JSON.stringify(res))
        setMoviesList(res)
      })
      .catch((err) => {
        localStorage.setItem('allMovies', [])
        setError(err.message);
      })
      .finally(() => setLoadingStatus(false))
  }

  function getInitialMovies() {
    if ((localStorage.getItem('filter') !== null) && (localStorage.getItem('allMovies') !== null)) {
      setMoviesList(JSON.parse(localStorage.getItem('allMovies')))
    }
    else {
      getMovies()
    }
    handleGetSavedMovies()
  }



  //filtering находит массив фильмов, удовлетворяющий строке поиска и параметру isShort
  function filtering(movies, seachLine, isShort) {
    handleGetSavedMovies()
    const result = movies.filter(item => {
      const { country, director, year, description, nameRU, nameEN } = item;
      const filterString = `${country} ${director} ${year} ${description} ${nameRU} ${nameEN}`;
      return filterString.toLowerCase().includes(seachLine.toLowerCase())
    })

      .filter(item => {
        if (!isShort) {
          return true
        }
        else {
          return (item.duration <= 40)
        }
      })
    return seachLine.length ? result : []
  }

  useEffect(() => {
     getInitialMovies();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
  //  getMovies();
    filterMoviesList(filtering(movies, filter, isShort))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movies,filter, isShort])

  

  const handleChangeFilter = (filter) => {
    changeFilter(filter)
    localStorage.setItem('filter', JSON.stringify(filter))
  }

  const handleEnterPress = (event, filter) => {
    if (event.key === 'Enter') {
      event.preventDefault()

      handleChangeFilter(filter)
    }
  }

  const handleToggleIsShort = (event) => {
    toggleShort(!isShort)
  }

  return (
    <section className='movie'>
      <Header isLogin={true} />
      <SearchForm typeList='search-movies' onKeyPress={handleEnterPress} onClick={handleChangeFilter} filter={filter} />
      <FilterCheckbox onChange={handleToggleIsShort} isChecked={isShort} />
      {isLoading && <Preloader />}
      {error && <span className='search-movies__error'>{error}</span>}
      <MoviesCardList movies={filteredMovies} typeList='search-movies' handleGetSavedMovies={handleGetSavedMovies} />

      <Footer />
    </section>
  );
}
