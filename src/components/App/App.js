import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'
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
import { mainApi } from '../../utils/MainApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

function App() {
  const [currentUser, setUser] = useState({ name: '', email: '' });
  const [isLogin, toggleLogin] = useState(false);  //if LocalStorage.filter === true то isLogin= true
  const navigate = useNavigate();

  useEffect(() => {
    mainApi.getInfoUser()
      .then((user) => {
        if (user) {
          setUser(user);
          toggleLogin(true);
        }
      })
      .catch((err) => {
        toggleLogin(false);
      });
  }, [isLogin])

  const handleRegister = (user) => {
    mainApi.postUser(user)
      .then((res) => {
        const newUser = { email: res.data.email, password: user.password, }
        mainApi.loginUser(newUser)
          .then(() => {
            toggleLogin(true)
            navigate('/movies')
          })

      })
  }
  const handleLogin = (user) => {
    mainApi.loginUser(user)
      .then(() => {
        toggleLogin(true)
        navigate('/movies')
      })
  }
  const handleChange = () => {
  }

  const handleOut = () => {
    mainApi.unloginUser()
      .then(() => {
        setUser({ name: '', email: '' });
        toggleLogin(false);
        navigate('/')
      })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <IsLoginContext.Provider value={isLogin}>
        <div className="page">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/movies" element={
              <ProtectedRoute component={Movies} />
            } />
            <Route path="/saved-movies" element={
              <ProtectedRoute component={SavedMovies} />
            } />
            <Route path="/signup" element={<Register onRegister={handleRegister} />} />
            <Route path="/signin" element={<Login onLogin={handleLogin} />} />
            <Route path="/profile" element={
              <ProtectedRoute
                component={Profile}
                onChange={handleChange}
                onOut={handleOut}
              />
            } />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </div>
      </IsLoginContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
