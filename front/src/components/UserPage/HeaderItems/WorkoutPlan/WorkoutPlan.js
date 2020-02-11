import React from 'react'
import { connect } from 'react-redux'
import './WorkoutPlan.css'
import InfoDiv from '../InfoDiv/InfoDiv'

const WorkoutPlan = (props) => {
    const days = Object.keys(props.userSelected.days[0]).map((day, i) => {
        return (
            <InfoDiv key={i} labelNameId={day} labelText={"Day " + (i + 1)} info={props.userSelected.days[0][day]}  />
            )
    })
    return (
        <div className="workout-plan-user">
            <InfoDiv labelNameId="type-p" labelText="Type" info={props.userSelected.type} />
            <InfoDiv labelNameId="goal-p" labelText="Goal" info={props.userSelected.goal} />
            <InfoDiv labelNameId="location" labelText="Intensity" info={props.userSelected.intensity} />
            {days}
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        userSelected: state.userSelected.workoutPlan
    }
}

export default connect(mapStateToProps)(WorkoutPlan)