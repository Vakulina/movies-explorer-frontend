import React from "react";
import { useCallback} from 'react';

export default function useFormWithValidation() {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    let message= target.validationMessage;

    const nameError = "Имя может содержать только латинские буквы, кириллицу, знаки дефиса и пробела"; 
    if ((name === 'name')&&(!target.validity.typeMismatch)&&(!target.checkValidity())) { message = nameError }
    
    const emailError = "Введите корректный email"; 
    if ((name === 'email')&&(!target.validity.typeMismatch)&&(!target.checkValidity())) { message = emailError }
    
    setValues({...values, [name]: value});
    setErrors({...errors, [name]:  message});
    setIsValid(target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, resetForm };
}