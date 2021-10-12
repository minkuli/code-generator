import React from 'react';
import './style.css';
import logo from './logo-joan.svg';

const Header = () => {
    return (
        <div className="header">
            <a href='/' className="logo">
                <img src={logo} alt="logo" />
            </a>
            <h1>Joan Code Generator</h1>
            <p>Generate customizable codes for Joan Credits</p>
        </div>
    );
}

export default Header;