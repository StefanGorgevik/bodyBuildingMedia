import React from 'react'
import './DietInput.css'

function DietInput(props) {
    return (
        <div className="meals-div">
            <label htmlFor={props.id} className="login-label">{props.type} {props.i}</label>
            <textarea className="meals-snacks-textarea" onChange={props.saveMealsValue} 
            id={props.id} defaultValue={props.value}></textarea>
        </div>
    )
}

export default DietInput
