import React from 'react'

import './PersonalInfo.css'
import {savePersonalInfo} from '../../../../redux/actions/userActions'
import store from '../../../../redux/store'
import Title from '../Title/Title'
import Input from '../RegInput/RegInput'

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
            password: ''
        }
    }

    saveInputValue = (event) => {
        this.setState({ [event.target.id]: event.target.value})
        
    }

    // saveDataHandler = () => {
    //     const newUser = {
    //         firstName: this.state.firstName, 
    //         lastName: this.state.lastName, 
    //         birthday: this.state.birthday, 
    //         level: this.state.level, 
    //         location: this.state.location, 
    //         email: this.state.email, 
    //         password: this.state.firstName
    //     }
    //     store.dispatch(savePersonalInfo(newUser))
    // }
    
    render() {
        var ids = ['first-name', 'last-name', 'email', 'password' , 'level', 'location','birthday']
        var inputs = ids.map((id, i ) => {
            return (
                <Input id={id} 
                        saveInputValue={this.saveInputValue}
                        name={this.state[i]}
                />
            )
        })
        return (
            <div className="personal-info ">
                <Title title="personal info"/>
                <div>
                    {inputs}
                </div>
            </div>
        )
    }
}

export default Personalinfo