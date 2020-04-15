import React from 'react'

import './PersonalInfo.css'
import Input from '../../../RegInput/RegInput'
import { connect } from 'react-redux'

function PersonalInfo(props) {
        var ids = ['firstName', 'lastName', 'email', 'password', 'level', 'location', 'age']
        var inputs = ids.map((id, i) => {
            return (
                <Input key={id + i} id={id}
                    saveInputValue={props.saveInputValue}
                    name={props.user[i]}
                    class="register-inputs"
                    value={props.user[id]}
                    editInfoOpened={props.editInfoOpened}
                />)
        })
        return (
            <div className="personal-info ">
                <div className="pi-inputs-div">
                    {inputs}
                </div>
            </div>
        )
}

function mapStateToProps(state) {
    return {
        userRegistered: state.userRegistered,
        loggedUser: state.loggedUser
    }
}

export default connect(mapStateToProps)(PersonalInfo)