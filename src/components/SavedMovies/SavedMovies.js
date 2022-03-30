import './SavedMovies.css';
import Header from '../Header/Header';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

export default function SavedMovies({ isLoading }) {
  return (
    <section className='saved-movie'>
      <Header isLogin={true} />
      {isLoading && <Preloader />}
      <SearchForm typeList='saved-movies'/>
      <MoviesCardList typeList='saved-movies' />
      <Footer />
    </section>
  );
}
