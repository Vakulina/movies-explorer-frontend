import './Main.css';
import Promo from '../Promo/Promo'
import Header from '../Header/Header';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';

export default function Main() {
  return (
<main>
<Header isLogin={false}/>
<Promo/>
<AboutProject/>
<Techs />
<AboutMe />
</main>
  );
}
