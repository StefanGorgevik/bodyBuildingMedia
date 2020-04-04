import React from 'react'

import UserPage from '../../components/UserPage/UserPage/UserPage'
import Users from '../../components/Users/Users'
import UserImages from '../../components/UserImages/UserImages'
import Header from '../../components/Navigation/Header/Header'
import WorkoutPlan from '../../components/WorkoutPlan/WorkoutPlan'
import Diet from '../../components/Diet/Diet'
import './MainLayout.css'
import { connect } from 'react-redux'


class MainLayout extends React.Component {
    

    render() {
    return (
        <div className="main">
        {this.props.workoutPlanOpened ? <WorkoutPlan /> : null}
        {this.props.dietPlanOpened ? <Diet /> : null}
        <Header />
        <div className="main-layout">
            <Users/>
            <UserPage/>
            <UserImages/>
        </div>
        </div>
    )
}
}

function mapStateToProps(state) {
    return {
        isUserLogged: state.userLoggedIn,
        workoutPlanOpened: state.workoutPlanOpened,
        dietPlanOpened: state.dietPlanOpened
    }
}


export default connect(mapStateToProps)(MainLayout)