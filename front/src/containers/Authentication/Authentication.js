import React from 'react'

import Login from '../../components/WelcomePage/Login/Login'
import Register from '../../components/WelcomePage/Register/Register'
import Button from '../../components/Button/Button'
import './Authentication.css'

class Authentication extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loginClicked: false,
            registerClicked: false
        }
    }

    loginClicked = () => {
        this.setState({ loginClicked: true, registerClicked: false })
    }

    registerClickedHandler = () => {
        this.setState({ loginClicked: false, registerClicked: true })
    }

    closePopUp = () => {
        this.setState({ loginClicked: false, registerClicked: false })
    }

    componentWillUnmount() {
        this.setState({ loginClicked: false, registerClicked: false })

    }

    render() {
        return (
            <div className="welcome-cover">
                <div className="auth-content">
                    <h1 className="welcome-cover-h1"> Body Building Media </h1>
                    <div className="auth-btns">
                        <Button click={this.loginClicked}
                            label="login"
                            className="welcome-btn" />
                        <Button click={this.registerClickedHandler}
                            label="register"
                            className="welcome-btn" />
                    </div>
                </div>

                {this.state.loginClicked ? <Login closePopUp={this.closePopUp} /> : null}
                {this.state.registerClicked ? <Register closePopUp={this.closePopUp}/> : null}
            </div>

        )
    }
}

export default Authentication;