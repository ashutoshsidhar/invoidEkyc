import React from 'react'
import manw from './images/try2.svg'
import Textbox from './components/textbox/textbox'
import Button from './components/buttons/button'
import Circle from './components/circle/circle'
import Complete from './complete'
import './Styles/manual.css'
import { Link } from 'react-router-dom'
export default function Manual() {
    return (
        <div className="manuals" style={{
            backgroundImage: 'url('+manw+')',
            backgroundSize: "cover",
            top: "0px",
            height: "100vh",
            width: "100vw",
          }}>
            <h1 className="notee" style={{color: "white"}}>Identity Verification</h1>
            <Textbox className="big" type="text" name="Enter Mobile Number"></Textbox>
            <br></br>
            <Textbox className="small" type="text" name="Enter OTP"></Textbox>
            <div className="link" Style={{color: "#0000FF"}}>Resend OTP</div>
            <Textbox className="big" type="text" name="Enter Aadhaar VID"></Textbox>
            <input className="up" id="aadhaar-upload" accept="image/*" type="file"/>
            <Textbox className="big" type="text" name="Enter PAN Number"></Textbox>
            
            <input className="up" id="pan-upload" accept="image/*" type="file"/>
            <Link Classname="button" to="/Complete"><Circle className="next"></Circle></Link>
            
        </div>
    )
}
