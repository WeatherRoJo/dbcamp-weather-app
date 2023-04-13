import React from 'react';
import DBlogo from '../../../assets/DBLogo.png';
import "./style.css"

export function Footer () {
    return(
        <footer className='footer'>
            <p> MADE WITH LOVE </p> 
            <img src={DBlogo} alt='Logo DB' />
        </footer>
    )
}

export default Footer;