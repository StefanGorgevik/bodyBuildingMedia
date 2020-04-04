import React from 'react'

import PersonalInfo from './PersonalInfo/PersonalInfo'
import Button from '../../Button/Button'
import Error from '../Error/Error'
import './Register.css'

import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { registeredUser, isUserRegistered, savePersonalInfo, isUserLogged } from '../../../redux/actions/userActions'
import axios from 'axios'

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            error: false,
            user: {
                firstName: '',
                lastName: '',
                birthday: '',
                level: '',
                location: '',
                email: '',
                password: ''
            }
        }
    }

    saveInputValue = (event) => {
        this.setState({ ...this.state, user: { ...this.state.user, [event.target.id]: event.target.value } })
        console.log(this.state)
    }

    registerUser = () => {
        var info = this.state.user
            if (info.firstName === '' && info.lastName === '' && info.email === '' && info.password === '' &&
                info.level === '' && info.location === '' && info.birthday === '') {
                this.setState({ error: true })
                this.props.isUserRegistered(false)
            } else {
                axios.post('http://localhost:8080/app/v1/register', {
                    first_name: info.firstName,
                    last_name: info.lastName,
                    birthday: info.birthday,
                    level: info.level,
                    location: info.location,
                    email: info.email,
                    password: info.password
                })
                    .then(res => {
                        this.props.isUserRegistered(true)
                        this.setState({ error: false })
                        axios.post('http://localhost:8080/app/v1/login', {
                            email: info.email,
                            password: info.password
                        })
                            .then(res => {
                                localStorage.setItem('jwt', res.data.jwt)
                                localStorage.setItem('name', res.data.full_name)
                                this.setState({ error: false })
                                this.props.isUserLogged(true)
                            })
                            .catch(err => {
                                this.props.isUserLogged(false)
                                this.setState({ error: true })
                            })
                    })
                    .catch(err =>
                        this.setState({ error: true }))
            }
    }

    closeErrorAlert = () => {
        this.setState({
            error: false
        })
    }

    redirectToMain = () => {
        if (this.props.userRegistered && this.props.userLoggedIn) {
            return <Redirect to='/' />
        }
    }

    render() {
        return (
            <div className="main-register">
                {this.redirectToMain()}
                <div className="register">
                    {this.state.error ? <Error closeErrorAlert={this.closeErrorAlert} /> : null}
                    <PersonalInfo saveInputValue={this.saveInputValue}
                        user={this.state.user} />
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
        savePersonalInfo: (info) => dispatch(savePersonalInfo(info)),
        isUserLogged: (bool) => dispatch(isUserLogged(bool))
    }
}
const mapStateToProps = (state) => {
    return {
        personalInfo: state.personalInfo,
        workoutPlan: state.workoutPlan,
        diet: state.diet,
        saveClicked: state.saveClicked,
        userRegistered: state.userRegistered,
        userLoggedIn: state.userLoggedIn
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);