import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import logo from '../../images/logo__header.svg';
import './Register.css';
import React from 'react';
import useFormWithValidation from '../../hooks/useFormWithValidation/useFormWithValidation';

export default function Register({ onRegister, isError }) {
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();
  const [isChanged, setIsChanged] = useState(false);  //были ли изменения в инпутах
  useEffect(() => {
    resetForm()
  }, [resetForm])
  const handleChangeInput = (e) => {
    handleChange(e);
    setIsChanged(true);
  }
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
              minLength='2'
              maxLength='30'
              pattern='[A-Za-zа-яА-Я -]+'
              required
              id='register-name'
              onChange={handleChangeInput} />
            {!isValid && <span className='register__error'>{errors.name}</span>}
          </div>
          <div className='register__field'>
            <label
              className='register__label'
              htmlFor='register-email'>E-mail</label>
            <input
              className='register__input'
              type='email'
              onChange={handleChangeInput}
              name='email'
              pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
              id='register-email'
              required />
            {!isValid && <span className='register__error'>{errors.email}</span>}
          </div>
          <div className='register__field'>
            <label className='register__label' htmlFor='password'>Пароль</label>
            <input
              className='register__input'
              type='password'
              onChange={handleChangeInput}
              name='password'
              minLength='8'
              required />
            {!isValid && <span className='register__error'>{errors.password}</span>}
          </div>

        </div>
        <div className='register__buttons'>
          <span className='register__error register__error_server'>{!isChanged ? isError : ''}</span>
          <button
            className='register__button register__button_registration'
            disabled={!isValid}
            onClick={(e) => {
              e.preventDefault();
              setIsChanged(false)
              onRegister(values);
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
