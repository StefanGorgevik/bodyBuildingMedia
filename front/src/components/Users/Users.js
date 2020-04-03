import React, {Component} from 'react'

import './Users.css'
import User from './User/User'

//import store from '../../redux/store'
import {connect} from 'react-redux'
import store from '../../redux/store'
import {userSelected, userClicked} from '../../redux/actions/userActions'
class Users extends Component {
    constructor(props) {
        super(props)
        this.state = {
            personalInfo: '',
            workoutPlan: '',
            diet: ''
        }
    }
    userClicked = (id)=> {
        var user = this.props.users.filter((user) => {
            return user.personalInfo.id === id
        })
        this.setState({
                personalInfo: user[0].personalInfo,
                workoutPlan: user[0].workoutPlan,
                diet: user[0].diet 
        })

        store.dispatch(userSelected(user[0]))
        store.dispatch(userClicked(true))
    }


    render() {
        //var userAge = new Date().getFullYear() - new Date(this.props.users[0].personalInfo.birthday).getFullYear()
        const user = this.props.users.map(user => {
            return (
            <User key={user.personalInfo.id} click={() => this.userClicked(user.personalInfo.id)} 
                fullname={user.personalInfo.firstName + ' ' + user.personalInfo.lastName}
                age={new Date().getFullYear() - new Date(user.personalInfo.birthday).getFullYear()}
                level={user.personalInfo.level}
                userClicked={this.props.userClicked}
            />)
        })

        return ( 
        <div className='users' >
            <h1>Users</h1>
            <div className="users-scroll">
                {user}
            </div>
        </div>)
    }
}

function mapStateToProps (state) {
    return {
        users:state.users,
        userClicked: state.userclicked
    }
}

export default connect(mapStateToProps)(Users)