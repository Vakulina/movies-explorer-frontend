import React from "react";
import './SearchForm.css';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

export default function SearchForm() {
  return (
    <form className='search-form'>
      <div className='search-form__input-container'>
        <label for='search-form__input' className='search-form__label'/>
        <input className='search-form__input' id="search-form__input" placeholder='Фильм' type='text' required></input>
        <button className='search-form__button' type='submit'></button>
        <div className="search-form__line"></div>
      </div>
      <FilterCheckbox />
    </form>
  )
}