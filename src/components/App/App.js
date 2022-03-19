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
  const [isLogin, toggleLogin] = useState(false);  //if LocalStorage.filter === true то isLogin= true
  
  useEffect(()=>{
    mainApi.getInfoUser()
    .then((res)=>{
      if (res) {
        setUser(res);
        toggleLogin(true);
        }
      })
      .catch((err) => {
        toggleLogin(false);
      });
    }, [isLogin])

    const handleRegister = (user) =>{
      mainApi.postUser(user)
      .then((res)=>{
        const newUser={email:res.data.email, password:user.password, }
        mainApi.loginUser(newUser)
      })
    }
    const handleLogin = () =>{

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
            <Route path="/signin" element={<Login onLogin={handleLogin} />} />
            <Route path="/profile" element={<Profile />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </div>
      </IsLoginContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
