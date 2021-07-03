import React from 'react'
import bgform from './images/try2.svg'
import Textbox from './components/textbox/textbox'
import Circle from './components/circle/circle'
import Otp from './otp'
import { Link } from 'react-router-dom'
import './Styles/aadhaar.css'
export default function Aadhar() {
    return (
        <div style={{
            backgroundImage: 'url('+bgform+')',
            backgroundSize: "cover",
            top: "0px",
            height: "100vh",
            width: "100vw",
          }}> <h1 className="note" style={{color: "white"}}>Identity Verification</h1>
              <Textbox className="info" type="text" name="Enter Aadhaar VID"></Textbox>
              <Link Classname="button" to="./Otp"><Circle className="next"></Circle></Link>
            
        </div>
    )
}
