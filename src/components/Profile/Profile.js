import { useContext, useEffect } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { IsLoginContext } from '../../contexts/IsLoginContext'
import './Profile.css';
import Header from '../Header/Header';
import useFormWithValidation from '../../hooks/useFormWithValidation/useFormWithValidation';

export default function Profile({ onOut, onChange, isError, message, handleClearMessage,  }) {
  const { values, handleChange, errors, isValid, resetForm, isChanges, handleSetFalseChangedStatus  } = useFormWithValidation();
  const user = useContext(CurrentUserContext);
  const isLogin = useContext(IsLoginContext);
  
  useEffect(() => {
    resetForm()
  }, [resetForm])

  const onHadleClickChange = (e) => {
    e.preventDefault();
    handleSetFalseChangedStatus();
    onChange({ ...user, ...values });
  }

  const handleChangeInput = (e) => {
    handleClearMessage('');
    handleChange(e);
  }

  return (
    <>
      <Header isLogin={isLogin} />
      <section className='profile'>
        <form className='profile__form'>
          <h1 className='profile__title'>Привет, {user.name}! </h1>
          <div className='profile__fields'>
            <div className='profile__field'>
              <label className='profile__label' htmlFor='name'>Имя</label>
              <input className='profile__input'
                defaultValue={user.name}
                name='name'
                id='profile-name'
                type="text"
                minLength='2'
                maxLength='30'
                pattern='[A-Za-zа-яА-Я -]+'
                required onChange={handleChangeInput} />

            </div>
            {!isValid && <span className='profile__error'>{errors.name}</span>}
            <div className='profile__line'></div>
            <div className='profile__field'>
              <label className='profile__label' htmlFor='profile-email'>E-mail</label>
              <input className='profile__input'
                defaultValue={user.email}
                name='email'
                id='profile-email'
                pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                required
                onChange={handleChangeInput} />

            </div>
            {!isValid && <span className='profile__error'>{errors.email}</span>}

          </div>
          <div className='profile__buttons'>
            <span className='profile__error profile__error_server'>{isError}</span>
            <span className='profile__message'>{message}</span>
            <button className='profile__button' onClick={onHadleClickChange} disabled={!!!isChanges || !isValid}>Редактировать</button>
            <button className='profile__button profile__button_exit' onClick={(e) => {
              e.preventDefault()
              onOut()
            }}>Выйти из аккаунта</button>
          </div>
        </form>
      </section>
    </>
  );
}

