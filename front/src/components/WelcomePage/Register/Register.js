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
            count: 1
        }
    }

    nextClicked = () => {
        this.setState({ count: this.state.count + 1 })
    }

    backClicked = () => {
        if (this.state.count > 1) {
            this.setState({ count: this.state.count - 1 })
        }
    }

    registerClicked = () => {
        this.setState({ count: 0 })
    }

    render() {

        return (
            <div className="register">
                {this.state.count === 1 ? <Personalinfo /> : null}
                {this.state.count === 2 ? <WorkoutPlan /> : null}
                {this.state.count === 3 ? <Diet /> : null}
                <div>
                    {this.state.count === 3 ? <Link to="/"><button onClick={this.registerClicked} className="register-btn">Register</button></Link> : <button onClick={this.nextClicked} className="register-btn">Next</button>}
                    <button onClick={this.backClicked} className="register-btn">Back</button>
                </div>
            </div>
        )
    }
}

export default Register;