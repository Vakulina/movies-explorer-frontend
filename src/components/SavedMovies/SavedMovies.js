import { useState, useEffect, useContext } from 'react';
import './SavedMovies.css';
import Header from '../Header/Header';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import { SavedMoviesContext } from '../../contexts/SavedMoviesContext';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

export default function SavedMovies({ isLoading, handleGetSavedMovies }) {

  const savedMovies = useContext(SavedMoviesContext);

  const [filteredSavedMovies, filterMoviesList] = useState(savedMovies)

 useEffect(()=>{
  filterMoviesList([...filtering(savedMovies, filter, isShort)].reverse())
 },[savedMovies])







  const [filter, changeFilter] = useState('')

  const [isShort, toggleShort] = useState(false)

  const handleChangeFilter = (filter) => {
    changeFilter(filter)
  }

  const handleEnterPress = (event, filter) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      changeFilter(filter)
    }
  }
  const handleToggleIsShort = (event) => {
    toggleShort(!isShort)
  }

  function sortShortMovies(movies, isShort) {
    return movies.filter(item => {
      if (!isShort) {
        return true
      }
      else {
        return (item.duration <= 40)
      }
    })
  }

  function filtering(movies, seachLine, isShort) {
    let result
    console.log(!seachLine.length)
    if (!seachLine.length) {
      result = sortShortMovies(savedMovies, isShort)
    }
    else {
      const sortFilterdMovies = movies.filter(item => {
        const { country, director, year, description, nameRU, nameEN } = item;
        const filterString = `${country} ${director} ${year} ${description} ${nameRU} ${nameEN}`;
        return filterString.toLowerCase().includes(seachLine.toLowerCase())
      })
      result = sortShortMovies(sortFilterdMovies, isShort)
    }
    return result
  }

  useEffect(() => {
    handleGetSavedMovies()
    filterMoviesList([...filtering(savedMovies, filter, isShort)].reverse())
 
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, isShort])


  return (
    <section className='saved-movie'>
      <Header isLogin={true} />
    
      <SearchForm typeList='saved-movies' onKeyPress={handleEnterPress} onClick={handleChangeFilter} filter={filter} />
      {isLoading && <Preloader />}
      <FilterCheckbox onChange={handleToggleIsShort} isChecked={isShort} />
      <MoviesCardList typeList='saved-movies' movies={filteredSavedMovies} handleGetSavedMovies={handleGetSavedMovies} />
      <Footer />
    </section>
  );
}
