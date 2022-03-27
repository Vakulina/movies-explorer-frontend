import { useState, useEffect } from "react";
import {mainApi} from '../../utils/MainApi';

export default function useSavedMoviesList (card) {

const [savedMovies, setSavedMovies] = useState([])


function getSavedMoviesFromServer(){
  mainApi.getSavedMovies()
  .then((res) => {
    localStorage.setItem('savedMovies', JSON.stringify(res))
    setSavedMovies(res)
  })
}

useEffect(()=>{
  getSavedMoviesFromServer()
},[])


/*const saveMovie=(card)=>{
const newSavedMoviesList = [...savedMovies, card]
toggleLikeMovie(newSavedMoviesList)
console.log(newSavedMoviesList)
}*/
return {getSavedMoviesFromServer, savedMovies}
}