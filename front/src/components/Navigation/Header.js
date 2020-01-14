import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import Profile from '../../assets/images/profile.png'
import Dumbell from '../../assets/images/dumbell.png'
import Food from '../../assets/images/food.png'
import Group from '../../assets/images/group.jpg'

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <nav className="navigation">
                <div className="left-side">
                    <ul>
                        <li><img className="profile-photo" src={Profile} alt='profile' /></li>
                       <Link> <li>User</li></Link>
                       <Link> <li>Home</li></Link>
                    </ul>
                </div>
                <div className="img-div">
                    <img src={Dumbell} alt='profile' className="imgs"  />
                    <img src={Group} alt='group' id="group-img" />
                    <img src={Food} alt='food'  className="imgs"  />
                </div>
                <div className="right-side">
                    <ul>
                       <Link> <li>Contact</li></Link>
                       <Link> <li>About</li></Link>
                    </ul>
                </div>
            </nav>
        )
    }
} 

export default Header