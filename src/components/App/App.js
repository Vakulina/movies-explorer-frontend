import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { IsLoginContext } from '../../contexts/IsLoginContext';
import './App.css';
import { mainApi } from '../../utils/MainApi'

function App() {
  const [currentUser, setUser] = useState({ name: '', email: '' });
  const [isLogin, toggleLogin] = useState(false);
  
  useEffect(()=>{
    mainApi.getInfoUser()
    .then((res)=>{
      if (res) {
        setUser(res.user);
        toggleLogin(true);
        }
      })
      .catch((err) => {
        toggleLogin(false);
      });
    }, [])
 
    const handleRegister = ({name,email, password}) =>{
      console.log(name, password, email)
      mainApi.postUser()
    }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <IsLoginContext.Provider value={isLogin}>
        <div className="page">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/saved-movies" element={<SavedMovies />} />
            <Route path="/signup" element={<Register onRegister={handleRegister} />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </div>
      </IsLoginContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
