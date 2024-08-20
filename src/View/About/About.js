import React from 'react'
import Navbar from './../../Component/Navbar'
import Aboutimg from './../../Images/About.png'
function About() {
  return (
    <div>
       <Navbar />
       about
        <img className='about-img' src={Aboutimg} alt='About'/>
    </div>
  )
}

export default About