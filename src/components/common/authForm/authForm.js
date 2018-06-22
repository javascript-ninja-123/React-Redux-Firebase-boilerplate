import React,{Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import customInput from './field';
import {validate, warn,asyncValidate} from './validation';
import styled from 'styled-components';
//https://redux-form.com/7.4.2/docs/gettingstarted.md/

// https://www.styled-components.com/docs
//styled component

const flexWrapper = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  min-height:calc(100vh - 50px);
`


class AuthForm extends Component {

    render() {
       const { handleSubmit } = this.props;
        return (
            <flexWrapper className="AuthForm">
              <form onSubmit={handleSubmit}>
                <div>
                  <div>
                    <Field
                      name="email"
                      component={customInput}
                      type="text"
                      label="Email address"
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <Field
                      name="password"
                      component={customInput}
                      type="password"
                      label='Password'
                    />
                  </div>
                </div>
                <div>
                  <button type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </flexWrapper>
        );
    }
}

export default reduxForm({
  form:"authForm",
  validate,
  warn,
  asyncValidate,
  asyncBlurFields: ['email']
})(AuthForm);
