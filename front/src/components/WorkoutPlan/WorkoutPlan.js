import React from 'react'
import './WorkoutPlan.css'
import Title from '../Title/Title'
import { openWorkoutPlan, selectedWorkoutPlan } from '../../redux/actions/userActions'
import Input from '../RegInput/RegInput'
import DaysInput from './WPlanDays/WPlanDays'
import Button from '../Button/Button'
import { connect } from 'react-redux'
import axios from 'axios'
import Error from '../WelcomePage/Error/Error'
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
            },
            error: false
        }
    }

    componentDidMount() {
        var isCreated = localStorage.getItem('isWPCreated') === 'true'
        if (isCreated) {
            var userID = localStorage.getItem('user-id')
            axios.get(`http://localhost:8081/app/v1/plans/workoutplans/${userID}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('jwt')}`
                }
            })
                .then(res => {
                    var plan = res.data
                    this.props.selectedWorkoutPlan(res.data)
                    this.setState({
                        type: plan.type,
                        goal: plan.goal,
                        intensity: plan.intensity,
                        days: plan.days
                    })
                })
                .catch(err => {
                    console.log(err)
                })
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
        var plan = this.state
        console.log(plan)
        if (plan.type !== '' && plan.goal !== '' && plan.intensity !== '' && Object.values(plan.days).length !== 0) {
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
                    localStorage.setItem('isWPCreated', 'true')
                    this.setState({ error: false })
                    this.props.openWorkoutPlan(false)
                    window.location.reload()
                })
                .catch(err => {
                    this.setState({ error: true })
                    this.props.openWorkoutPlan(true)
                })
        } else {
            this.setState({ error: true })
        }
    }

    editWPHandler = () => {
        var wpID = this.props.workoutPlan._id
        axios.put(`http://localhost:8081/app/v1/plans/workoutplans/${wpID}`, {
            type: this.state.type,
            goal: this.state.goal,
            intensity: this.state.intensity,
            days: this.state.days
        },
            {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('jwt')}`
                }
            })
            .then(res => {
                console.log(res)
                this.props.openWorkoutPlan(false)
                window.location.reload()
            })
            .catch(err => {
                console.log(err)
                this.props.openWorkoutPlan(true)
            })
    }

    closeAddWorkoutPlan = () => {
        this.props.openWorkoutPlan(false)
    }

    closeErrorAlert = () => {
        this.setState({
            error: false
        })
    }

    render() {
        var isWPCreated = localStorage.getItem('isWPCreated') === "true"
        var ids = ['type', 'intensity', 'goal']
        var inputs = ids.map((id, i) => {
            return (
                <Input key={id + i}
                    id={id}
                    saveInputValue={this.saveInputValue}
                    name={this.state[i]}
                    class="register-inputs"
                    value={this.state[id]}
                />
            )
        })

        return (
            <main className="wp-main">
                {this.state.error ? <Error closeErrorAlert={this.closeErrorAlert} /> : null}
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
                        <Button click={!isWPCreated ? this.saveDataHandler : this.editWPHandler}
                            label={isWPCreated ? "edit" : "save"}
                            className="login-btn"
                        />
                    </div>
                </div>
            </main>
        )
    }
}

function mapStateToProps(state) {
    return {
        workoutPlan: state.workoutPlan
    }
}

function mapDispatchToProps(dispatch) {
    return {
        openWorkoutPlan: (bool) => dispatch(openWorkoutPlan(bool)),
        selectedWorkoutPlan: (data) => dispatch(selectedWorkoutPlan(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutPlan)
