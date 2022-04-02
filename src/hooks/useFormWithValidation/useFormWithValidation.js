import React from "react";
import { useCallback, useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import setStatusIsChangingForm from '../../utils/setStatusIsChangingForm'

export default function useFormWithValidation() {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);
  const [isChanges, setChangedStatus] = React.useState(false)
  const user = useContext(CurrentUserContext);


  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    let message = target.validationMessage;

    const nameError = "Имя может содержать только латинские буквы, кириллицу, знаки дефиса и пробела";
    if ((name === 'name') && (!target.validity.typeMismatch) && (!target.checkValidity())) { message = nameError }

    const emailError = "Введите корректный email";
    if ((name === 'email') && (!target.validity.typeMismatch) && (!target.checkValidity())) { message = emailError }

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: message });
   // console.log( user, {...user, ...values, [name]: value})

    setIsValid(target.closest("form").checkValidity());

//console.log(setStatusIsChangingForm(user, {...user, ...values, [name]: value}))
    setChangedStatus(setStatusIsChangingForm(user, {...user, ...values, [name]: value}))
  //console.log(isChanges)
  };



  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, isChanges, handleChange, errors, isValid, resetForm };
}