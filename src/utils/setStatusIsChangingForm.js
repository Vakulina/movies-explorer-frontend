export default function setStatusIsChangingForm(values, newValues) {
  const props1 = Object.getOwnPropertyNames(values);
  let result

  for (let i = 0; i < props1.length; i += 1) {
    const prop = props1[i];
    if (values[prop] !== newValues[prop]) {
      result = true;
    }   
  }
return result
}