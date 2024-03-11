import React from 'react'
import '../Styles/ContactUs.css'

const ContactUs = () => {
  return (
      <div className='contact'>
        <div>
            <h2 style={{fontFamily:"Poppins, sans-serif"}}>Contact Us!</h2>
            <p>There are many variation of passages of Lorem IspumBut the majority have suffered alteration</p>
        </div>
        <div className='input'>
           <div className='white-input'>
              <button>Send</button>
           </div>
        </div>
      </div>
  )
}

export default ContactUs