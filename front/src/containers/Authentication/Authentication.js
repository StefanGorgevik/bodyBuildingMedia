import React from 'react'

import Login from '../../components/WelcomePage/Login/Login'
import Register from '../../components/WelcomePage/Register/Register'

import './Authentication.css'

class Authentication extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loginClicked: false,
            buttonClicked: false,
            registerClicked: false,
            active: null
        }
    }

    loginClickedHandler = () => {
        this.setState({loginClicked: true, registerClicked: false, buttonClicked: true, active: true})
    }

    registerClickedHandler = () => {
        this.setState({loginClicked: false, buttonClicked: true,  registerClicked: true, active: false,})
    }

    render() {
        return (
            <div className="welcome-cover">
            {/* {!this.state.buttonClicked ? <h1> Body Building Media </h1> : null } */}
                <div className={this.state.buttonClicked ? "active-auth-btns" : "auth-btns-main"}>
                    <h1 className="welcome-cover-h1"> Body Building Media </h1>
                    <div className="auth-btns">
                    <button className={this.state.active ? "active auth-btn" : "auth-btn"} onClick={this.loginClickedHandler}>Login</button>
                    <button className={!this.state.active && this.state.registerClicked ? "active auth-btn" : "auth-btn"}  onClick={this.registerClickedHandler}>Register</button>
                    </div>
                </div>
                
                
                {this.state.loginClicked ? <Login/> : null}
                {this.state.registerClicked ? <Register/> : null}
            </div>

        )
    }
}

export default Authentication;