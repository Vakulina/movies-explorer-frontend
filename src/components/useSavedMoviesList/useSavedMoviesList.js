import { useState } from "react";

export default function useSavedMoviesList (card) {
const [savedMovies, toggleLikeMovie] = useState(useState(JSON.parse(localStorage.getItem('savedMovies'))||[]));


const saveMovie=(card)=>{
const newSavedMoviesList = [...savedMovies, card]
toggleLikeMovie(newSavedMoviesList)
console.log(newSavedMoviesList)
}
return {saveMovie}
}