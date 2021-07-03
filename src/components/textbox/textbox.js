import React from 'react';
import  "./textbox.css";
function Textbox(props){
    return(
        <input type={props.type} placeholder={props.name}/>
    );
}

export default Textbox;