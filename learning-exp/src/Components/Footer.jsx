import React from 'react'
import '../Styles/Footer.css'
import facebook from '../assets/image/facebook.svg'
import linkdn from '../assets/image/linkdn.svg'
import twiter from '../assets/image/twiter.svg'
import pinterest from '../assets/image/pinterest.svg'
import logo from '../assets/image/Group-1.svg'



const Footer = () => {
  return (
    <>
    <div className='footer-box'>

        <div style={{marginTop:"4.9rem",margin:"auto"}}>

            <div>
                <div style={{display:"flex"}}>
                    <img style={{width:"2rem"}} src={logo} alt="" />
                    <p style={{fontWeight:"500",fontFamily:"Poppins, sans-serif",color:"gray",fontSize:"1rem"}}>Learning Exp.</p>
                </div>

                <div style={{display:"flex"}}>
                    <img src={facebook} alt="" />
                    <img src={twiter} alt="" />
                    <img src={linkdn} alt="" />
                    <img src={pinterest} alt="" />
                </div>
            </div>

        </div>

        <div style={{paddingTop:"5rem",margin:"auto"}}>

            <h2 style={{fontWeight:"600",fontSize:"1.2rem",marginBottom:"1rem"}}>Links</h2>
            <ul>
                <li>Home</li>
                <li>Pricing</li>
                <li>Download</li>
                <li>About</li>
                <li>Service</li>
            </ul>
        </div>

        <div style={{paddingTop:"5rem",margin:"auto"}}>
            <h2 style={{fontWeight:"600",fontSize:"1.2rem",marginBottom:"1rem"}}>Support</h2>
            <ul>
                <li>FAQ</li>
                <li>How it</li>
                <li>Features</li>
                <li>Contact</li>
                <li>Reporting</li>
            </ul>
        </div>
        <div style={{paddingTop:"5rem",margin:"auto"}}>
            <h2 style={{fontWeight:"600",fontSize:"1.2rem",marginBottom:"1rem"}}>Contact Us</h2>
            <ul>
                <li style={{color:"grey"}}>+880 12345678</li>
                <li style={{color:"grey"}}>youremail@gmail.co</li>
                <li style={{color:"grey"}}>Pune City</li>
            </ul>
        </div>
    </div>
        <div style=
           {{display:"flex",  justifyContent:"space-between", 
           alignItems:"center",
           width:"80%",
           margin:"auto",
           paddingBottom:"2rem"
           }}>
            <div > 
                <h2 style={{fontFamily:"Poppins, sans-serif",color:"grey",fontSize:"0.9rem"}} >Copyright & Design By @Learning Exp</h2>
            </div>

            <div>
                <h2 style={{fontFamily:"Poppins, sans-serif",color:"grey",fontSize:"0.9rem"}}  >Term of use |  Privacy Policy</h2>
            </div>

        </div>
    </>
  )
}

export default Footer