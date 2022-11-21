import { useContext } from 'react'
import './Main.css';
import Promo from '../Promo/Promo'
import Header from '../Header/Header';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Footer from '../Footer/Footer';
import {IsLoginContext} from '../../contexts/IsLoginContext';

export default function Main() {
  const isLogin = useContext(IsLoginContext);
  return (
    <main>
      <Header isLogin={isLogin} />
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Footer />
    </main>
  );
}
