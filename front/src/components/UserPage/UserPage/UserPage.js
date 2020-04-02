import React, { Component } from 'react'

import UserDataHeader from '../../Navigation/UserDataHeader/UserDataHeader'
import PersonalInfo from '../HeaderItems/PersonalInfo/PersonalInfo'
import WorkoutPlan from '../HeaderItems/WorkoutPlan/WorkoutPlan'
import Diet from '../HeaderItems/Diet/Diet'
import './UserPage.css'
import { connect } from 'react-redux'
import store from '../../../redux/store'
import { userClicked } from '../../../redux/actions/userActions'

class UserPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            personalInfoClicked: false,
            workoutPlanClicked: false,
            dietClicked: false
        }
    }

    personalInfoClickedHandler = () => {
        this.setState({
            personalInfoClicked: true,
            workoutPlanClicked: false,
            dietClicked: false
        })
    }

    workoutPlanClickedHandler = () => {
        this.setState({
            personalInfoClicked: false,
            workoutPlanClicked: true,
            dietClicked: false
        })
        store.dispatch(userClicked(true))
    }
    dietClickedHandler = () => {
        this.setState({
            personalInfoClicked: false,
            dietClicked: true,
            workoutPlanClicked: false
        })
        store.dispatch(userClicked(true))
    }

    render() {

        return (
            <div className="user-page">
                <UserDataHeader perInfoClickedHandler={this.personalInfoClickedHandler}
                    workoutPlanClickedHandler={this.workoutPlanClickedHandler}
                    dietClickedHandler={this.dietClickedHandler}
                    personalInfoClicked={this.state.personalInfoClicked}
                    workoutPlanClicked={this.state.workoutPlanClicked}
                    dietClicked={this.state.dietClicked}
                    userClicked={this.props.userClicked}
                />
                <div>
                    {this.props.userClicked ?
                        <>
                            {this.state.personalInfoClicked && this.props.userClicked ? <PersonalInfo /> : null}
                            {this.state.workoutPlanClicked && this.props.userClicked ? <WorkoutPlan /> : null}
                            {this.state.dietClicked && this.props.userClicked ? <Diet /> : null}
                        </> : <h1 className="choose-user-h1">Choose a user!</h1>}
                </div>
            </div>)
    }
}

const mapStateToProps = (state) => {
    return {
        userSelected: state.userSelected,
        userClicked: state.userClicked
    }
}

export default connect(mapStateToProps)(UserPage)