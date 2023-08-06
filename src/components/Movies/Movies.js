import './Movies.css';
import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'
import { moviesApi } from '../../utils/MoviesApi';

export default function Movies({ handleGetSavedMovies }) {
  const [isLoading, setLoadingStatus] = useState(false);
  const [error, setError] = useState('')
  const [movies, setMoviesList] = useState([]);
  const [filter, changeFilter] = useState(() => {
    return JSON.parse(localStorage.getItem('filter')) || ''
  });

  const [isShort, toggleShort] = useState(() => {
    return localStorage.getItem('isShort') === 'true'
  });

  const [filteredMovies, filterMoviesList] = useState([]);

  useEffect(() => {
    getMovies()
  }, [])

  async function getMovies() {
    setLoadingStatus(true)
    await moviesApi.getMovies()
      .then((res) => {
        setMoviesList(res)
      })
      .catch((err) => {
        localStorage.clear()
        setError(err.message);
      })
      .finally(() => setLoadingStatus(false))
  }

  //filtering находит массив фильмов, удовлетворяющий строке поиска и параметру isShort
  function filtering(movies, seachLine, isShort) {
    const result = movies.filter(item => {
      const { country, director, year, description, nameRU, nameEN } = item;
      const filterString = `${country} ${director} ${year} ${description} ${nameRU} ${nameEN}`;
      if ( seachLine.length ===0 ){
          return true
      }
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
    return result;
  }

  useEffect(() => {
    const filteredMovies = filtering(movies, filter, isShort)
    filterMoviesList(filteredMovies)
  }, [filter, isShort, movies])

  const handleChangeFilter = (filter) => {
    changeFilter(filter)
    localStorage.setItem('filter', JSON.stringify(filter))
    if (filter.length === 0) {
      setError('Нужно ввести ключевое слово')
    }
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
      {!isLoading && error && <span className='search-movies__error'>{error}</span>}
      <MoviesCardList movies={filteredMovies} typeList='search-movies' handleGetSavedMovies={handleGetSavedMovies} />
      <Footer />
    </section>
  );
}
