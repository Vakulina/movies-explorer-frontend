import './Movies.css';
import Header from '../Header/Header';
import Preloader from '../Preloader/Preloader'
export default function Movies({isLoading}) {
  return (
<>
<Header isLogin={true} />
{isLoading&&<Preloader />}
</>
  );
}
