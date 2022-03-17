import './Login.css';
import logo from '../../images/logo__header.svg';
import { Link } from 'react-router-dom';

export default function Login() {
  const mail = 'pochta@yandex.ru';
  return (
    <section className='login'>
      <Link className="login__link login__link_logo" to='/'>
        <img src={logo} className="login__logo" alt="логотип" />
      </Link>
      <form className='login__form'>
        <h1 className='login__title'>Рады видеть вас! </h1>
        <div className='login__fields'>
          <div className='login__field'>
            <label className='login__label' htmlFor='mail'>E-mail</label>
            <input className='login__input' type='email' placeholder={mail} id='mail' required />
          </div>
          <div className='login__field'>
            <label className='login__label' htmlFor='password'>Пароль</label>
            <input className='login__input' type='password' id='password' required />
          </div>
          <span className='login__error'></span>
        </div>
        <div className='login__buttons'>
          <button className='login__button login__button_enter'>Войти</button>
          <span className='login__sign'>Еще не зарегистрированы?</span>
          <Link to="/signup" className="login__link login__link_registration">
            Регистрация
          </Link>
        </div>
      </form>
    </section>
  );
}