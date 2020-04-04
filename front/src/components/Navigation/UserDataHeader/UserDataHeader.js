import React from 'react'
import './UserDataHeader.css'

function UserDataHeader (props){
        return (
            <div className="user-data-navigation">
                    <ul id="user-data-ul">
                         <li className={props.personalInfoClicked ? "active-li user-data-li" : "user-data-li"}
                          onClick={props.perInfoClickedHandler} >Personal Info</li>
                         <li className={props.workoutPlanClicked ? "active-li user-data-li" : "user-data-li"} 
                         onClick={props.workoutPlanClickedHandler}>Workout Plan</li>
                         <li className={props.dietClicked  ? "active-li user-data-li" : "user-data-li"} 
                         onClick={props.dietClickedHandler}>Diet</li>
                    </ul>  
            </div>
        )
}

export default UserDataHeader