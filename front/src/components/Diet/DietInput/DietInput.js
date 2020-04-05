import React from 'react'
import './DietInput.css'

function DietInput(props) {
    console.log(props.value)
    return (
        <div className="meals-div">
            <label htmlFor={props.id} className="login-label">{props.type} {props.i}</label>
            <textarea className="meals-snacks-textarea" onChange={props.saveMealsValue} 
            id={props.id} >{props.value}</textarea>
            
        </div>
    )
}

export default DietInput
