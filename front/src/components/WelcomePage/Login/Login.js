import React from 'react'
import './Login.css'
import Input from '../../RegInput/RegInput'
import Button from '../../Button/Button'
import Error from '../Error/Error'
import { connect } from 'react-redux'
import { isUserLogged, loggedUser } from '../../../redux/actions/userActions'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            error: false
        }
    }

    saveInputValue = (event) => {
        this.setState({ [event.target.id]: event.target.value })
    }

    loginClickedHandler = (e) => {
        e.preventDefault()
        if (this.state.email === '' || this.state.password === '') {
            this.setState({ error: true })
            this.props.isUserLogged(false)
        } else {
            axios.post('http://localhost:8080/app/v1/auth/login', {
                email: this.state.email,
                password: this.state.password
            })
                .then(res => {
                    localStorage.setItem('jwt', res.data.jwt)
                    localStorage.setItem('name', res.data.full_name)
                    localStorage.setItem('user-id', res.data.id)
                    localStorage.setItem('isWPCreated', res.data.isWorkoutPlanCreated)
                    localStorage.setItem('isDietCreated', res.data.isDietCreated)
                    localStorage.setItem('isPhotoUploaded', res.data.isPhotoUploaded)
                    this.setState({ error: false })
                    this.props.isUserLogged(true)
                    this.props.loggedUser(res.data)
                })
                .catch(err => {
                    this.props.isUserLogged(false)
                    this.setState({ error: true })
                })
        }
    }
    redirectToMain = () => {
        if (this.props.userLoggedIn) {
            return <Redirect to='/main' />
        }
    }

    closeErrorAlert = () => {
        this.setState({
            error: false
        })
    }

    render() {
        var ids = ["email", "password"]
        var inputs = ids.map((id, i) => {
            return (
                <Input key={id + i}
                    id={id}
                    saveInputValue={this.saveInputValue}
                    name={this.state[i]}
                    class='login-inputs'
                />
            )
        })
        return (
            <div className='login'>
                    {this.state.error ? <Error closeErrorAlert={this.closeErrorAlert}/> : null}

                {this.redirectToMain()}
                <form onSubmit={this.loginClickedHandler}>
                    {inputs}
                    <Button click={this.loginClickedHandler}
                        active={this.state.active}
                        label="login"
                        className="login-btn"
                    />
                    <Button click={this.props.closePopUp}
                        active={this.state.active}
                        label="close"
                        className="close-btn"
                    />
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userLoggedIn: state.userLoggedIn
    }
}

function mapDispatchToProps(dispatch) {
    return {
        isUserLogged: (bool) => dispatch(isUserLogged(bool)),
        loggedUser: (data) => dispatch(loggedUser(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);