import React from 'react'
import bgform from './images/try2.svg'
import Textbox from './components/textbox/textbox'
import Circle from './components/circle/circle'
import Pan from './pan'
import { Link } from 'react-router-dom'
import './Styles/otp.css'
export default function Otp() {
    return (
        
            <div style={{
            backgroundImage: 'url('+bgform+')',
            backgroundSize: "cover",
            top: "0px",
            height: "100vh",
            width: "100vw",
          }}> <h1 className="note" style={{color: "white"}}>Identity Verification</h1>
              <Textbox className="info" type="text" name="Enter OTP"></Textbox>
              <div className="link" >Resend OTP</div>
              <Link Classname="button" to="/Pan"><Circle className="next"></Circle></Link>
            
        </div>
        
    )
}
