import React from 'react'
import './WPlanDays.css'

function DaysInput(props) {
    var days = props.days.map((day, index) => {
        return (<div className="days-input-main" key={index}>
            {props[day] !== "true" ?
                <div className="days-inputs-div" key={index}>
                    <label htmlFor={day} >Day {index + 1}</label>
                    {props.saveClicked ?
                        <p className="data-p day-p">{props[day]}</p> :
                        <input type="text" id={day} className="register-inputs" onChange={props.saveInputValue} defaultValue={props[day]} />}
                    {!props.saveClicked ? <button className="rest-btn" id={day} onClick={props.restButtonHandler}>Rest</button> : null}
                </div>
                : <div>
                    <p key={index} className="rest-day-p">Day {index + 1} is your rest day!</p>
                    {!props.saveClicked ? <button id={day} className="undo-btn" onClick={props.undoButtonHandler}>Undo</button> : null}
                </div>}
        </div>
        )
    })
    return (
        <div>
            {days}
        </div> 
    )
}

export default DaysInput