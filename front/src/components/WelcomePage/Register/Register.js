import React from 'react'

import PersonalInfo from './PersonalInfo/PersonalInfo'
import WorkoutPlan from './WorkoutPlan/WorkoutPlan'
import Diet from './Diet/Diet'
import Button from '../Button/Button'
import './Register.css'

// import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { registeredUser, isUserRegistered, savePersonalInfo } from '../../../redux/actions/userActions'
import axios from 'axios'

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            info: {},
            error: false
        }
    }
    registerUser = () => {
        var info = this.props.personalInfo
        if (info) {
            if (info.first_name !== '' && info.last_name !== '' && info.email !== '' && info.password !== '' &&
                info.level !== '' && info.location !== '' && info.birthday !== '') {
                axios.post('http://localhost:8080/app/v1/register', this.props.personalInfo)
                    .then(res => {
                        this.props.isUserRegistered(true)
                        this.setState({ error: false })
                    })
                    .catch(err => 
                        this.setState({ error: true }))
            } else {
                this.setState({ error: true })
                this.props.isUserRegistered(true)
            }
        }
    }

    // redirectToMain = () => {
    //     if (this.props.userRegistered) {
    //         return <Redirect to='/' />
    //     }
    // }

    render() {
        return (
            <div className="main-register">
                {/* {this.redirectToMain()} */}
                <div className="register">
                {this.state.error ? <p>Please fill every field!</p> : null}
                    <div className="register-components">
                        <PersonalInfo />
                        <WorkoutPlan />
                        <Diet />
                    </div>
                    <div className="reg-btns-div">
                        <Button click={this.props.closePopUp}
                            label="close"
                            className="close-btn"
                        />
                        <Button click={this.registerUser}
                            label="register"
                            className="login-btn"
                        />
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        isUserRegistered: (bool) => dispatch(isUserRegistered(bool)),
        registeredUser: (user) => dispatch(registeredUser(user)),
        savePersonalInfo: (info) => dispatch(savePersonalInfo(info))
    }
}
const mapStateToProps = (state) => {
    return {
        personalInfo: state.personalInfo,
        workoutPlan: state.workoutPlan,
        diet: state.diet,
        saveClicked: state.saveClicked,
        userRegistered: state.userRegistered
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);