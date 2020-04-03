import React, { Component } from 'react'

import './Users.css'
import User from './User/User'
import { connect } from 'react-redux'
import store from '../../redux/store'
import { getUsers, userSelected, userClicked } from '../../redux/actions/userActions'
class Users extends Component {
    constructor(props) {
        super(props)
        this.state = {
            personalInfo: '',
            workoutPlan: '',
            diet: ''
        }
    }

    componentDidMount() {
        this.props.getUsers()
        console.log(this.props.users)
    }

    userClicked = (id) => {
        var user = this.props.users.filter((user) => {
            return user._id === id
        })
        store.dispatch(userSelected(user[0]))
        store.dispatch(userClicked(true))
    }


    render() {
        //var userAge = new Date().getFullYear() - new Date(this.props.users[0].personalInfo.birthday).getFullYear()
        console.log(this.props)
        if (this.props.users) {
            var user = this.props.users.map(user => {
                return (
                    <User key={user._id} click={() => this.userClicked(user._id)}
                        fullname={user.first_name + ' ' + user.last_name}
                        age={new Date().getFullYear() - new Date(user.birthday).getFullYear()}
                        level={user.level}
                        userClicked={this.props.userClicked}
                    />)
            })
        }

        return (
            <div className='users' >
                <h1>Users</h1>
                <div className="users-scroll">
                    {user}
                </div>
            </div>)
    }
}

function mapStateToProps(state) {
    return {
        users: state.users,
        userClicked: state.userclicked
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getUsers: () => dispatch(getUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)