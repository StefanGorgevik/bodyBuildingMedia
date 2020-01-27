import React from 'react'

import './WorkoutPlan.css'
import Input from './Input/Input'
class WorkoutPlan extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            daysAdded: false,
            programName: '',
            status: '',
            days: ''
        }
    }

    saveInputValue = (event) => {
        this.setState({ [event.target.id]: event.target.value })
        console.log(this.state.days)
    }

    
    render() {
        
        return (
            <div className="workout-plan register-tap">
                <h1>Workout Plan</h1>
                <p>
                    <label htmlFor="programName" className="login-label">Program Name</label>
                    <input type="text" id="programName" className="login-input" onChange={this.saveInputValue} />
                </p>
                <p>
                    <label htmlFor="status" className="login-label">Status</label>
                    <input type="text" id="status" className="login-input" onChange={this.saveInputValue} />
                </p>
                <div className="workout-days">
                    <p>
                        <label htmlFor="days" className="login-label">Days per week? </label>
                        <input type="text" id="days" className="login-input" onChange={this.saveInputValue} />
                    </p>
                    <button onClick={this.dayAdded} className="add-day-btn">Add days</button>
                </div>
            </div>
        )
    }
}

export default WorkoutPlan