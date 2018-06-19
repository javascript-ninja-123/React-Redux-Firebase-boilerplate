import React from 'react';

//stateless function
//renders faster

const customInput = ({input,label,type, meta}) => (
  <div className='customInput'>
    <div>{label}</div>
    <div>
     <input {...input}  type={type} className="customInput__input"/>
     <div>{(meta.error && meta.touched) && <span className='customInput__error'>{meta.error}</span>}</div>
     <div>{(meta.warning && meta.touched) && <span className='customInput__warning'>{meta.warning}</span>}</div>
   </div>
  </div>
)


export default customInput
