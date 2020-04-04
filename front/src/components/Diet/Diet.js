import React from 'react'
import './Diet.css'

import Title from '../Title/Title'
import { openDietPlan } from '../../redux/actions/userActions'
import Input from '../RegInput/RegInput'
import DietInput from './DietInput/DietInput'
import NumberInput from './DietNumberInput/DietNumberInput'
import axios from 'axios'
import { connect } from 'react-redux'
import Button from '../Button/Button'

class Diet extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dietGoals: '',
            dietDuration: '',
            mealsPerDay: 0,
            snacksPerDay: 0,
            meals: {},
            mealsGenerated: false,
            mealAdded: false
        }
    }

    saveInputValue = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    saveMealsValue = (event) => {
        this.setState({
            meals: { ...this.state.meals, [event.target.id]: event.target.value }
        })
    }

    generateMeals = () => {
        this.setState({ mealsGenerated: true })
    }

    closeDiet = () => {
        this.props.openDietPlan(false)
    }

    saveDataHandler = () => {
        axios.post('http://localhost:8080/app/v1/register/diets', {
            dietGoals: this.state.dietGoals,
            dietDuration: this.state.dietDuration,
            mealsPerDay: this.state.mealsPerDay,
            meals: this.state.meals
        }, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            }
        })
            .then(res => {
                this.props.openDietPlan(false)
            })
            .catch(err => {
                this.props.openDietPlan(true)
            })
    }

    render() {
        if (this.state.mealsPerDay) {
            var mealInputs = [];
            for (let i = 1; i <= this.state.mealsPerDay; i++) {
                mealInputs.push(
                    <DietInput
                        key={'meal' + this.state.mealsPerDay[i] + i}
                        type="meal"
                        i={i}
                        saveMealsValue={this.saveMealsValue}
                        id={'meal' + i}
                        value={this.state.meals['meal' + i]}
                    />
                )
            }
        }

        var ids = ['dietGoals', 'dietDuration']
        var inputs = ids.map((id, i) => {
            return (
                <Input key={id + i}
                    id={id}
                    saveInputValue={this.saveInputValue}
                    name={this.state[i]}
                    class='register-inputs'
                />
            )
        })


        return (
            <main className="diet-main">
                <div className="diet">
                    <Title title="diet" />
                    <div>
                        {inputs}
                        {!this.state.mealsGenerated ?
                            <div className='generate-meals'>
                                <div className='select-meals-number'>
                                    <NumberInput id='mealsPerDay'
                                        type="number"
                                        saveInputValue={this.saveInputValue}
                                        value={this.state.mealsPerDay}
                                    />
                                </div>
                                {!this.state.mealsGenerated ? <button onClick={this.generateMeals} className="gen-btn">Generate Meals</button> : null}
                            </div> : null}
                        {this.state.mealsGenerated ? mealInputs : null}
                    </div>
                    <div className="wp-btns">
                        <Button click={this.closeDiet}
                            label="close"
                            className="close-btn"
                        />
                        <Button click={this.saveDataHandler}
                            label="save"
                            className="login-btn"
                        />
                    </div>
                </div>
            </main>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        openDietPlan: (bool) => dispatch(openDietPlan(bool))
    }
}

export default connect(null, mapDispatchToProps)(Diet)