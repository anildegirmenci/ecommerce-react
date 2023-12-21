import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss';

const Footer = props => {
    return (
        <footer className='footer'>
            <div className="wrap">
                <Link target='_blank' to='https://github.com/anildegirmenci'>
                    © AD's Shop Zone
                </Link>
            </div>
        </footer>
    )
}

export default Footer