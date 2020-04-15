import React from 'react'
import './LoggedUser.css'
import UserPhoto from '../../../assets/images/profile.png'
import { connect } from 'react-redux'


function LoggedUser(props) {
    console.log(props.image)
    var url;
    if (props.image !== undefined) {
        url = props.image
    } else {
        url = UserPhoto
    }

    return (
        <div className='logged-user-main' onClick={props.click}>
            <div className="photo-name">
                <img className="logged-user-photo" src={url} alt="user" />
            </div>
            <div className="details">
                <p>{props.fullname}</p>
                <p>Age: <span>{props.age}</span></p>
                <p>Level: <span>{props.level}</span></p>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        users: state.users,
        userClicked: state.userClicked,
        uploadedPhotoUrl: state.uploadedPhotoUrl
    }
}

export default connect(mapStateToProps)(LoggedUser)