import React from 'react';
import './index.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <p>&copy; {currentYear} Ishpreet Singh. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
