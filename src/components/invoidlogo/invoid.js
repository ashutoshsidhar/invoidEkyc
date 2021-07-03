import React from 'react'
// import 'invoidlogo.css';
import './invoidlogo.css'
export default function Invoid() {
    return (
        <div>
             <img className="hello" src={require('../../images/invoid logo.png').default} style={{height: "250px",width: "500px"}}></img>
        </div>
    )
}
