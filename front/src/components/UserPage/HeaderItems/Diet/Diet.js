import React from 'react'
import { connect } from 'react-redux'
import './Diet.css'
import InfoDiv from '../InfoDiv/InfoDiv'

const Diet = (props) => {
    if (props.selectedDiet[0]) {
        console.log(props.selectedDiet)
        const m = Object.keys(props.selectedDiet[0].meals)
        var meals = m.map((meal, i) => {
            return (<InfoDiv key={meal + (i + 1)} labelNameId={"meal" + (i + 1)} labelText={"Meal " + (i + 1)}
            info={props.selectedDiet[0].meals[meal]} />)
        })
    }
    return (
        <div className="diet-user">
            <InfoDiv labelNameId="diet-goals" labelText="Diet Goals" info={props.selectedDiet.dietGoals} />
            <InfoDiv labelNameId="diet-duration" labelText="Diet Duration" info={props.selectedDiet.dietDuration} />
            {meals}
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state.selectedDiet)
    return {
        selectedDiet: state.selectedDiet
    }
}

export default connect(mapStateToProps)(Diet)