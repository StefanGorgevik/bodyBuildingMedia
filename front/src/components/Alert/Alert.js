import React from 'react'
import './Alert.css'
import Button from '../Button/Button'

function Alert(props) {
    return (
        <main className="alert-main">
            <div className="alert-div">
                <h1>{props.title}</h1>
                <p>{props.content}</p>
                <Button click={props.closeAlert}
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

export default Alert
