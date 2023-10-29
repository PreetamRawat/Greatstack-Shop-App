import React from 'react'
import './Navbar.css'
import brandlogo from '../Assets/brandlogo.png'
import cartlogo from '../Assets/cartlogo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={brandlogo} alt='loading...'/>
        <p>SHOPPER</p>
      </div>
      <ul className='nav-menu'>
        <li>Shop</li>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
      </ul>
      <div className='nav-login-cart'>
        <button>Login</button>
        <img src={cartlogo} alt='loading...'/>
      </div>
    </div>
  )
}

export default Navbar