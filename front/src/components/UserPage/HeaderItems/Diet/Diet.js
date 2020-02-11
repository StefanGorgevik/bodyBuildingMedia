import React from 'react'
import { connect } from 'react-redux'
import './Diet.css'
import InfoDiv from '../InfoDiv/InfoDiv'

const Diet = (props) => {
    const m = props.userSelected.meals;
    const s = props.userSelected.snacks;

    const meals = Object.keys(m).map((meal, i) => {
        return ( <InfoDiv key={meal + (i + 1)} labelNameId={"meal" + (i+1)} labelText={"Meal " + (i + 1)} info={m[meal]} />)
    })

    const snacks = Object.keys(s).map((snack, i) => {
        return ( <InfoDiv key={snack + (i + 1)} labelNameId={"snack" + (i+1)} labelText={"Snack " + (i + 1)} info={s[snack]} />)
    })
    return (
        <div className="diet-user">
             <InfoDiv labelNameId="diet-goals" labelText="First Name" info={props.userSelected.dietGoals} />
            <InfoDiv labelNameId="last-name-p" labelText="Intensity" info={props.userSelected.dietIntensity} />
            {meals}
            {snacks}
            
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        userSelected: state.userSelected.diet
    }
}

export default connect(mapStateToProps)(Diet)