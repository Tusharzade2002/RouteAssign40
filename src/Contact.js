import React from 'react'
import Navbar from './Navbar'
import Contactimg from '././Images/Contact.png'
function Contact() {
  return (
    <div>
       <Navbar />
       contact
       <img className='contact-img' src={Contactimg} alt='contact'/>
    </div>
  )
}

export default Contact