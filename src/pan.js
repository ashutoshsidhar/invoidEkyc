import React from 'react'
import bgform from './images/try2.svg'
import Textbox from './components/textbox/textbox'
import Circle from './components/circle/circle'
import Complete from './complete'
import { Link } from 'react-router-dom';
import './Styles/pan.css'
export default function Pan() {
    return (
        <div style={{
            backgroundImage: 'url('+bgform+')',
            backgroundSize: "cover",
            top: "0px",
            height: "100vh",
            width: "100vw",
          }}> <h1 className="note" style={{color: "white"}}>Identity Verification</h1>
              <Textbox className="info" type="text" name="Enter PAN Number"></Textbox>
              <Link Classname="button" to="/Complete"><Circle className="next"></Circle></Link>
            
        </div>
    )
}
