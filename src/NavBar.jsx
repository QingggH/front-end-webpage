import React, { useState } from 'react';
import './NavBar.css';

function NavBar({ setPage, className }) {
    const [showDropdown, setShowDropdown] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    function go(event, page) {
        event.preventDefault();
        setPage(page);
        setShowDropdown(false);
    }

    function handleAboutMouseEnter() {
        setShowDropdown(true);
    }

    function handleAboutMouseLeave() {
        setShowDropdown(false);
    }

    function toggleMenu() {
        setShowMenu(!showMenu);
    }

    return (
        <nav className={`navbar ${className}`}>
            <div className="nav-container">
                <div className="nav-header">
                    <button className="menu-button" onClick={toggleMenu}>
                        <div className="menu-icon"></div>
                        <div className="menu-icon"></div>
                        <div className="menu-icon"></div>
                    </button>
                </div>
                <ul className={`nav-list ${showMenu ? 'show-menu' : ''}`}>
                    <li className="nav-item">
                        <a href="/" className="nav-link" onClick={(e) => go(e, "Home")}>
                            Home
                        </a>
                    </li>
                    <li
                        className="nav-item about"
                        onMouseEnter={handleAboutMouseEnter}
                        onMouseLeave={handleAboutMouseLeave}
                    >
                        <a href="/" className="nav-link">
                            About
                        </a>
                        {showDropdown && (
                            <ul className="dropdown-menu">
                                <li>
                                    <a href="/" onClick={(e) => go(e, "AboutStyles")}>
                                        About Styles
                                    </a>
                                </li>
                                <li>
                                    <a href="/" onClick={(e) => go(e, "AboutCases")}>
                                        About Cases
                                    </a>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link" onClick={(e) => go(e, "Designers")}>
                            Designers
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link" onClick={(e) => go(e, "Register")}>
                            Register
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
