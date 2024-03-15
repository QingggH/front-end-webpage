import React from 'react';
import './Footer.css';

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {currentYear} Dogs Adoption. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
