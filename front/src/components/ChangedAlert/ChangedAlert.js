import React from 'react'
import './ChangedAlert.css'
import Button from '../Button/Button'

function ChangedAlert(props) {
    return (
        <main className="ca-main">
            <div className="ca-div">
                <p>{props.content}</p>
                <Button click={props.closeErrorAlert}
                            label="ok"
                            className="login-btn"
                        />                
            </div>
        </main>
    )
}

export default ChangedAlert
