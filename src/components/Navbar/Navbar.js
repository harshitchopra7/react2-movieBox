import React from 'react'
import logo from "../../images/navbar/logo.png"
import "./Navbar.css"

function Navbar() {
  return (
    <div className='navbar_container'>
        <img src={logo} alt="logo" />
        <button>Sign In</button>
    </div>
  )
}

export default Navbar