import React, {Component} from 'react'

import User from '../User/User'
import './UserPage.css'

class UserPage extends Component {
    render() {
        return ( 
        <div className="user-page">
            <h3>User page</h3>
            <User/>
        </div>)
    }
}

export default UserPage