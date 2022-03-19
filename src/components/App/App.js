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
import { IsLogin } from '../../contexts/IsLogin';
import './App.css';
import { mainApi } from '../../utils/MainApi'

function App() {
  const [currentUser, setUser] = useState({ name: null, email: null });
  const [isLogin, toggleLogin] = useState(false);
  
  useEffect(()=>{
    mainApi.getInfoUser()
    .then((res)=>{
      if (res) {
        console.log(res)
        setUser(res.user);
        toggleLogin(true);
        }
      })
      .catch((err) => {
        toggleLogin(false);
      });
    }, [])
 

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <IsLogin.Provider value={isLogin}>
        <div className="page">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/saved-movies" element={<SavedMovies />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </div>
      </IsLogin.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
