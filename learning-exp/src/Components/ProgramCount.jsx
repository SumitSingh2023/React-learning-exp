import React from 'react'
import '../Styles/ProgramCount.css'
import manlogo from '../assets/image/manlogo.svg'
import assign from '../assets/image/assign.svg'

const ProgramCount = () => {
  return (
    <div style={{width:"90%",marginBottom:"7rem"}}>
        <div className='heading'>
            <h2 style={{fontFamily:"Poppins, sans-serif"}}>We Completed 1200+ Certification Program Successfully & Counting</h2>
            <p>At Learning Exp. We Are Committed To Providing You with A Superior Learning Experience That Empowers You To Achieve Your Goals .Join Us Today And Embark On A Journey Of Discovery, Growth, And Success</p>
        </div>
        <div className='batch-count'>

            <div className='student-data'>
                <div>
                    <img src={assign} alt="" />
                </div>
                <div>
                    <p style={{marginLeft:"5px",color:"#1453FF",fontWeight:"600",fontSize:"1.3rem"}}>100+</p>
                    <p style={{marginLeft:"5px",color:'#1453FF',fontWeight:"500"}}>Batches Complete</p>
                </div>
            </div>

            <div className='student-data'>
                <div>
                    <img src={assign} alt="" />
                </div>
                <div>
                   
                    <p style={{marginLeft:"5px",color:"#1453FF",fontWeight:"600",fontSize:"1.3rem"}}>50+</p>
                    <p style={{marginLeft:"5px",fontWeight:"500"}}>Active Batches</p>
                </div>
            </div>

            <div className='student-data'>
                <div>
                    <img src={manlogo} alt="" />
                </div>
                <div>
                   
                    <p style={{marginLeft:"5px",color:"#1453FF",fontWeight:"600",fontSize:"1.3rem"}}>10,000 +</p>
                    <p style={{marginLeft:"5px",fontWeight:"500"}}>Student Satisfied</p>
                </div>
            </div>

            <div className='student-data'>
                <div>
                    <img src={manlogo} alt="" />
                </div>
                <div>
                    <p style={{marginLeft:"5px",color:"#1453FF",fontWeight:"600",fontSize:"1.3rem"}}>10 +</p>
                    <p style={{marginLeft:"5px",fontWeight:"500"}}>Course Module</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProgramCount