import React, { Component } from 'react'
import Builder from '../../../assets/images/builder.jpg'
import './User.css'
import { connect } from 'react-redux'
// import axios from 'axios'
// const BASE_URL = 'http://localhost:8083/';
class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hovered: false,
            photoURL: ''
        }
    }

    // componentDidMount() {
    //     axios.get(`http://localhost:8083/upload/`, {
    //         headers: {
    //             'Authorization': `Bearer ${localStorage.getItem('jwt')}`
    //         }
    //     })
    //         .then((res) => {
    //                 console.log(res.data)
    //                 this.setState( {
    //                     photoURL: res.data[0].url
    //                 })
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // }

    hoverHandler = () => {
        this.setState({ hovered: true })
    }

    hoverLeaveHandler = () => {
        this.setState({ hovered: false })
    }

    render() {
        return (
            <div className={this.props.class} onClick={this.props.click}
                onMouseEnter={this.hoverHandler}
                onMouseLeave={this.hoverLeaveHandler}>
                <div className="photo-name">
                    <img className="user-photo" src={this.props.photo} alt="builder" />
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
        userClicked: state.userClicked
    }
}

export default connect(mapStateToProps)(User)