import { useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './Profile.css';
import Header from '../Header/Header';

export default function Profile() {
  const {name, mail} = useContext(CurrentUserContext);
  return (
        <>
          <Header isLogin={true}/>
          <section className='profile'>
            <form className='profile__form'>
              <h1 className='profile__title'>Привет, {name}! </h1>
              <div className='profile__fields'>
                <div className='profile__field'>
                  <label className='profile__label' htmlFor='name'>Имя</label>
                  <input className='profile__input' value={name} id='name'/>
                </div>
                <div className='profile__line'></div>
                <div className='profile__field'>
                  <label className='profile__label' htmlFor='mail'>E-mail</label>
                  <input className='profile__input' value={mail}  id='mail'/>
                </div>
                </div>
                <div className='profile__buttons'>
                  <button className='profile__button'>Редактировать</button>
                  <button className='profile__button profile__button_exit'>Выйти из аккаунта</button>
                </div>
              </form>   
          </section>
        </>
      );
    }
    
