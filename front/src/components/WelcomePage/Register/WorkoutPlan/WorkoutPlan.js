import React from 'react'
import './WorkoutPlan.css'
import Title from '../Title/Title'
import { saveWorkoutPlan } from '../../../../redux/actions/userActions'
import store from '../../../../redux/store'
import Input from '../RegInput/RegInput'
import DaysInput from '../WPlanDays/WPlanDays'
class WorkoutPlan extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            type: '',
            goal: '',
            intensity: '',

            days: [
                { day1: '' },
                { day2: '' },
                { day3: '' },
                { day4: '' },
                { day5: '' },
                { day6: '' },
                { day7: '' }
            ]
        }
    }

    saveInputValue = (event) => {
        this.setState({ ...this.state, days: {...this.state.days, [event.target.id]: event.target.value} })
        console.log(this.state.days)
    }

    restButtonHandler = (event) => {
        this.setState({ ...this.state, days: { ...this.state.days, [event.target.id]: "true" } })
    }
    undoButtonHandler = (event) => {
        this.setState({ ...this.state, days: { ...this.state.days, [event.target.id]: "" } })
    }

    saveDataHandler = () => {
        this.setState({ saveClicked: true })
        const newWorkoutPlan = {
            type: this.state.type,
            goal: this.state.goal,
            intensity: this.state.intensity,
            days: [{
                day1: this.state.day1,
                day2: this.state.day2,
                day3: this.state.day3,
                day4: this.state.day4,
                day5: this.state.day5,
                day6: this.state.day6,
                day7: this.state.day7
            }]

        }
        store.dispatch(saveWorkoutPlan(newWorkoutPlan))
    }

    render() {
        var ids = ['type', 'intensity', 'goal']
        var inputs = ids.map((id, i) => {
            return (
                <Input key={id + i}
                    id={id}
                    saveInputValue={this.saveInputValue}
                    name={this.state[i]}
                />
            )
        })

        return (
            <div className="workout-plan">
                <Title title="workout plan" />
                <div className="wp-inputs-div">
                    {inputs}
                    <DaysInput saveInputValue={this.saveInputValue}
                        days={this.state.days}
                        restButtonHandler={this.restButtonHandler}
                        undoButtonHandler={this.undoButtonHandler}
                    />
                </div>
            </div>

        )
    }
}

export default WorkoutPlan
