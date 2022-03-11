import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo__header.svg'

export default function Header({ isLogin }) {
  return (
    <header className='header'>
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
      {isLogin && <nav className='header__navigation'>
        <Link className="header__link header__link_registration" to="/signup">
          Фильмы
        </Link>
        <Link className="header__link header__link_entrance" to="/signin">
          Сохраненные фильмы
        </Link>
        <Link className="header__link header__link_entrance" to="/signin">
          Аккаунт
        </Link>
      </nav>}
    </header>
  );
}
