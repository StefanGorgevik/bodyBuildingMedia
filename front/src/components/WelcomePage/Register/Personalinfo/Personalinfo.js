import React from 'react'

import './PersonalInfo.css'
import {savePersonalInfo} from '../../../../redux/actions/userActions'
import Title from '../Title/Title'
import Input from '../RegInput/RegInput'
import { connect } from 'react-redux'

class PersonalInfo extends React.Component {
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

    componentDidUpdate() {
        if(this.props.userRegistered) {
            const newUser = {
                first_name: this.state.firstName, 
                last_name: this.state.lastName, 
                birthday: this.state.birthday, 
                level: this.state.level, 
                location: this.state.location, 
                email: this.state.email, 
                password: this.state.password
            }
            this.props.savePersonalInfo(newUser)
        }
    }

    saveInputValue = (event) => {
        this.setState({ [event.target.id]: event.target.value })
    }

    // sendInfo = () => {
    //     if(this.state.firstName !== '' || this.state.lastName !== '' || this.state.birthday !== '' || this.state.level !== '' ||
    //     this.state.location !== '' || this.state.email !== '' ||this.state.password !== '') {
    //         var newInfo = this.state
    //         console.log(newInfo)
    //         this.props.saveInfo(newInfo)
    //     } else {
    //         alert("It is important to fill every field!")
    //     }
    // }



    render() {
        var ids = ['firstName', 'lastName', 'email', 'password', 'level', 'location', 'birthday']
        var inputs = ids.map((id, i) => {
            return (
                <Input key={id + i} id={id}
                    saveInputValue={this.saveInputValue}
                    name={this.state[i]}
                />)
        })
        return (
            <div className="personal-info ">
                <Title title="personal info" />
                <div>
                    {inputs}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userRegistered: state.userRegistered
    }
}

function mapDispatchToProps(dispatch) {
    return {
        savePersonalInfo: (data) => dispatch(savePersonalInfo(data))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PersonalInfo)