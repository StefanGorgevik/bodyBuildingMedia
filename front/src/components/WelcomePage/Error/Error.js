import React from 'react'
import './Error.css'
import Button from '../../Button/Button'

function Error(props) {
    return (
        <main className="error-main">
            <div className="error-div">
                <h1>{props.title}</h1>
                <p>{props.content}</p>
                <Button click={props.closeErrorAlert}
                            label="close"
                            className="close-btn"
                        />
                {props.type === 'alert' ? 
                <Button click={props.acceptSignOut}
                            label="Sign out"
                            className="login-btn"
                        /> : null}
                
            </div>
        </main>
    )
}

export default Error
