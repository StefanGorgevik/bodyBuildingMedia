import React from 'react'

import PersonalInfo from './PersonalInfo/PersonalInfo'
import WorkoutPlan from './WorkoutPlan/WorkoutPlan'
import Diet from './Diet/Diet'
import Button from '../Button/Button'
import './Register.css'

// import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { registeredUser, isUserRegistered, savePersonalInfo } from '../../../redux/actions/userActions'

class Register extends React.Component {
    constructor(props) {
        super(props) 
            this.state = {
                info: {}
            }
    }
    registerUser = () => {
        // const newUser = {
        //     personalInfo: this.props.personalInfo,
        //     workoutPlan: this.props.workoutPlan,
        //     diet: this.props.diet
        // }
        this.props.isUserRegistered(true)
    }

   

    // savePersonalInfoHandler = () => {
    //     this.props.savePersonalInfo(newUser)
    // }

    saveInfo = (state) => {
        const newUser = {
            firstName: state.firstName, 
            lastName: state.lastName, 
            birthday: state.birthday, 
            level: state.level, 
            location: state.location, 
            email: state.email, 
            password: state.password
        }
        this.props.savePersonalInfo(newUser)
    //    this.setState({
    //        info: newUser
    //    })
    //    console.log(this.state.info)
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
                    <div className="register-components">
                        <PersonalInfo saveInfo={this.saveInfo} />
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