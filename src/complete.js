import React from 'react'
import Invoid from './components/invoidlogo/invoid'
import FormBG from './components/formbg/formbg'
import bgform from './images/try2.svg'
import './Styles/complete.css'
export default function Complete() {
    return (
        <div style={{
            backgroundImage: 'url('+bgform+')',
            backgroundSize: "cover",
            top: "0px",
            height: "100vh",
            width: "100vw",
          }}>
              <Invoid className="comp"></Invoid>
              <FormBG className="comp"></FormBG>
              <h1 className="note" style={{color: "white"}}>KYC Completed</h1>
            
        </div>
    )
}
