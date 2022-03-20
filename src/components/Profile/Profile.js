import { useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import {IsLoginContext} from '../../contexts/IsLoginContext'
import './Profile.css';
import Header from '../Header/Header';

export default function Profile({onOut,  onChange}) {
  const {name, mail} = useContext(CurrentUserContext);
  const isLogin = useContext(IsLoginContext);
  return (
        <>
          <Header isLogin={isLogin}/>
          <section className='profile'>
            <form className='profile__form'>
              <h1 className='profile__title'>Привет, {name}! </h1>
              <div className='profile__fields'>
                <div className='profile__field'>
                  <label className='profile__label' htmlFor='name'>Имя</label>
                  <input className='profile__input' defaultValue={name} id='name'/>
                </div>
                <div className='profile__line'></div>
                <div className='profile__field'>
                  <label className='profile__label' htmlFor='mail'>E-mail</label>
                  <input className='profile__input' defaultValue={mail}  id='mail'/>
                </div>
                </div>
                <div className='profile__buttons'>
                  <button className='profile__button'>Редактировать</button>
                  <button className='profile__button profile__button_exit' onClick={(e)=>{
                  e.preventDefault()
                    onOut()
                  }}>Выйти из аккаунта</button>
                </div>
              </form>   
          </section>
        </>
      );
    }
    
