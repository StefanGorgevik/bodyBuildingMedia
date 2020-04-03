import React from 'react'
import './Login.css'
import Input from '../Register/RegInput/RegInput'
import Button from '../Button/Button'
import {connect} from 'react-redux'
import {isUserLogged, loggedUser} from '../../../redux/actions/userActions'
import { Redirect } from 'react-router-dom'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    saveInputValue = (event) => {
        this.setState({ [event.target.id]: event.target.value })
    }

    loginClickedHandler = (e) => {
        e.preventDefault()
        if(this.state.email === '' || this.state.password === '') {
            alert("Please fill up the fields correctly!")
            this.props.isUserLogged(false)
        } else {
            var user = {
                email: this.state.email,
                password: this.state.password
            }
            this.props.loggedUser(user)
            this.props.isUserLogged(true)
        }
    }
    redirectToMain = () => {
        if (this.props.userLoggedIn) {
            return <Redirect to='/' />
        }
    }

    render() {
        var ids = ["email", "password"]
        var inputs = ids.map((id, i) => {
            return (
                <Input key={id + i}
                    id={id}
                    saveInputValue={this.saveInputValue}
                    name={this.state[i]}
                    className="l"
                />
            )
        })
        return (
            <div className='login'>
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
        loggedUser: (user) => dispatch(loggedUser(user)),
        isUserLogged: (bool) => dispatch(isUserLogged(bool))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);