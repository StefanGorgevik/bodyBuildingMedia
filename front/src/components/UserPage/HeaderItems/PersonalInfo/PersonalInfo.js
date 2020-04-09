import React from 'react'
import { connect } from 'react-redux'
import './PersonalInfo.css'
import InfoDiv from '../InfoDiv/InfoDiv'
const PersonalInfo = (props) => {
    var user = props.userSelected
    return (
        <div className="personal-info-user">
            <InfoDiv labelNameId="first-name" labelText="First Name" info={user.first_name} />
            <InfoDiv labelNameId="last-name" labelText="Last Name" info={user.last_name} />
            <InfoDiv labelNameId="location" labelText="Location" info={user.location} />
            <InfoDiv labelNameId="level" labelText="Level" info={user.level} />
            <InfoDiv labelNameId="age" labelText="Age" info={user.age} />
            <InfoDiv labelNameId="E-mail" labelText="E-mail" info={user.email} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        userSelected: state.userSelected
    }
}

export default connect(mapStateToProps)(PersonalInfo)