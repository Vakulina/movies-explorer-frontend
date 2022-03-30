import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo__header.svg';
import account_img from '../../images/account.svg';
import BurgerNavigation from '../BurgerNavigation/BurgerNavigation';
import useResize from '../useResize/useResize'

export default function Header({ isLogin }) {
  let width = useResize();
  return (
    <header className={`header ${isLogin && 'header_logged'}`}>
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
        {isLogin && (width > 770) && <nav className='header__navigation header__navigation_logged'>
          <Link className="header__link header__link_logged header__link_films" to="/movies">
            Фильмы
          </Link>
          <Link className="header__link header__link_logged header__link_saved-films" to="/saved-movies">
            Сохраненные фильмы
          </Link>
          <Link className="header__link header__link_logged header__account" to="/profile">
            Аккаунт
            <img className="header__account-img" src={account_img} alt='иконка аккаунта' />
          </Link>
        </nav>}
        {isLogin && (width < 770) && <BurgerNavigation />}
      </div>
    </header>
  );
}
