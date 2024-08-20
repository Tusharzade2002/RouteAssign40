import React from 'react'
import Navbar from '../../Component/Navbar'
import Homeimg from '../../Images/House.png'
function Home() {
  return (

    <div>
       <Navbar />
       Home
       <img className='home-img' src={Homeimg} alt='Home' /> 
    </div>
  )
}

export default Home