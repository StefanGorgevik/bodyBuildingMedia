import React from 'react'

import Personalinfo from './Personalinfo/Personalinfo'
import WorkoutPlan from './WorkoutPlan/WorkoutPlan'
import Diet from './Diet/Diet'
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
    // id: this.props.personalInfos.id,
    // fullname: this.props.personalInfos.firstName + ' ' + this.props.personalInfo.lastName,
    // birthday: this.props.personalInfos.birthday,
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
            <div className="register">
                <div className="register-components">
                    <Personalinfo />
                    <WorkoutPlan />
                    <Diet />
                </div>
                {this.props.saveClicked === 3?
                    <div className="register-btn-div">
                        <Link to="/"><button onClick={this.registerUser} className="form-submit-btn ">Register</button></Link>
                    </div>
                    : null}
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