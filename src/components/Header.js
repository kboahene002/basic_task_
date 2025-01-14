import React from 'react'
import logos from '../assets/logo512.png'
import "../css/header.css"

const Header = () => {
  return (
    <header>
        <div className="header-main">
            <img className='header-logo' src={logos} alt="This is a logo" />
            
            <span className='header-links'>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </span>

        </div>
    </header>
  )
}

export default Header

