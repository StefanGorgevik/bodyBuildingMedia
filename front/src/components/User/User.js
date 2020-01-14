import React,{Component} from 'react'
import Builder from '../../assets/images/builder.jpg'
import './User.css'

class User extends Component {
    render() {
        return (
            <div className="user">  
                <img className="user-photo" src={Builder} alt="builder" />]
                <div className="details">
                    <h4>Details</h4>
                    <div className="detail">
                        <p>Name:</p>
                        <p>Stefan Bilderot</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default User