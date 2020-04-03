import React from 'react'
import { connect } from 'react-redux'
import './PersonalInfo.css'
import InfoDiv from '../InfoDiv/InfoDiv'

const PersonalInfo = (props) => {
    return (
        <div className="personal-info-user">
            <InfoDiv labelNameId="first-name" labelText="First Name" info={props.userSelected.first_name} />
            <InfoDiv labelNameId="last-name" labelText="Last Name" info={props.userSelected.last_name} />
            <InfoDiv labelNameId="location" labelText="Location" info={props.userSelected.location} />
            <InfoDiv labelNameId="level" labelText="Level" info={props.userSelected.level} />
            <InfoDiv labelNameId="birthday" labelText="Birthday" info={props.userSelected.birthday} />
            <InfoDiv labelNameId="E-mail" labelText="E-mail" info={props.userSelected.email} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        userSelected: state.userSelected
    }
}

export default connect(mapStateToProps)(PersonalInfo)