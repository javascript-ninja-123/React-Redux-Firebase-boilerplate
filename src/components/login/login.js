import React,{Component} from 'react';
import AuthForm from '../common/authForm/authForm';
import './login.css';

class Login extends Component {

    render() {
        return (
            <div className="Login">
                <AuthForm/>
            </div>
        );
    }
}


export default Login;
