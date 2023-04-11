import React from 'react';
import DBlogo from '../../../assets/DBLogo.png';

export function Footer () {
    return(
        <footer>
            <p> MADE WITH LOVE </p> 
            <img src={DBlogo} alt='Logo DB' />
        </footer>
    )
}

export default Footer;