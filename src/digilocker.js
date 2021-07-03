import React from 'react'
import bgform from './images/try2.svg'
import FormBG2 from './components/formbg2/formbg2'
import Textbox from './components/textbox/textbox'
import Circle from './components/circle/circle'
import Complete from './complete'
import './Styles/digilocker.css'
import { Link } from 'react-router-dom'
export default function Digilocker() {
    return (
        <div style={{
            backgroundImage: 'url('+bgform+')',
            backgroundSize: "cover",
            top: "0px",
            height: "100vh",
            width: "100vw",
          }}>
            <h1 className="note" style={{color: "white"}}>Identity Verification</h1>
            <FormBG2 className="iimage"></FormBG2>
            <Textbox type="text" name="Enter Mobile Number"></Textbox>
            <Link Classname="button" to="./Complete"><Circle className="next"></Circle></Link>
            <div className="noteimp" >Note: We Will Fetch Your Identity Proofs From DigiLocker Automatically</div>
        </div>
    )
}
