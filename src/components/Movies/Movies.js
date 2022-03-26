import './Movies.css';
import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import { moviesApi } from '../../utils/MoviesApi';
import { mainApi } from '../../utils/MainApi';

export default function Movies() {
  const [isLoading, setLoadingStatus] = useState(false);
  const [error, setError] = useState('');
  const [movies, setMoviesList] = useState([]);
  const [filter, changeFilter] = useState('')


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
  useEffect(() => {
    getMovies()
  }, [])

const handleChangeFilter = (event)=>{

}

  const handleEnterPress = (event) => {
    if(event.key === 'Enter'){
      handleChangeFilter(event)
    }
  }

  return (
    <section className='movie'>
      <Header isLogin={true} />
      <SearchForm typeList='search-movies' onKeyPress={handleEnterPress} onClick={handleChangeFilter} />
      {isLoading && <Preloader />}
      {error && <span className='search-movies__error'>{error}</span>}
      <MoviesCardList movies= {movies} typeList='search-movies' />
      <button className='movie__more-btn'>Ещё</button>
      <Footer />
    </section>
  );
}
