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
        console.log(user[0])
        this.setState({
                personalInfo: user[0].personalInfo,
                workoutPlan: user[0].workoutPlan,
                diet: user[0].diet 
        })
        
        store.dispatch(userSelected(user[0]))
        store.dispatch(userClicked( true))
    }



    render() {
        //var userAge = new Date().getFullYear() - new Date(this.props.users[0].personalInfo.birthday).getFullYear()
        const user = this.props.users.map(user => {
            return <User click={ () => this.userClicked(user.personalInfo.id)} key={user.personalInfo.id} 
                fullname={user.personalInfo.firstName + ' ' + user.personalInfo.lastName}
                age={new Date().getFullYear() - new Date(user.personalInfo.birthday).getFullYear()}
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