import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import {isUserLogged, openWorkoutPlan, openDietPlan} from '../../../redux/actions/userActions'
import { connect } from 'react-redux'

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
        return (
            <nav className="navigation">
                    <h2 className="title-h2">Body Building Media</h2>
                <div className="right-side">
                    <ul>
                        <li>{localStorage.getItem('name')}</li>
                        <li className="clickable-lis">Edit Info</li>
                        <li onClick={this.addWorkoutPlanClickedHandler} className="clickable-lis">Add workout</li>
                        <li onClick={this.addDietClickedHandler} className="clickable-lis">Add diet</li>
                        <Link to="/welcome"><li className="clickable-lis" onClick={this.signOut}>Sign Out</li></Link>
                    </ul>
                </div>
            </nav>
        )
    }
}

function mapStateToProps(state) {
    return {
        isUserLogged: state.userLoggedIn
    }
}

function mapDispatchToProps(dispatch) {
    return {
        isUserLogged: (bool) => dispatch(isUserLogged(bool)),
        openWorkoutPlan: (bool) => dispatch(openWorkoutPlan(bool)),
        openDietPlan: (bool) => dispatch(openDietPlan(bool))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)