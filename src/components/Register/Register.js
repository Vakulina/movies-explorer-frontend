import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import logo from '../../images/logo__header.svg';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './Register.css';
import React from 'react';
import useFormWithValidation from '../useFormWithValidation/useFormWithValidation';
import { DEFAULT_ERROR_MESSAGE } from '../../utils/constants';

export default function Register({ onRegister, isError }) {
  const {values, handleChange, errors, isValid, resetForm} = useFormWithValidation();
  
  return (
    <section className='register'>
      <Link className="register__link register__link_logo" to='/'>
        <img src={logo}
          className="register__logo"
          alt="логотип" />
      </Link>
      <form className='register__form ' noValidate>
        <h1 className='register__title'>Добро пожаловать! </h1>
        <div className='register__fields'>
          <div className='register__field'>
            <label
              className='register__label'
              htmlFor='register-name'>Имя</label>
            <input
              className='register__input'
              name='name'
              type="text"
              minLength ='2'
              maxLength = '30'
              pattern='[A-Za-zа-яА-Я -]+'
              required
              id='register-name'
              onChange={handleChange} />
                {!isValid&&<span className='register__error'>{errors.name}</span>}
          </div>
          <div className='register__field'>
            <label
              className='register__label'
              htmlFor='register-email'>E-mail</label>
            <input
              className='register__input'
              type='email'
              onChange={handleChange}
              name='email'
              pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
              id='register-email'
              required />
                 {!isValid&&<span className='register__error'>{errors.email}</span>}
          </div>
          <div className='register__field'>
            <label className='register__label' htmlFor='password'>Пароль</label>
            <input
              className='register__input'
              type='password'
              onChange={handleChange}
              name='password'
              minLength='8'
              required />
                {!isValid&&<span className='register__error'>{errors.password}</span>}
          </div>
          
        </div>
        <div className='register__buttons'>
        <span className='register__error register__error_server'>{isError}</span>
          <button
            className='register__button register__button_registration'
            disabled={!isValid}
            onClick={(e) => {
              e.preventDefault();
              onRegister(values);
             resetForm();
             }
            }>
            Зарегистрироваться
          </button>
          <span className='register__sign'>Уже зарегистрированы?</span>
          <Link
            to="/signin"
            className="register__link register__link_enter">
            Войти
          </Link>
        </div>
      </form>
    </section>
  );
}
