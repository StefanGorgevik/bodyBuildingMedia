import React from 'react'

import './PersonalInfo.css'

class Personalinfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            first_name: '',
            last_name: '',
            birthday: '',
            level: '',
            location: '',
            email: '',
            password: ''
        }
    }
    
    render() {
        return (
            <div className="personal-info register-tap">
                <h1>Personal Info</h1>
                <p>
                    <label htmlFor="first-name" className="login-label">First Name</label>
                    <input type="text" id="first-name" className="login-input" onChange={this.saveInputValue} />
                </p>
                <p>
                    <label htmlFor="last-name" className="login-label">Last Name</label>
                    <input type="text" id="last-name" className="login-input" onChange={this.saveInputValue} />
                </p>
                <p>
                    <label htmlFor="birthday" className="login-label">Birthday</label>
                    <input type="date" id="birthday" className="login-input" onChange={this.saveInputValue} />
                </p>
                <p>
                    <label htmlFor="level" className="login-label">Level</label>
                    <input type="text" id="level" className="login-input" onChange={this.saveInputValue} />
                </p>
                <p>
                    <label htmlFor="location" className="login-label">Location</label>
                    <input type="location" id="location" className="login-input" onChange={this.saveInputValue} />
                </p>
                <p>
                    <label htmlFor="email" className="login-label">Email</label>
                    <input type="email" id="email" className="login-input" onChange={this.saveInputValue} />
                </p>
                <p>
                    <label htmlFor="password" className="login-label">Password</label>
                    <input type="password" id="password" className="login-input" onChange={this.saveInputValue} />
                </p>
            </div>
        )
    }
}

export default Personalinfo