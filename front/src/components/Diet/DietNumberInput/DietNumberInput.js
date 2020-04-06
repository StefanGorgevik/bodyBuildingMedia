import React from 'react'
import './DietNumberInput.css'

function DietNumberInput(props) {
    var id = props.id.replace(/([A-Z]+)/g, " $1").replace(/^/, "")
    return (
        <div className="number-inputs-div">
            <label htmlFor={props.id.replace(/-/g, ' ')}>{id}</label>
            <input type="number" id={props.id.replace(/-/g, ' ')}
                className="number-inputs"
                onChange={props.saveInputValue} 
                min="0"
                max="4"
                value={props.value}
                />
        </div>
    )
}

export default DietNumberInput
