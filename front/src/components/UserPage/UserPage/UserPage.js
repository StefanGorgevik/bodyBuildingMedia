import React, { Component } from 'react'

import UserDataHeader from '../../Navigation/UserDataHeader/UserDataHeader'
import PersonalInfo from '../HeaderItems/PersonalInfo/PersonalInfo'
import WorkoutPlan from '../HeaderItems/WorkoutPlan/WorkoutPlan'
import Diet from '../HeaderItems/Diet/Diet'
import './UserPage.css'
import { connect } from 'react-redux'
import { personalInfoClick, workoutPlanClick, dietClick } from '../../../redux/actions/userActions'

class UserPage extends Component {
    personalInfoClickedHandler = () => {
        this.props.personalInfoClick(true)
        this.props.workoutPlanClick(false)
        this.props.dietClick(false)
    }

    workoutPlanClickedHandler = () => {
        this.props.personalInfoClick(false)
        this.props.workoutPlanClick(true)
        this.props.dietClick(false)
    }
    dietClickedHandler = () => {
        this.props.personalInfoClick(false)
        this.props.workoutPlanClick(false)
        this.props.dietClick(true)
    }

    render() {
        return (
            <div className="user-page">
                {this.props.userClicked ?
                    <UserDataHeader perInfoClickedHandler={this.personalInfoClickedHandler}
                        workoutPlanClickedHandler={this.workoutPlanClickedHandler}
                        dietClickedHandler={this.dietClickedHandler}
                        personalInfoClicked={this.props.personalInfoClicked}
                        workoutPlanClicked={this.props.workoutPlanClicked}
                        dietClicked={this.props.dietClicked}
                    /> : null}
                <div>
                    {this.props.userClicked ?
                        <>
                            {this.props.personalInfoClicked ? <PersonalInfo /> : null}
                            {this.props.workoutPlanClicked ? <WorkoutPlan /> : null}
                            {this.props.dietClicked ? <Diet /> : null}
                        </> : null}
                </div>
            </div>)
    }
}
{/* <h1 className="choose-user-h1">Choose a user!</h1> */}
function mapStateToProps(state) {
    return {
        userSelected: state.userSelected,
        userClicked: state.userClicked,
        personalInfoClicked: state.personalInfoClicked,
        workoutPlanClicked: state.workoutPlanClicked,
        dietClicked: state.dietClicked
    }
}
function mapDispatchToProps(dispatch) {
    return {
        personalInfoClick: (bool) => dispatch(personalInfoClick(bool)),
        workoutPlanClick: (bool) => dispatch(workoutPlanClick(bool)),
        dietClick: (bool) => dispatch(dietClick(bool))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage)