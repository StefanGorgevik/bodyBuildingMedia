import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { isUserLogged, openWorkoutPlan, openDietPlan, selectedDiet, selectedWorkoutPlan } from '../../../redux/actions/userActions'
import { connect } from 'react-redux'
import axios from 'axios'

class Header extends React.Component {
    addWorkoutPlanClickedHandler = () => {
        this.props.openWorkoutPlan(true)
        this.props.openDietPlan(false)
    }

    addDietClickedHandler = () => {
        this.props.openWorkoutPlan(false)
        this.props.openDietPlan(true)
    }

    signOut = () => {
        localStorage.clear()
        this.props.isUserLogged(false)
    }

    render() {
        var isDietCreated=localStorage.getItem('isDietCreated') === 'true'
        var isWPCreated=localStorage.getItem('isWPCreated') === 'true'
        return (
            <nav className="navigation">
                <h2 className="title-h2">Body Building Media</h2>
                <div className="right-side">
                    <ul>
                        <li>{localStorage.getItem('name')}</li>
                        <li className="clickable-lis">Edit Info</li>
                        <li onClick={this.addWorkoutPlanClickedHandler} 
                        className="clickable-lis">{isWPCreated ?
                            "Edit Workout" : "Add workout"}</li>
                        <li onClick={this.addDietClickedHandler} className="clickable-lis">
                        {isDietCreated  ? "Edit diet" : "Add diet"}</li>
                        <Link to="/"><li className="clickable-lis" onClick={this.signOut}>Sign Out</li></Link>
                    </ul>
                </div>
            </nav>
        )
    }
}

function mapStateToProps(state) {
    return {
        isUserLogged: state.userLoggedIn,
        loggedUser: state.loggedUser
    }
}

function mapDispatchToProps(dispatch) {
    return {
        isUserLogged: (bool) => dispatch(isUserLogged(bool)),
        openWorkoutPlan: (bool) => dispatch(openWorkoutPlan(bool)),
        openDietPlan: (bool) => dispatch(openDietPlan(bool)),
        selectedDiet: (data) => dispatch(selectedDiet(data)),
        selectedWorkoutPlan: (data) => dispatch(selectedWorkoutPlan(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)