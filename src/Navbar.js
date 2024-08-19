import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='Navbar'>
         <span className='brand-name'>
               Deserts
         </span>
         <div className='nav-pages'>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
         </div>
    </div>
  )
}

export default Navbar