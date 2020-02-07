import React from 'react'

import './Diet.css'
import MealInput from './Inputs/MealInput'

import {addDietMeals} from '../../../../redux/actions/dietActions'
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
        store.dispatch(addDietMeals(meals))
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
        var meals = this.props.meals.map((meal, i) => {
            console.log(meal)
            return (<p className="breakfast-p" key={meal+i}>Meal {i + 1} : {Object.values(meal)}</p>)
        })
        
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

                {!this.state.mealsGenerated ? <div className='generate-meals'>
                    <div className='select-meals-number'>
                        <p>
                            <label htmlFor="mealsPerDay" className="login-label">Meals per Day</label>
                            <input type="number" id="mealsPerDay" className="login-input" onChange={this.saveInputValue} />
                        </p>
                        {/* <p>
                            <label htmlFor="snacksPerDay" className="login-label">Snacks per Day</label>
                            <input type="number" id="snacksPerDay" className="login-input" onChange={this.saveInputValue} />
                        </p> */}
                    </div>
                    {!this.state.mealsGenerated ? <button onClick={this.generateMeals} className="gen-btn">Generate Meals</button> : null}
                </div> : null}
                {this.state.mealsGenerated ? mealInputs : null}
                {this.state.mealAdded ? <div>{meals}</div> : null}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        meals: state.dietReducer.meals
    }
}

export default connect(mapStateToProps)(Diet)