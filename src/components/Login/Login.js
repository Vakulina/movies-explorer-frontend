import './Login.css';
import logo from '../../images/logo__header.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useFormWithValidation from '../useFormWithValidation/useFormWithValidation';
import { DEFAULT_ERROR_MESSAGE } from '../../utils/constants';

export default function Login({onLogin, isError}) {
 const {values, handleChange, errors, isValid, resetForm} = useFormWithValidation();

 const handleEnter = (e)=> {

  e.preventDefault();
  onLogin(values)
  resetForm();
 }

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
            <input className='login__input' 
            type='email' 
            placeholder ='pochta@yandex.ru' 
            name='email'
            required
            pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
            onChange={handleChange}/>
             {!isValid&&<span className='login__error'>{errors.email}</span>}
          </div>
           <div className='login__field'>
            <label className='login__label' htmlFor='password'>Пароль</label>
            <input className='login__input' type='password' name='password'  minLength='8' required onChange={handleChange} />
            {!isValid&&<span className='login__error'>{errors.password}</span>}
          </div>
         
        </div>
        <div className='login__buttons'>
        <span className='login__error login__error_server'>{isError}</span>
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