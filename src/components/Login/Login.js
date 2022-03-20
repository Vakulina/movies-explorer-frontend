import './Login.css';
import logo from '../../images/logo__header.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Login({onLogin}) {
 const [user, setUser]=useState({email:'', password:''});


 function handleChangeEmail(e) {
  setUser((actual) => {
     return {
       ...actual,
       email: e.target.value
     }
   });
 }
 function handleChangePassword(e) {
  setUser((actual) => {
     return {
       ...actual,
       password: e.target.value
     }
   });
 }
 const handleEnter = (e)=> {
  e.preventDefault();
  onLogin(user)
  navigate('/movies');
 }
  const navigate = useNavigate();
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
            <input className='login__input' type='email' placeholder ='pochta@yandex.ru' 
            id='mail' onChange={handleChangeEmail}/>
          </div>
          <div className='login__field'>
            <label className='login__label' htmlFor='password'>Пароль</label>
            <input className='login__input' type='password' id='password' onChange={handleChangePassword} />
          </div>
          <span className='login__error'></span>
        </div>
        <div className='login__buttons'>
          <button className='login__button login__button_enter' onClick={handleEnter}>Войти</button>
          <span className='login__sign'>Еще не зарегистрированы?</span>
          <Link to="/signup" className="login__link login__link_registration">
            Регистрация
          </Link>
        </div>
      </form>
    </section>
  );
}