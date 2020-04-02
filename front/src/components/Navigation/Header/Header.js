import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <nav className="navigation">
                    <h2 className="title-h2">Body Building Media</h2>
                <div className="right-side">
                    <ul>
                        <li>First and Last name</li>
                        <Link to="/edit-info"> <li>Edit Info</li></Link>
                        <Link to="/welcome"> <li>Sign Out</li></Link>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Header