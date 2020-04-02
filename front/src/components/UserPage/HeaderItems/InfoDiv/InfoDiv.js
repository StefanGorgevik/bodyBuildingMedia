import React from 'react'
import './InfoDiv.css'

const InfoDiv = (props) => {
    return( 
        <div className="info-div">
                <div htmlFor={props.labelNameId}>{props.labelText} </div>
                <span>:</span>
                <p id={props.labelNameId}> {props.info}</p>
            </div>
    )
}

export default InfoDiv;