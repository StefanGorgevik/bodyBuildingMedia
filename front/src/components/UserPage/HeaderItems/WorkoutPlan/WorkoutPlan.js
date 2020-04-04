import React from 'react'
import { connect } from 'react-redux'
import './WorkoutPlan.css'
import InfoDiv from '../InfoDiv/InfoDiv'

const WorkoutPlan = (props) => {
    if (props.workoutPlan.days) {
        var d = Object.keys(props.workoutPlan.days)
        var days = d.map((day, i) => {
            return (
                <InfoDiv key={i} labelNameId={day} labelText={"Day " + (i + 1)} info={props.workoutPlan.days[day]} />
            )
        })
    }
    return (
        <div className="workout-plan-user">
            <InfoDiv labelNameId="type-p" labelText="Type" info={props.workoutPlan.type} />
            <InfoDiv labelNameId="goal-p" labelText="Goal" info={props.workoutPlan.goal} />
            <InfoDiv labelNameId="location" labelText="Intensity" info={props.workoutPlan.intensity} />
            {days}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        workoutPlan: state.workoutPlan
    }
}

export default connect(mapStateToProps)(WorkoutPlan)