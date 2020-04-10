import React from 'react'
import { connect } from 'react-redux'
import './Diet.css'
import InfoDiv from '../InfoDiv/InfoDiv'

const Diet = (props) => {
    if (props.selectedDiet[0]) {
        const m = Object.keys(props.selectedDiet[0].meals)
        var meals = m.map((meal, i) => {
            return (<InfoDiv key={meal + (i + 1)} labelNameId={"meal" + (i + 1)} labelText={"Meal " + (i + 1)}
                info={props.selectedDiet[0].meals[meal]} />)
        })
    }
    return (
        <div className="diet-user">
            {props.selectedDiet[0] ?
                <>
                    <InfoDiv labelNameId="dietGoals" labelText="Diet Goals" info={props.selectedDiet[0].dietGoals !== '' ? props.selectedDiet[0].dietGoals : ''} />
                    <InfoDiv labelNameId="dietDuration" labelText="Diet Duration" info={props.selectedDiet[0].dietDuration} />
                    {meals}
                </> : <p className="no-info-p">This user doesn't have an active diet!</p>}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        selectedDiet: state.selectedDiet
    }
}

export default connect(mapStateToProps)(Diet)