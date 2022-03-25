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
  useEffect(()=>{
    setLoadingStatus(true)
    moviesApi.getMovies() 
    .then((res)=>{
      console.log(res)
      setLoadingStatus(false)
    })
    .catch((err)=> setError(err.message))
  .finally(()=>setLoadingStatus(false))
  },
  [])
  return (
    <section className='movie'>
      <Header isLogin={true} />
      <SearchForm typeList='search-movies'/>
      {isLoading && <Preloader />}
      {error.length &&  <span className='search-movies__error'>{error}</span>}
      <MoviesCardList typeList='search-movies' />
      <button className='movie__more-btn'>Ещё</button>
      <Footer />
    </section>
  );
}
