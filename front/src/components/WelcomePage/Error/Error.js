import React from 'react'
import './Error.css'
import Button from '../../Button/Button'

function Error(props) {
    return (
        <main className="error-main">
            <div className="error-div">
                <h1>Error</h1>
                <p>Fill up every field or check if your credentials are correct</p>
                <Button click={props.closeErrorAlert}
                            label="close"
                            className="close-btn"
                        />
            </div>
        </main>
    )
}

export default Error
