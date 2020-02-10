import React, {Component} from 'react'

import './Users.css'
import User from '../User/User'

//import store from '../../redux/store'
import {connect} from 'react-redux'

class Users extends Component {
    userClicked = ()=> {
        console.log('user')
    }

    render() {
        console.log(Date.now())
        console.log(new Date(this.props.users[0].personalInfo.birthday).getTime())
        console.log(new Date(Date.now() - new Date(this.props.users[0].personalInfo.birthday).getTime()))
        const user = this.props.users.map(user => {
            return <User onClick={this.userClicked} key={user.personalInfo.id} 
                fullname={user.personalInfo.firstName + ' ' + user.personalInfo.lastName}
                age={user.personalInfo.birthday}
                level={user.personalInfo.level}
            />
        })
        return ( 
        <div className='users'>
            <h3 className="users-h3">Users</h3>
            <div className="user-scroll">
                {user}
            </div>
        </div>)
    }
}

function mapStateToProps (state) {
    return {
        users:state.users
    }
}

export default connect(mapStateToProps)(Users)