import React from 'react'
import { connect } from 'react-redux'
import './PersonalInfo.css'
import InfoDiv from '../InfoDiv/InfoDiv'
import moment from 'moment'
const PersonalInfo = (props) => {
    var user = props.userSelected
    var bday = user.birthday.toString().slice(0, 10).replace(/-/g, '');
    var age = moment().diff(moment(bday, 'YYYYMMDD'), 'years')
    return (
        <div className="personal-info-user">
            <InfoDiv labelNameId="first-name" labelText="First Name" info={user.first_name} />
            <InfoDiv labelNameId="last-name" labelText="Last Name" info={user.last_name} />
            <InfoDiv labelNameId="location" labelText="Location" info={user.location} />
            <InfoDiv labelNameId="level" labelText="Level" info={user.level} />
            <InfoDiv labelNameId="birthday" labelText="Age" info={age} />
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