import React from 'react'

import './Diet.css'

import store from './../../../../redux/store'
import { saveDietPlan, saveClicked, editClicked } from '../../../../redux/actions/userActions'

class Diet extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dietGoals: '',
            dietIntensity: '',
            mealsPerDay: '',
            snacksPerDay: '',
            meals: {},
            snacks: {},
            mealsGenerated: false,
            mealAdded: false,
            saveClicked: false
        }
    }

    saveInputValue = (event) => {
        this.setState({ [event.target.id]: event.target.value })
    }

    saveMealsValue = (event) => {
        this.setState({ meals: { ...this.state.meals, [event.target.id]: event.target.value } })
        
    }
    saveSnacksValue = (event) => {
        this.setState({ snacks: { ...this.state.snacks, [event.target.id]: event.target.value } })
    }

    generateMeals = () => {
        this.setState({ mealsGenerated: true })
    }

    saveDataHandler = () => {
        const newDietPlan = {
            dietGoals: this.state.dietGoals,
            dietIntensity: this.state.dietIntensity,
            meals: this.state.meals,
            snacks: this.state.snacks
        }
        store.dispatch(saveDietPlan(newDietPlan))
        this.setState({ saveClicked: true, mealsGenerated: true })
        store.dispatch(saveClicked())
    }
    editDataHandler = () => {
        this.setState({ saveClicked: false, mealsGenerated: true })
        store.dispatch(editClicked())
    }


    render() {
        if (this.state.mealsPerDay) {
            var mealInputs = [];
            for (let i = 1; i <= this.state.mealsPerDay; i++) {
                mealInputs.push(
                    <div className="meals inputs-div" key={i}>
                        <label htmlFor={'meal' + i} className="login-label">Meal {i}</label>
                        {!this.state.saveClicked ?
                            <textarea className="meals-snacks-textarea" onChange={this.saveMealsValue} id={'meal' + i} defaultValue={this.state.meals['meal' + i]}></textarea>
                            : <p className="data-p">{this.state.meals['meal' + i]}</p>}
                    </div>
                )
            }
        }

        if (this.state.snacksPerDay) {
            var snackInputs = [];
            for (let i = 1; i <= this.state.snacksPerDay; i++) {
                snackInputs.push(
                    <div className="meals inputs-div" key={i}>
                        <label htmlFor={'snack' + i} className="login-label">Snack {i}</label>
                        {!this.state.saveClicked ?
                            <textarea className="meals-snacks-textarea" onChange={this.saveSnacksValue} id={'snack' + i} defaultValue={this.state.snacks['snack' + i]}></textarea>
                            : <p className="data-p"> {this.state.snacks['snack' + i]}</p>
                        }
                    </div>
                )
            }
        }

        return (
            <div className="diet">
                <h1 className="title-h1">Diet</h1>
                <div className='inputs-div'>
                    <label htmlFor="dietGoals" className="login-label">Diet Goals</label>
                    {!this.state.saveClicked ? <input type="text" id="dietGoals" className="register-inputs" onChange={this.saveInputValue} defaultValue={this.state.dietGoals} />
                        : <p className="data-p">{this.state.dietGoals}</p>}
                </div>
                <div className='inputs-div'>
                    <label htmlFor="dietIntensity" className="login-label">Diet Intensity</label>
                    {!this.state.saveClicked ? <input type="text" id="dietIntensity" className="register-inputs" onChange={this.saveInputValue} defaultValue={this.state.dietIntensity} />
                        : <p className="data-p">{this.state.dietIntensity}</p>}
                </div>

                {!this.state.mealsGenerated ? <div className='generate-meals'>
                    <div className='select-meals-number'>
                        <div>
                            <label htmlFor="mealsPerDay" className="login-label">Meals per Day</label>
                            <input type="number" id="mealsPerDay" className="register-inputs" onChange={this.saveInputValue} />
                        </div>
                        <div>
                            <label htmlFor="snacksPerDay" className="login-label">Snacks per Day</label>
                            <input type="number" id="snacksPerDay" className="register-inputs" onChange={this.saveInputValue} />
                        </div>
                    </div>
                    {!this.state.mealsGenerated ? <button onClick={this.generateMeals} className="gen-btn">Generate Meals</button> : null}
                </div> : null}
                {this.state.mealsGenerated ? mealInputs : null}
                {this.state.mealsGenerated ? snackInputs : null}

                <div className="save-btn-div">
                    {!this.state.saveClicked ?
                        <button className="save-btn" onClick={this.saveDataHandler}>Save</button> :
                        <button className="save-btn" onClick={this.editDataHandler}>Edit</button>}
                </div>
            </div>
        )
    }
}

export default Diet