import { Routes, Route } from 'react-router-dom'
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import NotFoundPage from '../NotFoundPage/NotFoundPage'
import './App.css';

function App() {
  return (
    <div className="page">
      <Routes>
        <Route path="/" element={ <Main /> } />
        <Route path="/movies" element={ <Movies /> } />
        <Route path="/saved-movies" element={ <SavedMovies /> } />
        <Route path="/signup" element={ <Register /> } />
        <Route path="/signin" element={ <Login /> } />
        <Route path="/profile" element={ <Profile /> } />
        <Route path='*' element= { <NotFoundPage /> } />
      </Routes>
    </div>
  );
}

export default App;
