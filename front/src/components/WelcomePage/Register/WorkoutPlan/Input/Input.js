import React from 'react'

const Input = (props) => {
    var day = 1;
    return (
            <p>
                    <label htmlFor="status" className="login-label">Day</label>
                    <input type="text" id="status" className="login-input" onChange={this.props.saveInputValue} />
                </p>
    )
}

export default Input