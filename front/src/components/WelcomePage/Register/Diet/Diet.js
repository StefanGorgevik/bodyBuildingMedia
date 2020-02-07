import React from 'react'

import './Diet.css'
import MealInput from './Inputs/MealInput'

import store from './../../../../redux/store'
import {connect} from 'react-redux'

class Diet extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dietName: '',
            dietGoals: '',
            mealsPerDay: '',
            snacksPerDay: '',
            meals: [],
            mealsGenerated: false,
            mealAdded: false
        }
    }

    saveInputValue = (event) => {
        this.setState({ [event.target.id]: event.target.value })
    }

    generateMeals = () => {
        this.setState({mealsGenerated: true})
    }

    addMeal = (meals ) => {
        console.log(meals)
        this.setState({mealAdded: true})
    }

    render() {
        if (this.state.mealsPerDay) {
            var mealInputs = [];
            for (let i = 1; i <= this.state.mealsPerDay; i++) {
                mealInputs.push(<MealInput key={i} saveInputValue={this.saveInputValue}
                    htmlFor={'meal' + i}
                    alternativeHtmlFor={'alternative-meal' + i}
                    inputId={'meal' + i}
                    alternativeInputId={'alternative-meal' + i}
                    labelName={'Meal ' + i}
                    alternativeLabelName={'Alternative Meal ' + i}
                    meals={this.state.mealsPerDay}
                    addMeal={this.addMeal}
                />)
            }
        }
        console.log(this.props.meals)
        
        return (
            <div className="diet register-tap">
                <h1>Diet</h1>
                <p>
                    <label htmlFor="dietName" className="login-label">Diet Name</label>
                    <input type="text" id="dietName" className="register-inputs" onChange={this.saveInputValue} />
                </p>
                <p>
                    <label htmlFor="dietGoals" className="login-label">Diet Goals</label>
                    <input type="text" id="dietGoals" className="register-inputs" onChange={this.saveInputValue} />
                </p>

                {!this.state.mealsGenerated ? <div className='generate-meals'>
                    <div className='select-meals-number'>
                        <p>
                            <label htmlFor="mealsPerDay" className="login-label">Meals per Day</label>
                            <input type="number" id="mealsPerDay" className="register-inputs" onChange={this.saveInputValue} />
                        </p>
                        {/* <p>
                            <label htmlFor="snacksPerDay" className="login-label">Snacks per Day</label>
                            <input type="number" id="snacksPerDay" className="register-inputs" onChange={this.saveInputValue} />
                        </p> */}
                    </div>
                    {!this.state.mealsGenerated ? <button onClick={this.generateMeals} className="gen-btn">Generate Meals</button> : null}
                </div> : null}
            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     console.log(state)
//     return {
//         meals: state.dietReducer.meals
//     }
// }

// export default connect(mapStateToProps)(Diet)
export default Diet