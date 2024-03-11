import React from 'react'
import '../Styles/Header.css'
import logo from '../assets/image/Group-1.svg'
import Video from '../Components/VideoPlayer'
import VideoPlayer from '../Components/VideoPlayer'

const Header = () => {

  return (
    <div className='parent-cont'>
      <div className='conintainer'>
        <nav className='navbar'>
          <div className='logo'>
            <img src={logo} alt="logo" />
            <p style={{fontFamily:"Poppins, sans-serif"}} className='text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl'>Learning Exp.</p>
          </div>

          <div>
            <ul className='nav2' style={{fontFamily:"Poppins, sans-serif"}}>
              <li className='text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl'>Home</li>
              <li className='text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl'>Services Us</li>
              <li className='text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl'>Why Us</li>
              <li className='text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl'>Our Goals</li>
              <li className='text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl'>Contact Us</li>
            </ul>
          </div>
        </nav>
        <div className="main-sec">
          <div className="main-sec1">
              <p>We Create Learning Experience With Excellent Technolgy.</p>

              <p>Unlimited Access To 100+ World-Class Courses Hands-On <br />Projects, And Job-Ready Certificate Programs--<br/>
              All Included In Your Subsscription
              </p> 

              <button>Book Demo Class</button><span style={{color:"white"}}>Explore More --</span>
          </div>

          <div className='Video-sec'>
            <VideoPlayer/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header