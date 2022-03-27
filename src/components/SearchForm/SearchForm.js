import React from "react";
import './SearchForm.css';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

export default function SearchForm({ typeList, onKeyPress, onClick }) {
  return (
    <form className='search-form'>
      <div className='search-form__input-container'>
        <label htmlFor='search-form__input' className='search-form__label' />
        <input 
        className={`search-form__input ${(typeList==='search-movies')?'search-form__input_shadow':''}`} 
        id="search-form__input" 
        placeholder='Фильм' 
        type='text' 
        required
        onKeyPress={onKeyPress} />
        <button 
        className='search-form__button' 
        type='submit'
        onClick= {onClick}/>
        <div className="search-form__line"></div>
      </div>
      
    </form>
  )
}