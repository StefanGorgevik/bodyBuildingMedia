import React from 'react'

import './Diet.css'
import MealInput from './Inputs/MealInput'

class Diet extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dietName: '',
            dietGoals: '',
            mealsPerDay: '',
            snacksPerDay: '',
            meals: []
        }
    }

    saveInputValue = (event) => {
        this.setState({ [event.target.id]: event.target.value })
        console.log(this.state)
    }

    addMealHandler = () => {
        this.setState(previousState => ({
            meals: [...previousState.meals, this.state.breakfast]
        }));
    }

    render() {
        if(this.state.mealsPerDay) {
            var mealInputs = [];
            for(let i = 1; i <= this.state.mealsPerDay; i ++) {
                mealInputs.push(<MealInput key={i} saveInputValue={this.saveInputValue} 
                htmlFor={'meal' + i}
                inputId={'meal' + i} 
                labelName={'Meal' + i} 
                addMeal={this.addMealHandler}
                meals={this.state.mealsPerDay}
                />)
            }
        }
        // const breaks = this.state.breakfasts.map((breakfast, i) => {            
        //     return (<p className="breakfast-p" key={breakfast + i} >{breakfast}</p>)
        // })
        return (
            <div className="diet register-tap">
                <h1>Diet</h1>
                <p>
                    <label htmlFor="dietName" className="login-label">Diet Name</label>
                    <input type="text" id="dietName" className="login-input" onChange={this.saveInputValue} />
                </p>
                <p>
                    <label htmlFor="dietGoals" className="login-label">Diet Goals</label>
                    <input type="text" id="dietGoals" className="login-input" onChange={this.saveInputValue} />
                </p>

                <div className='select-meals-number'>
                    <p>
                        <label htmlFor="mealsPerDay" className="login-label">Meals per Day</label>
                        <input type="number" id="mealsPerDay" className="login-input" onChange={this.saveInputValue} />
                    </p>
                    <p>
                        <label htmlFor="snacksPerDay" className="login-label">Snacks per Day</label>
                        <input type="number" id="snacksPerDay" className="login-input" onChange={this.saveInputValue} />
                    </p>
                </div>
                {mealInputs}
               
              
            </div>
        )
    }
}

export default Diet