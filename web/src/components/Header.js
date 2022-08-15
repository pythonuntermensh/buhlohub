import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

import MyAccountElement from './MyAccountElement';

import logo from '../img/logo.png'
import './styles/Header.css';

const Header = props => {
    const isLoggedIn = localStorage.getItem('token');
    
    return (
        <div className="header-wrapper">
            <Link to="/"><img height="150" width="150" className="header-icon" src={logo} alt="logo-img" /></Link>
            <Link to="/"><h1>BUHLO.MARKET.COM</h1></Link>
            <div className="header-login">
                {isLoggedIn ? (
                    <div className="account-and-exit-wrapper">
                        <MyAccountElement />
                        <Link to="/" 
                            onClick={() => {
                                localStorage.removeItem('token');
                                props.history.push('/');
                            }}>
                                Выход
                        </Link>
                    </div>
                    
                ) : (
                    <p>
                        <Link to="/signin">Вход</Link> | {' '}
                        <Link to="/signup">Регистрация</Link>
                    </p>
                )}
            </div>
        </div>
    );
};

export default withRouter(Header);