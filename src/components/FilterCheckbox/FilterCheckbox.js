
import React from "react";
import './FilterCheckbox.css';
export default function FilterCheckbox() {
  const [checkedInput, setChecked] = React.useState(true);
  return (
    <div className="filter-checkbox">
      <input type="checkbox" id="shortFilms" name="shortFilms" className="filter-checkbox__input"
       checked={checkedInput} onChange={() => setChecked(!checkedInput)} />
      <label className="filter-checkbox__label" htmlFor="shortFilms">Короткометражки</label>
    </div>
  )
}
