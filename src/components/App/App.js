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
import { SavedMoviesContext } from '../../contexts/SavedMoviesContext';
import { IsLoginContext } from '../../contexts/IsLoginContext';
import './App.css';
import { mainApi } from '../../utils/MainApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import ProtectedRoutForReg from '../ProtectedRoutForReg/ProtectedRoutForReg'

function App() {
  const [currentUser, setUser] = useState({ name: '', email: '' });
  
  const [isLogin, toggleLogin] = useState(()=>{
    if(localStorage.getItem('allMovies')){
      return true}
    else {
      return false
    }
    });  
    
  const navigate = useNavigate();
  const [isError, setError] = useState('')
  const [message, setMessageAboutSucces] = useState('')


  const [savedMovies, changeSavedMovies] = useState(() => {
    if (localStorage.getItem('savedMovies') !== null) {
      return JSON.parse(localStorage.getItem('savedMovies'))
    }
    else {
      return []
    }
  }
  );

  const [isLoading, setLoadingStatus] = useState(false);


  useEffect(() => {
    setError('');
  }, [navigate]);

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

  const handleGetSavedMovies = () => {
    setLoadingStatus(true)
    mainApi.getSavedMovies()
      .then((res) => {
        changeSavedMovies(res)
        localStorage.setItem('savedMovies', JSON.stringify(res))
      })
      .catch(() => {
        changeSavedMovies([])
      })
      .finally(() => setLoadingStatus(false))
  }
const handleDeleteSavedMovie =(res)=>{
  const index = savedMovies.findIndex(item=> item.movieId === res.message.movieId); 
  const newArray=[...savedMovies]
  newArray.splice(index, 1)
  changeSavedMovies(newArray)
  localStorage.setItem('savedMovies', JSON.stringify(newArray))
}

  const handleRegister = (user) => {
    mainApi.postUser(user)
      .then((res) => {
        const newUser = { email: res.data.email, password: user.password, }
        mainApi.loginUser(newUser)
          .then(() => {
            toggleLogin(true)
            setUser((actual) => {
              return {
                ...actual, user
              }
            })
            setError('');
            navigate('/movies');
          })
      })
      .catch(err => setError(err.message))
  }

  const handleLogin = (user) => {
    mainApi.loginUser(user)
      .then((res) => {
        toggleLogin(true)
        setUser((actual) => {
          return {
            ...actual, email: user.email
          }
        })
        setError('');
        navigate('/movies')
      })
      .catch(err => {
        setError(err.message)
      })
  }
  const handleClearMessage=()=>{
    setMessageAboutSucces('')
  }

  const handleChangeProfile = (user) => {
    setError('');
    setMessageAboutSucces('')
    mainApi.updateUserInfo(user)
      .then(() => {
        setUser((actual) => {
          return {
            ...actual,
            ...user
          }
        });
        setMessageAboutSucces('Данные успешно изменены!')
      })
      .catch(err => {
        setError(err.message)
        setMessageAboutSucces('')
      })
  }

  const handleOut = () => {
    mainApi.unloginUser()
      .then(() => {
        setUser({ name: '', email: '' });
        changeSavedMovies([])
        localStorage.clear()
        toggleLogin(false);
        setError('');
        navigate('/')
      })
      .catch(err => {
        setError(err.message)
      })
  }


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <IsLoginContext.Provider value={isLogin}>
        <SavedMoviesContext.Provider value={savedMovies}>
          <div className="page">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/movies" element={
               isLogin&& <ProtectedRoute component={Movies}
                  handleGetSavedMovies={handleGetSavedMovies}
                       />
              } />
              <Route path="/saved-movies" element={
                 isLogin&&<ProtectedRoute component={SavedMovies} handleGetSavedMovies={handleGetSavedMovies}
                  isLoading={isLoading} handleDeleteSavedMovie={handleDeleteSavedMovie}/>
              } />

              <Route path="/signup" element={
                <ProtectedRoutForReg
                  component={Register}
                  isError={isError}
                  onRegister={handleRegister}
                />
              }
              />
              <Route path="/signin" element={
                <ProtectedRoutForReg
                  isError={isError}
                  component={Login}
                  onLogin={handleLogin}
                />
              }
              />
              <Route path="/profile" element={
                <ProtectedRoute
                  component={Profile}
                  isError={isError}
                  onChange={handleChangeProfile}
                  onOut={handleOut}
                  handleClearMessage={handleClearMessage}
                  message={message}
                />
              } />
              <Route path='*' element={<NotFoundPage />} />
            </Routes>
          </div>
        </SavedMoviesContext.Provider>
      </IsLoginContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
