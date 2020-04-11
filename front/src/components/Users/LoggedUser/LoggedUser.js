import React, { Component } from 'react'
import './LoggedUser.css'
import UserPhoto from '../../../assets/images/profile.png'
import { connect } from 'react-redux'
import axios from 'axios'
const HEROKU_URL = "https://bodybuildingmedia.herokuapp.com/"
const GIT_URL = "https://raw.githubusercontent.com/StefanGorgevik/bodyBuildingMedia/master/public/"

class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userURL: ''
        }
    }
    componentDidMount() {
        var id = localStorage.getItem('user-id')
        axios.get(`${HEROKU_URL}app/v1/files/images/${id}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            }
        })
            .then(res => {
                if (res.data.url !== undefined) {
                    this.setState({ userURL: GIT_URL + res.data.url })
                } else {
                    this.setState({userURL: UserPhoto})
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {

        return (
            <div className='logged-user-main' onClick={this.props.click}>
                <div className="photo-name">
                    <img className="logged-user-photo" src={this.state.userURL} alt="user" />
                </div>
                <div className="details">
                    <p>{this.props.fullname}</p>
                    <p>Age: <span>{this.props.age}</span></p>
                    <p>Level: <span>{this.props.level}</span></p>
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