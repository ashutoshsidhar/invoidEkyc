import React from 'react'
import bgform from './images/try2.svg'
import Button from './components/buttons/button'
import Aadhar from './aadhar'
import Digilocker from './digilocker'
import Manual from './manual'
import './Styles/home.css'
import { Link } from 'react-router-dom';
export default function Home() {
    return (
        <div className="home" style={{
            backgroundImage: 'url('+bgform+')',
            backgroundSize: "cover",
            top: "0px",
            height: "100vh",
            width: "100vw",
          }}>
            <h1  className="note" style={{color: "white"}}>Identity Verification</h1>
            <Link Classname="button" to="/aadhaar"><Button id="aadhar-verify" text="KYC using Eaadhaar"></Button></Link>
            <Link Classname="button" to="/digilocker"><Button id="digilocker-verify" text="KYC using DigiLocker"></Button></Link>
            <Link Classname="button" to="/manual"><Button id="manual-verify" text="Manual KYC"></Button></Link>
        </div>
    )
}
