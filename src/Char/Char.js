import React from 'react';
import './Char.css'
const Char=(props)=>
{
     return(
        <div className="Char">
         <p onClick={props.click}> {props.CharValue}</p>
        </div>
     )
} 

export default Char;