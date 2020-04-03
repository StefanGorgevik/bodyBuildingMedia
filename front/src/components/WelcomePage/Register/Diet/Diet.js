import React from 'react'
import './Diet.css'

import Title from '../Title/Title'
import store from './../../../../redux/store'
import { saveDietPlan } from '../../../../redux/actions/userActions'
import Input from '../RegInput/RegInput'
import DietInput from '../DietInput/DietInput'
import NumberInput from '../DietNumberInput/DietNumberInput'
class Diet extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dietGoals: '',
            dietIntensity: '',
            mealsPerDay: 0,
            snacksPerDay: 0,
            meals: {},
            snacks: {},
            mealsGenerated: false,
            mealAdded: false
        }
    }

    saveInputValue = (event) => {
        this.setState({
            [event.target.id]: event.target.value,
            meals: { ...this.state.meals, [event.target.id]: event.target.value },
            snacks: { ...this.state.snacks, [event.target.id]: event.target.value }
        })
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
        this.setState({ mealsGenerated: true })
    }

    render() {
        if (this.state.mealsPerDay) {
            var mealInputs = [];
            for (let i = 1; i <= this.state.mealsPerDay; i++) {
                mealInputs.push(
                    <DietInput
                        key={this.state.mealsPerDay[i] + i}
                        type="meal"
                        i={i}
                        saveMealsValue={this.saveInputValue}
                        id={'meal' + i}
                        value={this.state.meals['meal' + i]}
                    />
                )
            }
        }

        if (this.state.snacksPerDay) {
            var snackInputs = [];
            for (let i = 1; i <= this.state.snacksPerDay; i++) {
                snackInputs.push(
                    <DietInput
                        key={this.state.snacksPerDay[i] + i}
                        type="snack"
                        i={i}
                        saveMealsValue={this.saveInputValue}
                        id={'snack' + i}
                        value={this.state.snacks['snack' + i]}
                    />
                )
            }
        }
        var ids = ['diet-goals', 'diet-intensity']
        var inputs = ids.map((id, i) => {
            return (
                <Input key={id + i}
                    id={id}
                    saveInputValue={this.saveInputValue}
                    name={this.state[i]}
                />
            )
        })

        var mealsSnacks = ["mealsPerDay", 'snacksPerDay']
        var numberInputs = mealsSnacks.map((id, i) => {
            return (
                <NumberInput key={id+i} id={id}
                    type="number"
                    saveInputValue={this.saveInputValue}
                    value={this.state[mealsSnacks[i]]}
                />
            )
        })

        return (
            <div className="diet">
                <Title title="diet" />
                {inputs}
                {!this.state.mealsGenerated ?
                    <div className='generate-meals'>
                        <div className='select-meals-number'>
                            {numberInputs}
                        </div>
                        {!this.state.mealsGenerated ? <button onClick={this.generateMeals} className="gen-btn">Generate Meals</button> : null}
                    </div> : null}
                {this.state.mealsGenerated ? mealInputs : null}
                {this.state.mealsGenerated ? snackInputs : null}

            </div>
        )
    }
}

export default Diet