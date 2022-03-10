import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import './App.css';

function App() {
  return (
    <div className="page">
<Main />
<Movies />
<SavedMovies/>
<Register/>
<Login />
<Profile />
    </div>
  );
}

export default App;
