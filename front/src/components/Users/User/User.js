import React, { Component } from 'react'
import Profile from '../../../assets/images/profile.png'
import './User.css'
import { connect } from 'react-redux'
const BASE_URL = 'http://localhost:8083/'

class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hovered: false,
        }
    }

    hoverHandler = () => {
        this.setState({ hovered: true })
    }

    hoverLeaveHandler = () => {
        this.setState({ hovered: false })
    }

    render() {
        var url;
        if(this.props.photo !== undefined) {
        url = BASE_URL + this.props.photo.url
    } else {
        url = Profile
    }
        return (
            <div className={this.props.class} onClick={this.props.click}
                onMouseEnter={this.hoverHandler}
                onMouseLeave={this.hoverLeaveHandler}>
                <div className="photo-name">
                    <img className="user-photo" src={url} alt="users-pic" />
                </div>
                <div className="details">
                    <p>{this.props.fullname}</p>
                    {this.state.hovered ?
                        <> <p>Age: <span>{this.props.age}</span></p>
                            <p>Level: <span>{this.props.level}</span></p> </> : null}
                </div>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        users: state.users,
        userClicked: state.userClicked,
        uploadedPhotoUrl: state.uploadedPhotoUrl
    }
}

export default connect(mapStateToProps)(User)