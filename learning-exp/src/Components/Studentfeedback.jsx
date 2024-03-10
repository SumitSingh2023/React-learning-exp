import React from 'react'
import '../Styles/Studentfeedback.css'
import arrow from '../assets/image/arrow.svg'
import boypic from '../assets/image/boypic.png'

import star from '../assets/image/star.svg'

const Studentfeedback = () => {
  return (
    <div className='feed-sec'>
        <div>
            <h2 style={{fontFamily:"Poppins, sans-serif"}}>Our Students FeedBack</h2>
        </div>
      <div className='text-arrow'>
        
        <p>At Learning Exp. We Are Committed To Providing You with A Superior Learning Experience That Empowers You To Achieve Your Goals .Join Us Today And Embark On A Journey Of Discovery, Growth, And Success</p>
        
        <div className='btn-arr'>
            <p>Read More</p>
            <img style={{width:'2.5rem'}} src={arrow} alt="" />
        </div>
      </div>

      <div className='pic-sec'>
        <div className='img'>
            <img style={{width:"20rem", height:"100%"}} src={boypic} alt="" />
        </div>
        <div className='star-text'>
            <div className='star'>
                <div><img src={star} alt="" /></div>
                <div><img src={star} alt="" /></div>
                <div><img src={star} alt="" /></div>
                <div><img src={star} alt="" /></div>
                <div><img src={star} alt="" /></div>
            </div>
            <div>
                <p style={{marginBottom:"1rem"}}>
                   Sed Ut Perspiciatis Unde Omni Isnte Natus Error Sit Volutatem Accustion Doloremque Laudtium,<br />Totam Rem Aperian, Eaque Ipsa Quae Ab llo
                </p>

                <h3 style={{marginBottom:"0.5rem",color:"black",fontWeight:"500"}}>Riad Islam</h3>

                <p style={{color:"black",fontWeight:"500"}}>Product Manager. <span style={{color:"blue"}}>@Learning.Com</span></p>
            </div>
            <div></div>
            <div></div>
        </div>

      </div>
    </div>
  )
}

export default Studentfeedback