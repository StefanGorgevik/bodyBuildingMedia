import React from 'react'

import './Login.css'

class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    saveInputValue = (event) => {
        this.setState({[event.target.id]: event.target.value})
    }

    render() {
        return (
            <div className='login'>
                <form>
                    <p>
                        <label htmlFor="email" className="login-label">Email</label>
                        <input type="email" id="email" className="login-input" onChange={this.saveInputValue} />
                    </p>
                    <p>
                        <label htmlFor="password" className="login-label">Password</label>
                        <input type="password" id="password" className="login-input" onChange={this.saveInputValue} />
                    </p>
                    <button className="login-btn">Login</button>
                </form>
            </div>
        )
    }
}

export default Login;