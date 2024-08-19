import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <div className='Navbar'>
         <span className='brand-name'>
               Deserts
         </span>
         <div className='nav-pages'>
          <a href='./Home.js'>Home</a>
          <a href='./About.js'>About</a>
          <a href='./Contact.js'>Contact</a>
         </div>
    </div>
  )
}

export default Navbar