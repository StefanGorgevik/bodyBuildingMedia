import React from 'react'

import './PersonalInfo.css'
// import {savePersonalInfo} from '../../../../redux/actions/userActions'
// import store from '../../../../redux/store'
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

    saveInputValue = (event) => {
        this.setState({ [event.target.id]: event.target.value })
    }

    sendInfo = () => {
        if(this.state.firstName !== '' || this.state.lastName !== '' || this.state.birthday !== '' || this.state.level !== '' ||
        this.state.location !== '' || this.state.email !== '' ||this.state.password !== '') {
            var newInfo = this.state
            this.props.saveInfo(newInfo)
        } else {
            alert("It is important to fill every field!")
        }
     
    }



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
                {this.props.userRegistered ?
                    this.sendInfo() : null}
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

export default connect(mapStateToProps)(PersonalInfo)