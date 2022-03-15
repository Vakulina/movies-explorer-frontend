import './Movies.css';
import Header from '../Header/Header';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList'
export default function Movies({isLoading}) {
  return (
<>
<Header isLogin={true} />
{isLoading&&<Preloader />}
<SearchForm />
<MoviesCardList/>
</>
  );
}
