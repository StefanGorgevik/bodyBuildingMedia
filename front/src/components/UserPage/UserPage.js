import React, {Component} from 'react'

import UserDataHeader from '../Navigation/UserDataHeader'
import './UserPage.css'

class UserPage extends Component {
    render() {
        return ( 
        <div className="user-page">
        <UserDataHeader/>
            <h3>User page</h3>
           
        </div>)
    }
}

export default UserPage