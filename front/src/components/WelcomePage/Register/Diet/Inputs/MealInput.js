import React from 'react'
import '../Diet.css'

class MealInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        this.meals = []
        this.mealItem = []
    }


    saveInputValue = (event) => {
        this.setState({ ...this.state, [event.target.id]: event.target.value })
        console.log(this.state)
    }

    addMealHandler = () => {
        console.log(this.state)
        this.meals.push(this.addMeal());
        if (this.meals) {
            console.log("vleze")
                this.mealItem.push(this.meals.map((meal, i) => {
                    console.log("Vleze i tuka ama wtf")
                    return (
                        <p className="breakfast-p" key={meal + i} >{meal}</p>
                    )
                })
                )
            
        }
        console.log(this.mealItem)

    }

    addMeal = () => {
        return (
            Object.values(this.state)
        )
    }

    render() {

        return (
            <div>
                <label htmlFor={this.props.htmlFor} className="login-label">{this.props.labelName}</label>
                <div className="input-button-diet">
                    <input type="location" id={this.props.inputId} className="login-input" onChange={this.saveInputValue} />
                    <button onClick={this.addMealHandler}>Add meal</button>
                </div>
                {this.mealItem !== '' ? <div className="breakfast-div">{this.mealItem}</div> : null}
            </div>
        )
    }
}

export default MealInput;