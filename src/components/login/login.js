import React,{Component} from 'react';
import AuthForm from '../common/authForm/authForm';
import './login.css';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {signup} from '../../actions';

const FlexWrapper = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  min-height:calc(100vh - 50px);
`





class Login extends Component {

    onSubmit = values => {
      this.props.signup(values);
    }

    render() {
        return (
            <FlexWrapper className="Login">
                <AuthForm onSubmit={this.onSubmit}/>
            </FlexWrapper>
        );
    }
}


export default connect(null,{signup})(Login);
