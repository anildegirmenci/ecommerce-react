import React from 'react';
import './style.scss';
import Logo from '../../assets/logo.png'

const Header = props => {
    return (
        <header className='header'>
            <div className="wrap">
                <div className="logo">
                    <img src={Logo} alt="AD Store Logo" />
                </div>
            </div>
        </header>
    )
}

export default Header