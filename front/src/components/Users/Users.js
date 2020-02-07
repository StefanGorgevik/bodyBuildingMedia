import React, {Component} from 'react'

import './Users.css'
import User from '../User/User'

//import store from '../../redux/store'
import {connect} from 'react-redux'

class Users extends Component {
    render() {
        // console.log(new Date().getFullYear())
        const user = this.props.users.map(user => {
            return <User key={user.id} 
                username={user.username}
                fullname={user.first_name + ' ' + user.last_name}
                age={user.age}
                level={user.level}
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