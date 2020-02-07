import React from 'react'

import './WorkoutPlan.css'
class WorkoutPlan extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            programName: '',
            status: '',
            day1: '',
            day2: '',
            day3: '',
            day4: '',
            day5: '',
            day6: '',
            day7: '',
            day1rest: false,
            day2rest: false,
            day3rest: false,
            day4rest: false,
            day5rest: false,
            day6rest: false,
            day7rest: false
        }
    }

    saveInputValue = (event) => {
        this.setState({ [event.target.id]: event.target.value })
    }

    restButtonHandler = (event) => {
        console.log(event.target.id)
        this.setState({[event.target.id]: true})
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
                <div className='days'>
                    <h2>Days per week</h2>
                    {!this.state.day1rest ?  <p>
                        <label htmlFor="day1" className="login-label">Day 1</label>
                        <input type="text" id="day1" className="login-input" onChange={this.props.saveInputValue} defaultValue={this.state.day1} />
                        <button id='day1rest' onClick={this.restButtonHandler}>Rest Day</button>
                    </p> : <p className="rest-day-p">Day 1 is your rest day!</p>}

                    {!this.state.day2rest ?  <p>
                        <label htmlFor="day2" className="login-label">Day 2</label>
                        <input type="text" id="day2" className="login-input" onChange={this.props.saveInputValue} defaultValue={this.state.day2} />
                        <button id='day2rest' onClick={this.restButtonHandler}>Rest Day</button>
                    </p> : <p className="rest-day-p">Day 2 is your rest day!</p>}
                    {!this.state.day3rest ?  <p>
                        <label htmlFor="day3" className="login-label">Day 3</label>
                        <input type="text" id="day3" className="login-input" onChange={this.props.saveInputValue} defaultValue={this.state.day3} />
                        <button id='day3rest' onClick={this.restButtonHandler}>Rest Day</button>
                    </p> : <p className="rest-day-p">Day 3 is your rest day!</p>}
                    {!this.state.day4rest ?  <p>
                        <label htmlFor="day4" className="login-label">Day 4</label>
                        <input type="text" id="day4" className="login-input" onChange={this.props.saveInputValue} defaultValue={this.state.day4} />
                        <button id='day4rest' onClick={this.restButtonHandler}>Rest Day</button>
                    </p> : <p className="rest-day-p">Day 4 is your rest day!</p>}
                    {!this.state.day5rest ?  <p>
                        <label htmlFor="day5" className="login-label">Day 5</label>
                        <input type="text" id="day5" className="login-input" onChange={this.props.saveInputValue} defaultValue={this.state.day5} />
                        <button id='day5rest' onClick={this.restButtonHandler}>Rest Day</button>
                    </p> : <p className="rest-day-p">Day 5 is your rest day!</p>}
                    {!this.state.day6rest ?  <p>
                        <label htmlFor="day6" className="login-label">Day 6</label>
                        <input type="text" id="day6" className="login-input" onChange={this.props.saveInputValue} defaultValue={this.state.day6}/>
                        <button id='day6rest' onClick={this.restButtonHandler}>Rest Day</button>
                    </p> : <p className="rest-day-p">Day 6 is your rest day!</p>}
                    {!this.state.day7rest ?  <p>
                        <label htmlFor="day7" className="login-label">Day 7</label>
                        <input type="text" id="day7" className="login-input" onChange={this.props.saveInputValue} defaultValue={this.state.day7} />
                        <button id='day7rest' onClick={this.restButtonHandler}>Rest Day</button>
                    </p> : <p className="rest-day-p">Day 7 is your rest day!</p>}
                   
                    
                </div>
            </div>
        )
    }
}

export default WorkoutPlan