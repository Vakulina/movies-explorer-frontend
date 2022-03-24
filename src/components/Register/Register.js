import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import logo from '../../images/logo__header.svg';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './Register.css';
import React from 'react';
import useFormWithValidation from '../useFormWithValidation/useFormWithValidation';
export default function Register({ onRegister }) {

  const { name, email } = useContext(CurrentUserContext);
  const [updatedUser, updateUser] = useState({ name, email, password: '' });
  const {values, handleChange, errors, isValid, resetForm} = useFormWithValidation();
  function handleCurrentName(e) {
handleChange(e)
  }
  function handleCurrentEmail(e) {
    handleChange(e)
  }
  function handleCurrentPassword(e) {
    handleChange(e)
  }

  /*register__input_error 
  register__form_validity*/
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
              htmlFor='name'>Имя</label>
            <input
              className='register__input'
              placeholder={name}
              id='name'
              type="text"
              minLength ='2'
              maxLength = '30'
              pattern='[A-Za-zа-яА-Я -]+'
              required
              onChange={handleChange} />
                {!isValid&&<span className='register__error'>{errors.name}</span>}
          </div>
          <div className='register__field'>
            <label
              className='register__label'
              htmlFor='email'>E-mail</label>
            <input
              className='register__input'
              type='email'
              placeholder={email}
              onChange={handleChange}
              id='email'
              name="email"
              pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
              required />
                 {!isValid&&<span className='register__error'>{errors.email}</span>}
          </div>
          <div className='register__field'>
            <label className='register__label' htmlFor='password'>Пароль</label>
            <input
              className='register__input'
              type='password'
              onChange={handleChange}
              id='password'
              minLength='8'
              required />
                {!isValid&&<span className='register__error'>{errors.password}</span>}
          </div>
        
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
