import React from 'react'
import './WorkoutPlan.css'
import Title from '../Title/Title'
import { openWorkoutPlan } from '../../redux/actions/userActions'
import Input from '../RegInput/RegInput'
import DaysInput from './WPlanDays/WPlanDays'
import Button from '../Button/Button'
import { connect } from 'react-redux'
import axios from 'axios'
class WorkoutPlan extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            type: '',
            goal: '',
            intensity: '',
            days: {
                day1: '',
                day2: '',
                day3: '',
                day4: '',
                day5: '',
                day6: '',
                day7: ''
            }

        }
    }

    saveInputValue = (event) => {
        this.setState({ ...this.state, [event.target.id]: event.target.value })
    }
    saveDaysValue = (event) => {
        this.setState({ ...this.state, days: { ...this.state.days, [event.target.id]: event.target.value } })
    }

    restButtonHandler = (event) => {
        this.setState({ ...this.state, days: { ...this.state.days, [event.target.id]: "true" } })
    }
    undoButtonHandler = (event) => {
        this.setState({ ...this.state, days: { ...this.state.days, [event.target.id]: "" } })
    }

    saveDataHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8081/app/v1/plans/workoutplans', {
            type: this.state.type,
            goal: this.state.goal,
            intensity: this.state.intensity,
            days: this.state.days
        }, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            }
        })
            .then(res => {
                this.props.openWorkoutPlan(false)
            })
            .catch(err => {
                this.props.openWorkoutPlan(true)
            })
    }

    closeAddWorkoutPlan = () => {
        this.props.openWorkoutPlan(false)
    }

    render() {
        var ids = ['type', 'intensity', 'goal']
        var inputs = ids.map((id, i) => {
            return (
                <Input key={id + i}
                    id={id}
                    saveInputValue={this.saveInputValue}
                    name={this.state[i]}
                    class="register-inputs"
                />
            )
        })

        return (
            <main className="wp-main">
                <div className="workout-plan">
                    <div className="wp-inputs-div">
                        <Title title="workout plan" />
                        {inputs}
                        <DaysInput saveInputValue={this.saveDaysValue}
                            days={this.state.days}
                            restButtonHandler={this.restButtonHandler}
                            undoButtonHandler={this.undoButtonHandler}
                        />
                    </div>
                    <div className="wp-btns">
                        <Button click={this.closeAddWorkoutPlan}
                            label="close"
                            className="close-btn"
                        />
                        <Button click={this.saveDataHandler}
                            label="save"
                            className="login-btn"
                        />
                    </div>
                </div>
            </main>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        openWorkoutPlan: (bool) => dispatch(openWorkoutPlan(bool))
    }
}

export default connect(null, mapDispatchToProps)(WorkoutPlan)
