import React from "react";
import './SearchForm.css';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

export default function SearchForm({ typeList, onKeyPress, onClick }) {
const [valueInput, setValue] = React.useState('')
console.log("fff", valueInput)
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
        value={valueInput}
        onChange={(e)=>setValue(e.target.value)}
        
        onKeyPress={(e)=>{
          onKeyPress(e)
          }
          } />
        <button 
        className='search-form__button' 
        type='submit'
        onClick= {(e)=>{
          e.preventDefault() 
          onClick()
        }

        }/>
        <div className="search-form__line"></div>
      </div>
      
    </form>
  )
}