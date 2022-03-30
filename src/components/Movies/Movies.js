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
  const [error, setError] = useState('');
  
  const [movies, setMoviesList] = useState(() => {
    if (localStorage.getItem('allMovies') !== null) {
      return JSON.parse(localStorage.getItem('allMovies'));
    }
    else {
      return [];
    }
  }
  );

  const [filter, changeFilter] = useState(() => {
    return JSON.parse(localStorage.getItem('filter')) || ''
  });

  const [isShort, toggleShort] = useState(() => {
    return !Boolean(localStorage.getItem('isShort')) || false
  });

  const [filteredMovies, filterMoviesList] = useState([]);

  function getMovies() {
    setLoadingStatus(true)
    moviesApi.getMovies()
      .then((res) => {
       
        localStorage.setItem('allMovies', JSON.stringify(res))
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
    if (filter.length === 0) {
      setError('Нужно ввести ключевое слово')
    }
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
    if (result.length === 0) {
      setError('Ничего не найдено');
      console.log("sssssssss")
    }
    return seachLine.length ? result : []
  }

  useEffect(() => {
    setError("");
    getMovies();
    filterMoviesList(filtering(movies, filter, isShort))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, isShort])


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
