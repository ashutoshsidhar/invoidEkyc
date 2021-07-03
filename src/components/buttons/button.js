import React from 'react'
import './button.css'
export default function Button(props) {
    
    return (
        <div className="justforcss" id={props.id}>
            {props.text}
        </div>
    )
}
