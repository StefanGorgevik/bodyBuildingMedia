import React from 'react'

import './PersonalInfo.css'
import {savePersonalInfo} from '../../../../redux/actions/userActions'
import store from '../../../../redux/store'

class Personalinfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            birthday: '',
            level: '',
            location: '',
            email: '',
            password: '',
            saveClicked: false
        }
    }

    saveInputValue = (event) => {
        this.setState({ [event.target.id]: event.target.value})
        
    }

    saveDataHandler = () => {
        this.setState({ saveClicked: true})
        const newUser = {
            firstName: this.state.firstName, 
            lastName: this.state.lastName, 
            birthday: this.state.birthday, 
            level: this.state.level, 
            location: this.state.location, 
            email: this.state.email, 
            password: this.state.firstName
        }
        store.dispatch(savePersonalInfo(newUser))
    }
    editDataHandler = () => {
        this.setState({ saveClicked: false})
    }

    render() {
        return (
            <div className="personal-info ">
                <h1>Personal Info</h1>
                <div className='inputs-div'>
                    <label htmlFor="firstName" className="login-label">First Name</label>
                    {!this.state.saveClicked ? 
                        <input type="text" id="firstName" className="register-inputs" onChange={this.saveInputValue} defaultValue={this.state.firstName} />
                        : <p className="data-p">{this.state.firstName}</p>}
                </div>
                <div className='inputs-div'>
                    <label htmlFor="lastName" className="login-label">Last Name</label>
                    {!this.state.saveClicked ? 
                    <input type="text" id="lastName" className="register-inputs" onChange={this.saveInputValue} defaultValue={this.state.lastName} />
                    : <p className="data-p">{this.state.lastName}</p>}
                </div>
                <div className='inputs-div'>
                    <label htmlFor="birthday" className="login-label">Birthday</label>
                    {!this.state.saveClicked ? 
                    <input type="date" id="birthday" className="register-inputs" onChange={this.saveInputValue} defaultValue={this.state.birthday} />
                    : <p className="data-p">{this.state.birthday}</p>}
                </div>
                <div className='inputs-div'>
                    <label htmlFor="level" className="login-label">Level</label>
                    {!this.state.saveClicked ? 
                    <input type="text" id="level" className="register-inputs" onChange={this.saveInputValue} defaultValue={this.state.level} />
                    : <p className="data-p">{this.state.level}</p>}
                </div>
                <div className='inputs-div'>
                    <label htmlFor="location" className="login-label">Location</label>
                    {!this.state.saveClicked ? 
                    <input type="location" id="location" className="register-inputs" onChange={this.saveInputValue} defaultValue={this.state.location} />
                    : <p className="data-p">{this.state.location}</p>}
                </div>
                <div className='inputs-div'>
                    <label htmlFor="email" className="login-label">Email</label>
                    {!this.state.saveClicked ? 
                    <input type="email" id="email" className="register-inputs" onChange={this.saveInputValue} defaultValue={this.state.email} />
                    : <p className="data-p">{this.state.email}</p>}
                </div>
                <div className='inputs-div'>
                    <label htmlFor="password" className="login-label">Password</label>
                    {!this.state.saveClicked ? 
                    <input type="password" id="password" className="register-inputs" onChange={this.saveInputValue} defaultValue={this.state.password} />
                    : <p className="data-p-password">Password saved!</p>}
                </div>
                <div className="save-btn-div">
                    {!this.state.saveClicked ? 
                    <button className="save-btn" onClick={this.saveDataHandler}>Save</button> : 
                    <button className="save-btn" onClick={this.editDataHandler}>Edit</button> }
                </div>
            </div>
        )
    }
}

export default Personalinfo