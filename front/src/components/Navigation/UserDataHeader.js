import React from 'react'
import './UserDataHeader.css'

class UserDataHeader extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="user-data-navigation">
                    <ul id="user-data-ul">
                         <li>Personal Info</li>
                         <li>Diet</li>
                         <li>Workout Plan</li>
                    </ul>  
            </div>
        )
    }
}

export default UserDataHeader