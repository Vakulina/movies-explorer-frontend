import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import logo from '../../images/logo__header.svg';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './Register.css';
import React from 'react';

export default function Register({ onRegister }) {

  const { name, email } = useContext(CurrentUserContext);
  const [updatedUser, updateUser] = useState({ name, email, password: '' });

  function handleCurrentName(e) {
    updateUser((actual) => {
      return {
        ...actual,
        name: e.target.value
      }
    });
  }
  function handleCurrentEmail(e) {
    updateUser((actual) => {
      return {
        ...actual,
        email: e.target.value
      }
    });
  }
  function handleCurrentPassword(e) {
    updateUser((actual) => {
      return {
        ...actual,
        password: e.target.value
      }
    });
  }

  /*register__input_error */
  return (
    <section className='register'>
      <Link className="register__link register__link_logo" to='/'>
        <img src={logo}
          className="register__logo"
          alt="логотип" />
      </Link>
      <form className='register__form'>
        <h1 className='register__title'>Добро пожаловать! </h1>
        <div className='register__fields'>
          <div className='register__field'>
            <label
              className='register__label'
              htmlFor='name'>Имя</label>
            <input
              className='register__input'
              placeholder={name}
              id='name'
              required
              onChange={handleCurrentName} />
          </div>
          <div className='register__field'>
            <label
              className='register__label'
              htmlFor='mail'>E-mail</label>
            <input
              className='register__input'
              type='email'
              placeholder={email}
              onChange={handleCurrentEmail}
              id='mail'
              required />
          </div>
          <div className='register__field'>
            <label className='register__label' htmlFor='password'>Пароль</label>
            <input
              className='register__input'
              type='password'
              onChange={handleCurrentPassword}
              id='password'
              required />
          </div>
          <span className='register__error'>Что-то пошло не так...</span>
        </div>
        <div className='register__buttons'>
          <button
            className='register__button register__button_registration'
            onClick={(e) => {
              e.preventDefault();
              onRegister(updatedUser);
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
