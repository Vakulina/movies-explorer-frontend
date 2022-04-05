
import React from "react";
import './FilterCheckbox.css';
export default function FilterCheckbox({onChange, isChecked}) {
  const [checkedInput, setChecked] = React.useState(isChecked);
  const handleChange=(arg)=>{
    onChange();
    setChecked(arg);
    localStorage.setItem('isShort', arg);
  }
  return (
    <div className="filter-checkbox">
      <input type="checkbox" id="shortFilms" name="shortFilms" className="filter-checkbox__input"
        checked={checkedInput} onChange={() => handleChange(!checkedInput)} />
      <label className="filter-checkbox__label" htmlFor="shortFilms">Короткометражки</label>
    </div>
  )
}
