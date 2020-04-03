import React from 'react'
import './RegInput.css'

function RegInput(props) {
    var id = props.id.replace(/([A-Z]+)/g, " $1").replace(/^/, "")
    return (
        <div>
            <div className='input-div'>
                <label htmlFor={props.id} className="login-label">{id.replace(/-/g, ' ')}</label>
                <input type={props.id === "birthday" ? "date" : "text" && props.id === 'password' ? "password" : "text"}
                    id={props.id}
                    className={props.class}
                    onChange={props.saveInputValue} 
                    />
            </div>
        </div>
    )
}

export default RegInput
