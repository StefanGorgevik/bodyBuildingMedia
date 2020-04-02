import React from 'react'
import './UserDataHeader.css'

function UserDataHeader (props){
        return (
            <div className="user-data-navigation">
                    <ul id="user-data-ul">
                         {/* <li onClick={this.props.perInfoClicked}  onMouseEnter={this.props.perInfoClicked} onMouseLeave={this.props.perInfoClicked}>Personal Info</li> */}
                         <li className={props.personalInfoClicked && props.userClicked ? "active-li user-data-li" : "user-data-li"}
                          onClick={props.perInfoClickedHandler} >Personal Info</li>
                         <li className={props.workoutPlanClicked && props.userClicked ? "active-li user-data-li" : "user-data-li"} 
                         onClick={props.workoutPlanClickedHandler}>Workout Plan</li>
                         <li className={props.dietClicked && props.userClicked  ? "active-li user-data-li" : "user-data-li"} 
                         onClick={props.dietClickedHandler}>Diet</li>
                    </ul>  
            </div>
        )
}

export default UserDataHeader