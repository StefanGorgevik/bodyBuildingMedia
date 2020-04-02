import React from 'react'
import './DietNumberInput.css'

function DietNumberInput(props) {
    var capitalized = props.id.replace(/(^|[\s-])\S/g, function (match) {
        return match.toUpperCase();
    });
    return (
        <div className="number-inputs-div">
            <label htmlFor={props.id.replace(/-/g, ' ')}>{capitalized.replace(/-/g, ' ')}</label>
            <input type="number" id={props.id.replace(/-/g, ' ')}
                className="number-inputs"
                onChange={props.saveInputValue} />
        </div>
    )
}

export default DietNumberInput
