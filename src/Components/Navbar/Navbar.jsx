import React, { useState } from 'react'
import './Navbar.css'
import brandlogo from '../Assets/brandlogo.png'
import cartlogo from '../Assets/cartlogo.png'

const Navbar = () => {

  const [menu,setMenu] = useState("shop")

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={brandlogo} alt='loading...'/>
        <p>SHOPPER</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>setMenu("shops")}>Shop{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>setMenu("men")}>Men{menu==="men"?<hr/>:<></>}</li>
        <li onClick={()=>setMenu("women")}>Women{menu==="women"?<hr/>:<></>}</li>
        <li onClick={()=>setMenu("kids")}>Kids{menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <div className='nav-login-cart'>
        <button>Login</button>
        <img src={cartlogo} alt='loading...'/>
        <div className='nav-cart-count'>0</div>
      </div>
    </div>
  )
}

export default Navbar