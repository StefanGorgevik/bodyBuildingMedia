import React from 'react'

import Personalinfo from './Personalinfo/Personalinfo'
import WorkoutPlan from './WorkoutPlan/WorkoutPlan'
import Diet from './Diet/Diet'
import Button from '../Button/Button'
import './Register.css'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import store from '../../../redux/store'
import { saveUser, registerClicked } from '../../../redux/actions/userActions'

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    registerUser = () => {
        console.log(this.props)
        const newUser = {
            personalInfo: this.props.personalInfo,
            workoutPlan: this.props.workoutPlan,
            diet: this.props.diet
        }
        store.dispatch(saveUser(newUser))
        store.dispatch(registerClicked())
        localStorage.setItem("name", this.props.personalInfo.firstName + ' ' + this.props.personalInfo.lastName)
    }

    render() {
        return (
            <div className="main-register">
                <div className="register">
                    <div className="register-components">
                        <Personalinfo />
                        <WorkoutPlan />
                        <Diet />
                    </div>
                    <div className="reg-btns-div">
                        <Button click={this.props.closePopUp}
                            active={this.state.active}
                            label="close"
                            className="close-btn"
                        />
                        <Link to="/">
                            <Button click={this.registerUser}
                                active={this.state.active}
                                label="register"
                                className="login-btn"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        personalInfo: state.personalInfo,
        workoutPlan: state.workoutPlan,
        diet: state.diet,
        saveClicked: state.saveClicked
    }
}

export default connect(mapStateToProps)(Register);