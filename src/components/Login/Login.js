import './Login.css';
import logo from '../../images/logo__header.svg';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useFormWithValidation from '../../hooks/useFormWithValidation/useFormWithValidation';

export default function Login({onLogin, isError}) {
 const {values, handleChange, errors, isValid, resetForm} = useFormWithValidation();
 const [isChanged, setIsChanged]=useState(false);  //были ли изменения в инпутах

 useEffect(()=>{
  resetForm()
},[resetForm])

const handleChangeInput =(e)=>{
  handleChange(e);
  setIsChanged(true);
}
 const handleEnter = (e)=> {
  e.preventDefault();
  setIsChanged(false)
  onLogin(values)
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
            onChange={handleChangeInput}/>
             {!isValid&&<span className='login__error'>{errors.email}</span>}
          </div>
           <div className='login__field'>
            <label className='login__label' htmlFor='password'>Пароль</label>
            <input className='login__input' type='password' name='password'  minLength='8' required onChange={handleChangeInput} />
            {!isValid&&<span className='login__error'>{errors.password}</span>}
          </div>
         
        </div>
        <div className='login__buttons'>
        <span className='login__error login__error_server'>{!isChanged ? isError:''}</span>
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