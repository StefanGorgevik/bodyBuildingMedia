import React from 'react'

import UserPage from '../../components/UserPage/UserPage/UserPage'
import Users from '../../components/Users/Users'
import UserImages from '../../components/UserImages/UserImages'
import Header from '../../components/Navigation/Header/Header'
import WorkoutPlan from '../../components/WorkoutPlan/WorkoutPlan'
import EditInfo from '../../components/EditInfo/EditInfo'
import Diet from '../../components/Diet/Diet'
import ImageUpload from '../../components/ImageUpload/ImageUpload'
import Alert from '../../components/Alert/Alert'
import './MainLayout.css'
import { connect } from 'react-redux'
import {openSignOut, isUserLogged} from '../../redux/actions/userActions'
import { Redirect } from 'react-router-dom'

class MainLayout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            signOutAccepted: false
        }
    }
    rejectSignOut = () => {
        this.props.openSignOut(false)
    }

    acceptSignOut = () => {
        this.setState({
            signOutAccepted: true
        })
        this.props.openSignOut(false)
            localStorage.clear()
            this.props.isUserLogged(false)
    }

    redirectToMain = () => {
        if (this.state.signOutAccepted) {
            return <Redirect to='/' />
        }
    }

    render() {
        return (
            <div className="main">
                {this.redirectToMain()}
                {this.props.editInfoOpened ? <EditInfo /> : null}
                {this.props.workoutPlanOpened ? <WorkoutPlan /> : null}
                {this.props.dietPlanOpened ? <Diet /> : null}
                {this.props.uploadPhotoOpened ? <ImageUpload /> : null}
                {this.props.signOutOpened ?
                    <Alert closeAlert={this.rejectSignOut}
                        title="You are signing out!"
                        content='Are you sure?'
                        type="alert"
                        acceptSignOut={this.acceptSignOut}
                    /> : null}
                <Header />
                <div className="main-layout">
                    <Users />
                    <UserPage />
                    <UserImages />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        isUserLogged: state.userLoggedIn,
        workoutPlanOpened: state.workoutPlanOpened,
        dietPlanOpened: state.dietPlanOpened,
        editInfoOpened: state.editInfoOpened,
        uploadPhotoOpened: state.uploadPhotoOpened,
        signOutOpened: state.signOutOpened
    }
}
function mapDispatchToProps(dispatch) {
    return {
        isUserLogged: (bool) => dispatch(isUserLogged(bool)),
        openSignOut: (bool) => dispatch(openSignOut(bool))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MainLayout)