import React from 'react'
import './WPlanDays.css'

function DaysInput(props) {
    if (props.days) {
        console.log(props.days)
        var daysToMap = ["day1", "day2", "day3", "day4", "day5", "day6", "day7"]
        var days = daysToMap.map((day, index) => {
            console.log(props.days[day])
            return (
                <div className="days-input-main" key={day + index}>
                    {props.days[day] !== "true" ?
                        <div className="days-inputs-div" key={index}>
                            <label htmlFor={day} >Day {index + 1}</label>
                            <input type="text" id={day} className="register-inputs" onChange={props.saveInputValue} defaultValue={props.days[day]} />
                            <button className="rest-btn" id={day} onClick={props.restButtonHandler}>Rest</button>
                        </div>
                        : <div className="rest-div">
                            <p key={index} className="rest-day-p">Day {index + 1} is your rest day!</p>
                            <button id={day} className="undo-btn" onClick={props.undoButtonHandler}>Undo</button>
                        </div>}
                </div>
            )
        })
    }
    return (
        <div>
            {days}
        </div>
    )
}



export default DaysInput