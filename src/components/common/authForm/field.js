import React from 'react';
import styled from 'styled-components';


//styled component
const Input = styled.input`
  width:300px;
  border-radius:5px;
  font-size:20px;
  margin-bottom:.5rem;
  border:1px solid black;
`;

//by default 1rem == 14px 12px?
const Label = styled.div`
  margin-bottom:.5rem;
  text-transform: uppercase;
`
const ErrorMessageWrapper = styled.div.attrs({
  padding:props => props.size || '.5rem'
})`
  font-size:2rem;
  padding:${props => props.size};
  color:red;
`

const WarningMessageWrapper = ErrorMessageWrapper.extend`
  color:orange;
`

//stateless function
//renders faster

const customInput = ({input,label,type, meta}) => (
  <div className='customInput'>
    <Label>{label}</Label>
    <div>
     <Input {...input}  type={type} className="customInput__input"/>
     <ErrorMessageWrapper>{(meta.error && meta.touched) && <span className='customInput__error'>{meta.error}</span>}</ErrorMessageWrapper>
     <WarningMessageWrapper>{(meta.warning && meta.touched) && <span className='customInput__warning'>{meta.warning}</span>}</WarningMessageWrapper>
   </div>
  </div>
)


export default customInput
