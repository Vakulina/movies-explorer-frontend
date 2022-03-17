import { Link } from 'react-router-dom';
import logo from '../../images/logo__header.svg';
import './Register.css';

export default function Register() {
  const name = 'Виталий';
  const mail = 'pochta@yandex.ru';
  return (
    <section className='register'>
      <Link className="register__link register__link_logo" to='/'>
        <img src={logo} className="register__logo" alt="логотип" />
      </Link>
      <form className='register__form'>
        <h1 className='register__title'>Добро пожаловать! </h1>
        <div className='register__fields'>
          <div className='register__field'>
            <label className='register__label' htmlFor='name'>Имя</label>
            <input className='register__input' placeholder={name} id='name' required />
          </div>
          <div className='register__field'>
            <label className='register__label' htmlFor='mail'>E-mail</label>
            <input className='register__input' type='email' placeholder={mail} id='mail' required />
          </div>
          <div className='register__field'>
            <label className='register__label' htmlFor='password'>Пароль</label>
            <input className='register__input register__input_error' type='password' value={"**********"} id='password' required />
          </div>
          <span className='register__error'>Что-то пошло не так...</span>
        </div>
        <div className='register__buttons'>
          <button className='register__button register__button_registration'>Зарегистрироваться</button>
          <span className='register__sign'>Уже зарегистрированы?</span>
          <Link to="/signin" className="register__link register__link_enter">
              Войти
            </Link>
            </div>
      </form>
    </section>
  );
}
