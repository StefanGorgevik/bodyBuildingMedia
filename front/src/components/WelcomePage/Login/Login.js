import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import Input from '../Register/RegInput/RegInput'
import Button from '../Button/Button'

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

    render() {
        var ids = ["email", "password"]
        var inputs = ids.map((id, i) => {
            return (
                <Input id={id}
                    saveInputValue={this.saveInputValue}
                    name={this.state[i]}
                />
            )
        })
        return (
            <div className='login'>
                <form>
                    {inputs}
                    <Link to="/">  <Button click={this.loginClickedHandler}
                        active={this.state.active}
                        label="login"
                        className="login-btn"
                    /></Link>
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

export default Login;