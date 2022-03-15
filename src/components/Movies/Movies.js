import './Movies.css';
import Header from '../Header/Header';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';

export default function Movies({isLoading}) {
  return (
<>
<Header isLogin={true} />
{isLoading&&<Preloader />}
<SearchForm />
</>
  );
}
