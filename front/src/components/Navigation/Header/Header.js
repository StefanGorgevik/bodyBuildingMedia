import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { isUserLogged, openWorkoutPlan, openDietPlan, selectedDiet } from '../../../redux/actions/userActions'
import { connect } from 'react-redux'
import axios from 'axios'

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isWPCreated: localStorage.getItem('isWPCreated'),
            isDietCreated: localStorage.getItem('isDietCreated')
        }
    }

    componentDidMount() {
        this.setState({isDietCreated: localStorage.getItem('isDietCreated'), isWPCreated: localStorage.getItem('isWPCreated')})
    }

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

    getDiet = () => {
        var userID = localStorage.getItem('user-id')
        axios.get(`http://localhost:8081/app/v1/plans/diets/${userID}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            }
        })
        .then(res => {
            this.props.selectedDiet(res.data[0])
        })
        .catch(err => {
            console.log(err)
        })
        this.props.openWorkoutPlan(false)
        this.props.openDietPlan(true)
    }

    render() {
        
        return (
            <nav className="navigation">
                <h2 className="title-h2">Body Building Media</h2>
                <div className="right-side">
                    <ul>
                        <li>{localStorage.getItem('name')}</li>
                        <li className="clickable-lis">Edit Info</li>
                        <li onClick={this.addWorkoutPlanClickedHandler} className="clickable-lis">{this.state.isWPCreated  === "true" ?
                            "Edit Workout" : "Add workout"}</li>
                        <li onClick={this.state.isDietCreated === "true" ?
                         this.getDiet : this.addDietClickedHandler} className="clickable-lis">
                        {this.state.isDietCreated  === "true" ? 
                        "Edit diet" : "Add diet"}</li>
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
        selectedDiet: (data) => dispatch(selectedDiet(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)