import React from 'react'
import '../Styles/WhyUs.css'
import VideoPlayer from '../Components/VideoPlayer'

const WhyUs = () => {
  return (
    <div style={{marginBottom:"7rem"}}>
        <div className='why-text'>
            <h2 style={{fontFamily:"Poppins, sans-serif"}} >Why Us</h2>
            <p>At Learning Exp.We Are Committed To Providing you With A Superior Learning Experience That Empowers You To Achieve Your Goals.Join Us Today And Embark On A Journey Of Discovery, Growth, And Sucess. </p>
        </div>
        <div className='video-part'>
            <div className="video">
                <VideoPlayer/>
            </div>
            <div className="text">
                <h1 style={{fontFamily:"Poppins, sans-serif"}}>Crafting Your Dream Career: <br />Building a Path You Love with us</h1>

                <p>At Learning Exp. We Are Committed To Providing You with A Superior Learning Experience That Empowers You To Achieve Your Goals .Join Us Today And Embark On A Journey Of Discovery, Growth, And Success</p>

                <p>Our Platform Is Designed To Empower Learners Like You To Excel In Today's Dynamic World.</p>

                <button className='getmorebtn'>Get More</button>
            </div>
        </div>
    </div>
  )
}

export default WhyUs