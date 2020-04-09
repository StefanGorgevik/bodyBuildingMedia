import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { isUserLogged, openWorkoutPlan, openDietPlan, selectedDiet, selectedWorkoutPlan, openEditInfo, openUploadPhoto } from '../../../redux/actions/userActions'
import { connect } from 'react-redux'

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            liHovered: false
        }
    }
    addWorkoutPlanClickedHandler = () => {
        this.props.openWorkoutPlan(true)
        this.props.openDietPlan(false)
        this.props.openEditInfo(false)
    }

    addDietClickedHandler = () => {
        this.props.openWorkoutPlan(false)
        this.props.openDietPlan(true)
        this.props.openEditInfo(false)
    }
    openInfoClickedHandler = () => {
        this.props.openEditInfo(true)
        this.props.openWorkoutPlan(false)
        this.props.openDietPlan(false)
    }
    openUploadPhotoClickedHandler = () => {
        this.props.openUploadPhoto(true)
    }

    signOut = () => {
        localStorage.clear()
        this.props.isUserLogged(false)
    }

    hoverHandler = () => {
        this.setState({ liHovered: true })
    }

    hoverLeaveHandler = () => {
        this.setState({ liHovered: false })
    }

    render() {
        var isDietCreated = localStorage.getItem('isDietCreated') === 'true'
        var isWPCreated = localStorage.getItem('isWPCreated') === 'true'
        return (
            <nav className="navigation" onMouseLeave={this.hoverLeaveHandler}>
                <h2 className="title-h2">Body Building Media</h2>
                <div className="right-side">
                    <ul>
                        {this.state.liHovered ?
                            <>
                                <li onClick={this.openInfoClickedHandler} className="clickable-lis popup-lis">Edit Info</li>
                                <li onClick={this.addWorkoutPlanClickedHandler}
                                    className="clickable-lis popup-lis">{isWPCreated ?
                                        "Edit Workout" : "Add workout"}</li>
                                <li onClick={this.addDietClickedHandler} className="clickable-lis popup-lis">
                                    {isDietCreated ? "Edit diet" : "Add diet"}</li>
                                <li onClick={this.openUploadPhotoClickedHandler} className="clickable-lis popup-lis">
                                    Upload Photo</li>
                            </> : null}
                        <li className="clickable-lis" onMouseEnter={this.hoverHandler} ><i className="fas fa-cogs"></i></li>
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
        openEditInfo: (bool) => dispatch(openEditInfo(bool)),
        openUploadPhoto: (bool) => dispatch(openUploadPhoto(bool)),
        selectedDiet: (data) => dispatch(selectedDiet(data)),
        selectedWorkoutPlan: (data) => dispatch(selectedWorkoutPlan(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)