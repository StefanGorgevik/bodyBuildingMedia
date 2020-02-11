import React from 'react'
import './InfoDiv.css'

const InfoDiv = (props) => {
    return( 
        <div className="infoDiv">
                <label htmlFor={props.labelNameId}>{props.labelText}</label>
                <p id={props.labelNameId}> {props.info}</p>
            </div>
    )
}

export default InfoDiv;