
import React from "react";
import './FilterCheckbox.css';
export default function FilterCheckbox() {
  return (
    <div className="filter-checkbox">
      <input type="checkbox" id="shortFilms" name="shortFilms" className="filter-checkbox__input" checked />
      <label className="filter-checkbox__label" for="shortFilms">Короткометражки</label>
    </div>
  )
}
