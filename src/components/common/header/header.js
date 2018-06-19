import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import './header.css';
const Logo = 'https://upload.wikimedia.org/wikipedia/hr/2/24/Adidas_logo.png'

//https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/api/NavLink.md

//BEM naming convention
//For a better CSS naming
//because we are using scss

const activeNavStyle = {color:"#004ba0"};

class Header extends Component {

    render() {
        return (
            <header className="Header">
              <div className='Header__logo-wrapper'>
                <img src={Logo} alt='logo' className="Header__logo"/>
              </div>
              <nav className='Header__list'>
                <NavLink to='/home' activeStyle={activeNavStyle}>Home</NavLink>
                <NavLink to='/profile' activeStyle={activeNavStyle}>Profile</NavLink>
                <NavLink to='/login' activeStyle={activeNavStyle}>Login</NavLink>
                <NavLink to='/signup' activeStyle={activeNavStyle}>Sign Up</NavLink>
              </nav>
            </header>
        );
    }
}

export default Header
