import { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo__header.svg';
import account_img from '../../images/account.svg';
import BurgerNavigation from '../BurgerNavigation/BurgerNavigation';

export default function Header({ isLogin }) {
  const [windowWidth, setWindowWidth] = useState(document.documentElement.scrollWidth);
  return (
    <header className={`header ${isLogin&&'header_logged'}`}>
      <div className="header__container">
      <Link className="header__link header__link_logo" to='/'>
        <img src={logo} className="header__logo" alt="логотип" />
      </Link>
      {!isLogin && <nav className='header__navigation'>
        <Link className="header__link header__link_registration" to="/signup">
          Регистрация
        </Link>
        <Link className="header__link header__link_entrance" to="/signin">
          Войти
        </Link>
      </nav>}
      {isLogin && (windowWidth > 770) && <nav className='header__navigation header__navigation_logged'>
        <Link className="header__link header__link_logged header__link_films" to="/movies">
          Фильмы
        </Link>
        <Link className="header__link header__link_logged header__link_saved-films" to="/saved-movies">
          Сохраненные фильмы
        </Link>
        <Link className="header__link header__link_logged header__account" to="/profile">
          Аккаунт
          <img className="header__account-img" src={account_img} alt='иконка аккаунта'/>
        </Link>
      </nav>}
      {isLogin && (windowWidth < 770) && <BurgerNavigation/>}
      </div>
    </header>
  );
}
