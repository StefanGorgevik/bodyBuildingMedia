import React from 'react'

import './WorkoutPlan.css'
class WorkoutPlan extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            programName: '',
            status: '',
            saveClicked: false
        }
    }

    saveInputValue = (event) => {
        this.setState({ [event.target.id]: event.target.value })
        console.log(this.state)
    }

    restButtonHandler = (event) => {
        console.log(event.target.id)
        this.setState({[event.target.id]: true})
    }

    saveDataHandler = () => {
        this.setState({ saveClicked: true})
        //store.dispatch(savePersonalInfo(newUser))
    }

    editDataHandler = () => {
        this.setState({ saveClicked: false})
    }

    render() {
        return (
            <div className="workout-plan">
                <h1>Workout Plan</h1>
                <div className='inputs-div'>
                    <label htmlFor="programName" className="login-label">Program Name</label>
                   {!this.state.saveClicked ? <input type="text" id="programName" className="register-inputs" onChange={this.saveInputValue} /> 
                   : <p className="data-p">{this.state.programName}</p> } 
                </div>
                <div className='inputs-div'>
                    <label htmlFor="status" className="login-label">Status</label>
                    {!this.state.saveClicked ? <input type="text" id="status" className="register-inputs" onChange={this.saveInputValue} />
                    : <p className="data-p">{this.state.status}</p> } 
                </div>
                <div className='days'>
                    <h2>Days per week</h2>
                    {!this.state.day1rest ?  <p>
                        <label htmlFor="day1" className="login-label">Day 1</label>
                        <input type="text" id="day1" className="register-inputs" onChange={this.props.saveInputValue} defaultValue={this.state.day1} />
                        <button id='day1rest' onClick={this.restButtonHandler}>Rest Day</button>
                    </p> : <p className="rest-day-p">Day 1 is your rest day!</p>}

                    {!this.state.day2rest ?  <p>
                        <label htmlFor="day2" className="login-label">Day 2</label>
                        <input type="text" id="day2" className="register-inputs" onChange={this.props.saveInputValue} defaultValue={this.state.day2} />
                        <button id='day2rest' onClick={this.restButtonHandler}>Rest Day</button>
                    </p> : <p className="rest-day-p">Day 2 is your rest day!</p>}
                    {!this.state.day3rest ?  <p>
                        <label htmlFor="day3" className="login-label">Day 3</label>
                        <input type="text" id="day3" className="register-inputs" onChange={this.props.saveInputValue} defaultValue={this.state.day3} />
                        <button id='day3rest' onClick={this.restButtonHandler}>Rest Day</button>
                    </p> : <p className="rest-day-p">Day 3 is your rest day!</p>}
                    {!this.state.day4rest ?  <p>
                        <label htmlFor="day4" className="login-label">Day 4</label>
                        <input type="text" id="day4" className="register-inputs" onChange={this.props.saveInputValue} defaultValue={this.state.day4} />
                        <button id='day4rest' onClick={this.restButtonHandler}>Rest Day</button>
                    </p> : <p className="rest-day-p">Day 4 is your rest day!</p>}
                    {!this.state.day5rest ?  <p>
                        <label htmlFor="day5" className="login-label">Day 5</label>
                        <input type="text" id="day5" className="register-inputs" onChange={this.props.saveInputValue} defaultValue={this.state.day5} />
                        <button id='day5rest' onClick={this.restButtonHandler}>Rest Day</button>
                    </p> : <p className="rest-day-p">Day 5 is your rest day!</p>}
                    {!this.state.day6rest ?  <p>
                        <label htmlFor="day6" className="login-label">Day 6</label>
                        <input type="text" id="day6" className="register-inputs" onChange={this.props.saveInputValue} defaultValue={this.state.day6}/>
                        <button id='day6rest' onClick={this.restButtonHandler}>Rest Day</button>
                    </p> : <p className="rest-day-p">Day 6 is your rest day!</p>}
                    {!this.state.day7rest ?  <p>
                        <label htmlFor="day7" className="login-label">Day 7</label>
                        <input type="text" id="day7" className="register-inputs" onChange={this.props.saveInputValue} defaultValue={this.state.day7} />
                        <button id='day7rest' onClick={this.restButtonHandler}>Rest Day</button>
                    </p> : <p className="rest-day-p">Day 7 is your rest day!</p>}
                </div>

                <div className="save-btn-div">
                    {!this.state.saveClicked ? 
                    <button className="save-btn" onClick={this.saveDataHandler}>Save</button> : 
                    <button className="save-btn" onClick={this.editDataHandler}>Edit</button> }
                </div>
            </div>
        )
    }
}

export default WorkoutPlan