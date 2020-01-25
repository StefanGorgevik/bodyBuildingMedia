import React from 'react'

import './WorkoutPlan.css'

class WorkoutPlan extends React.Component {
    render() {
        return (
            <div className="workout-plan register-tap">
                <h1>Workout Plan</h1>
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

export default WorkoutPlan