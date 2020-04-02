import React from 'react'
import './RegInput.css'

function RegInput(props) {
    var capitalized = props.id.replace(/-/g, function (match) {
        return match.toUpperCase();
    });
    return (
        <div>
            <div className='input-div'>
                <label htmlFor={props.id} className="login-label">{capitalized.replace(/-/g, ' ')}</label>
                <input type={props.id === "birthday" ? "date" : "text" && props.id === 'password' ? "password" : "text"}
                    id={props.id}
                    className={props.id === "birthday" ? "birthday-input" : "register-inputs"}
                    onChange={props.saveInputValue} 
                    />
            </div>
        </div>
    )
}

export default RegInput
