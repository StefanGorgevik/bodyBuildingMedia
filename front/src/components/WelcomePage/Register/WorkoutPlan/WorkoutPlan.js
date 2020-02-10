import React from 'react'

import './WorkoutPlan.css'
import { saveWorkoutPlan, saveClicked, editClicked } from '../../../../redux/actions/userActions'
import store from '../../../../redux/store'
class WorkoutPlan extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            type: '',
            goal: '',
            intensity: '',
            saveClicked: false,
            days: ["day1", "day2", "day3", "day4", "day5", "day6", "day7"]
        }
    }

    saveInputValue = (event) => {
        this.setState({ [event.target.id]: event.target.value })
    }

    restButtonHandler = (event) => {
        this.setState({ [event.target.id]: "true" })
    }
    undoButtonHandler = (event) => {
        this.setState({ [event.target.id]: "" })
    }

    saveDataHandler = () => {
        this.setState({ saveClicked: true })
        const newWorkoutPlan = {
            type: this.state.type,
            goal: this.state.goal,
            intensity: this.state.intensity,
            day1: this.state.day1,
            day2: this.state.day2,
            day3: this.state.day3,
            day4: this.state.day4,
            day5: this.state.day5,
            day6: this.state.day6,
            day7: this.state.day7
        }

        store.dispatch(saveWorkoutPlan(newWorkoutPlan))
        store.dispatch(saveClicked())
    }

    editDataHandler = () => {
        this.setState({ saveClicked: false })
        store.dispatch(editClicked())
    }

    render() {
        var days = this.state.days.map((day, index) => {
            return (<div key={index}>
                {this.state[day] !== "true" ?
                    <div className="inputs-div" key={index}>
                        <label htmlFor={day} className="login-label">Day {index + 1}</label>
                        {this.state.saveClicked ?
                            <p className="data-p day-p">{this.state[day]}</p> :
                            <input type="text" id={day} className="register-inputs" onChange={this.saveInputValue} defaultValue={this.state[day]} />}
                        {!this.state.saveClicked ? <button id={day} onClick={this.restButtonHandler}>Rest Day</button> : null}
                    </div>
                    : <div>
                        <p key={index} className="rest-day-p">Day {index + 1} is your rest day!</p>
                        {!this.state.saveClicked ?<button id={day} onClick={this.undoButtonHandler}>Undo</button> : null }
                    </div>}
            </div>
            )
        })

        return (
            <div className="workout-plan">
                <h1 className="title-h1">Workout Plan</h1>
                <div className='inputs-div'>
                    <label htmlFor="type" className="login-label">Type</label>
                    {!this.state.saveClicked ? <input type="text" id="type" className="register-inputs" onChange={this.saveInputValue} defaultValue={this.state.type} />
                        : <p className="data-p">{this.state.type}</p>}
                </div>
                <div className='inputs-div'>
                    <label htmlFor="intensity" className="login-label">Intensity</label>
                    {!this.state.saveClicked ? <input type="text" id="intensity" className="register-inputs" onChange={this.saveInputValue} defaultValue={this.state.intensity} />
                        : <p className="data-p">{this.state.intensity}</p>}
                </div>
                <div className='inputs-div'>
                    <label htmlFor="goal" className="login-label">Goal</label>
                    {!this.state.saveClicked ? <input type="text" id="goal" className="register-inputs" onChange={this.saveInputValue} defaultValue={this.state.goal} />
                        : <p className="data-p">{this.state.goal}</p>}
                </div>
                <div className='days'>
                    {days}

                </div>

                <div className="save-btn-div">
                    {!this.state.saveClicked ?
                        <button className="save-btn" onClick={this.saveDataHandler}>Save</button> :
                        <button className="save-btn" onClick={this.editDataHandler}>Edit</button>}
                </div>
            </div>
        )
    }
}

export default WorkoutPlan
