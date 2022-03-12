import { useState } from 'react';
import { Link } from 'react-router-dom';
import './BurgerNavigation.css';
import icon from '../../images/gamburger-menu-icon.svg';
import icon_open from '../../images/gamburger-menu-icon-open.svg';
import account_img from '../../images/account.svg';

export default function BurgerNavigation() {
  const [isOpen, setOpenStatus] = useState(false);
  function openMenu() {
    setOpenStatus(true);
  }

  function closeMenu() {
    setOpenStatus(false)
  }
  return (
    <>
      {!isOpen &&
        <button className='burger__btn' onClick={openMenu}>
          <img className='burger__icon' src={icon} alt="Открыть меню" />
        </button>
      }
      {isOpen &&
        <>
          <div className='burger__overlay'></div>
          <div className='burger__menu'>
            <div>
              <button className='burger__btn burger__btn_open' onClick={closeMenu}>
                <img className='burger__icon burger__icon_open' src={icon_open} alt="Открыть меню" />
              </button>
              <nav className='burger__nav'>
                <Link className="burger__link" to="/" onClick={closeMenu}>
                  <span className='burger__item'>
                  Главная
                  </span>
                </Link>
                <Link className="burger__link" to="/movies">
                <span className='burger__item'>
                  Фильмы
                  </span>
                </Link>
                <Link className="burger__link" to="/saved-movies">
                <span className='burger__item'>
                  Сохраненные фильмы
                  </span>
                </Link>
              </nav>
            </div>
            <Link className="burger__link burger__link_account" to="/profile">
              Аккаунт
              <img className="burger__account-img" src={account_img} alt='иконка аккаунта' />
            </Link>

          </div>
        </>
      }
    </>
  );
}