import axios from 'axios';
const sleep = time => new Promise(resolve => setTimeout(resolve,time));

export const validate = values => {
  const errors = {}
  if(!values.email){
    errors.email = 'email is required'
  }
  else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
    errors.email = 'email is not formatted right'
  }
  if(!values.password){
    errors.password = 'password is required';
  }
  return errors;
}

export const warn = values => {
  const warnings = {};
  if(values.password && values.password.length <= 8){
    warnings.password = 'We encourage users to create a password longer than 8 characters'
  }
  return warnings;
}

//we are going to implement this later once we have firebase backend
// https://codeburst.io/javascript-es-2017-learn-async-await-by-example-48acc58bad65
export const asyncValidate = async (values) => {
  //convetion way
  // const {data} = wait axios.get('url')
  // if(data.includes(values.email)){
  //   throw 'this email is taken'
  // }
  await sleep(1000);
  const emailArray = ['sung@gmail.com','sung.developer@gmail.com']
  if(emailArray.includes(values.email)){
    throw {email:'this email is taken'}
  }
}
