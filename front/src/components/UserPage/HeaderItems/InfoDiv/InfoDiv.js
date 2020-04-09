import React from 'react'
import './InfoDiv.css'

const InfoDiv = (props) => {
    return( 
        <div className="info-div">
                <div htmlFor={props.labelNameId}>{props.labelText} </div>
                <span>:</span>
                <p id="info-div-p" className={props.info === '' ? "info-div-p-disabled info-div-p" : "info-div-p"}> 

                {props.info === "true" ? "Resting day" : props.info === '' ? "Not specified!" : props.info}</p>
            </div>
    )
}

export default InfoDiv;