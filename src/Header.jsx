import NavBar from './NavBar';
import './Header.css';
import React from 'react';

function Header({ setPage }) {

    return (
        <header className="header">
            <h1 className="header__title"> Qing's<br />Design Studio</h1>
            <NavBar setPage={setPage} className="header__navbar" />
        </header>
    );
}
export default Header;