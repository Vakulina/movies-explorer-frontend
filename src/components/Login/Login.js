import './Login.css';
import logo from '../../images/logo__header.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useFormWithValidation from '../useFormWithValidation/useFormWithValidation';

export default function Login({onLogin}) {
 const [user, setUser]=useState({email:'', password:''});
 const {values, handleChange, errors, isValid, resetForm} = useFormWithValidation();
 
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
      <form className='login__form' noValidate>
        <h1 className='login__title'>Рады видеть вас! </h1>
        <div className='login__fields'>
          <div className='login__field'>
            <label className='login__label' htmlFor='mail'>E-mail</label>
            <input className='login__input' type='email' placeholder ='pochta@yandex.ru' 
            id='email'
            required
            pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
            onChange={handleChange}/>
             {!isValid&&<span className='login__error'>{errors.email}</span>}
          </div>
           <div className='login__field'>
            <label className='login__label' htmlFor='password'>Пароль</label>
            <input className='login__input' type='password' id='password'  minLength='8' required onChange={handleChange} />
            {!isValid&&<span className='login__error'>{errors.password}</span>}
          </div>
         
        </div>
        <div className='login__buttons'>
        <span className='login__error login__error_server'></span>
          <button className='login__button login__button_enter' onClick={handleEnter} disabled={!isValid}>Войти</button>
          <span className='login__sign'>Еще не зарегистрированы?</span>
          <Link to="/signup" className="login__link login__link_registration">
            Регистрация
          </Link>
        </div>
      </form>
    </section>
  );
}