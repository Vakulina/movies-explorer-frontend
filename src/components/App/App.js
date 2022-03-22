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
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import ProtectedRoutForUnreg from '../ProtectedRoutForUnreg/ProtectedRoutForUnreg'

function App() {
  const [currentUser, setUser] = useState({ name: '', email: '' });
  const [isLogin, toggleLogin] = useState(true);  //if LocalStorage.filter === true то isLogin= true
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
            setUser(user)
            navigate('/movies')
          })

      })
  }
  const handleLogin = (user) => {
    mainApi.loginUser(user)
      .then((res) => {
        navigate('/movies')
        setUser(user)
        toggleLogin(true)
        
      })
  }
  const handleChangeProfile = (user) => {
    mainApi.updateUserInfo(user)
    .then(()=>{
      setUser((actual) => {
        return {
          ...actual,
          name: user.name
        }
      })
    })
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
          
            <Route path="/signup" element={
              <ProtectedRoutForUnreg 
              component={Register}
              onRegister={handleRegister}
              />
            }
             />
            <Route path="/signin" element={
              <ProtectedRoutForUnreg 
              component={Login}
              onLogin={handleLogin} 
              />
            }
             />
            
            
            <Route path="/profile" element={
              <ProtectedRoute
                component={Profile}
                onChange={handleChangeProfile}
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
