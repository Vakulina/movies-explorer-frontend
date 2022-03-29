import { useState, useEffect,useContext } from 'react';
import './SavedMovies.css';
import Header from '../Header/Header';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import { mainApi } from '../../utils/MainApi';
import { SavedMoviesContext } from '../../contexts/SavedMoviesContext';
export default function SavedMovies({ isLoading, handleGetSavedMovies }) {
  const savedMovies = useContext(SavedMoviesContext);
  
  console.log(savedMovies)
  return (
    <section className='saved-movie'>
      <Header isLogin={true} />
      {isLoading && <Preloader />}
      <SearchForm typeList='saved-movies'/>
      <MoviesCardList typeList='saved-movies' movies={savedMovies} />
      <Footer />
    </section>
  );
}
