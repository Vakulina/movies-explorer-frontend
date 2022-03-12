import './Main.css';
import Promo from '../Promo/Promo'
import Header from '../Header/Header';
import AboutProject from '../AboutProject/AboutProject';

export default function Main() {
  return (
<main>
<Header isLogin={false}/>
<Promo/>
<AboutProject/>
</main>
  );
}
