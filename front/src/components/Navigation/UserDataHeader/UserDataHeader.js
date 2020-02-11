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
                         {/* <li onClick={this.props.perInfoClicked}  onMouseEnter={this.props.perInfoClicked} onMouseLeave={this.props.perInfoClicked}>Personal Info</li> */}
                         <li className={this.props.personalInfoClicked || this.props.userClicked ? "active-li user-data-li" : "user-data-li"} onClick={this.props.perInfoClickedHandler} >Personal Info</li>
                         <li className={this.props.workoutPlanClicked && !this.props.userClicked ? "active-li user-data-li" : "user-data-li"} onClick={this.props.workoutPlanClickedHandler}>Workout Plan</li>
                         <li className={this.props.dietClicked && !this.props.userClicked  ? "active-li user-data-li" : "user-data-li"} onClick={this.props.dietClickedHandler}>Diet</li>
                    </ul>  
            </div>
        )
    }
}

export default UserDataHeader