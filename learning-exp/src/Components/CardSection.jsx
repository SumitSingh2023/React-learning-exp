import React from 'react'
import '../Styles/CardSection.css'
import Smartphone from '../assets/image/smartphone.svg'
import Dashboard from '../assets/image/Dashboard.svg'
import Layout from '../assets/image/layout.svg'

const CardSection = () => {
  return (
    <>
      <div style={{textAlign:"center"}}>
        <div className='Top-text'>
            <p style={{fontFamily:"Poppins, sans-serif"}} >We provide various kind of learning module for you</p>
            <p>It Is A Long Established Fact That A Reader Will Be Distracted By The Redable Content Of A Page When Looking At Its Layout.The Point Of Using Lorem</p>
        </div>

        <div className='parent-card'>
            <div className='card'>
                <img style={{width:"33%"}} src={Smartphone} alt="" />
                <h3 style={{fontSize:"17px",fontWeight:"bold"}}>Learn Anything</h3>
                <p>It is A Long Established Fact That a Reader Will Be Distracted By The Readable</p>
            </div>
            <div className='middle-card'>
                <img style={{width:"36%"}} src={Dashboard} alt="" />
                <h3 style={{fontSize:"17px",fontWeight:"bold"}}>Flexible Learning</h3>
                <p>It is A Long Established Fact That a Reader Will Be Distracted By The Readable</p>
            </div>
            <div className='card'>
                <img style={{width:"33%"}} src={Layout} alt="" />
                <h3 style={{fontSize:"17px",fontWeight:"bold"}}>Expert Connect</h3>
                <p>It is A Long Established Fact That a Reader Will Be Distracted By The Readable</p>
            </div>
            
        </div>
      </div>
    </>
  )
}

export default CardSection