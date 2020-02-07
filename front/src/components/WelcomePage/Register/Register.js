import React from 'react'

import Personalinfo from './Personalinfo/Personalinfo'
import WorkoutPlan from './WorkoutPlan/WorkoutPlan'
import Diet from './Diet/Diet'
import './Register.css'

import { Link } from 'react-router-dom'

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }



    render() {

        return (
            <div className="register">
                <div className="register-components">
                    <Personalinfo />
                    <WorkoutPlan />
                    <Diet />
                </div>

                <div className="register-btn-div">
                    <Link to="/"><button onClick={this.registerClicked} className="register-btn">Register</button></Link>

                </div>
            </div>
        )
    }
}

export default Register;