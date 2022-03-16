import './Movies.css';
import Header from '../Header/Header';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
export default function Movies({isLoading}) {
  return (
<section className='movie'>
<Header isLogin={true} />
{isLoading&&<Preloader />}
<SearchForm />
<MoviesCardList typeList='search-movies'/>
<button className='movie__more-btn'>Ещё</button>
<Footer />
</section>
  );
}
