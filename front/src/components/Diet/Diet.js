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
            mealsPerDay: localStorage.getItem('isDietCreated') === 'true' ? this.props.selectedDiet.mealsPerDay : 0,
            meals: {},
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

    closeDiet = () => {
        this.props.openDietPlan(false)
    }

    saveDataHandler = () => {
        axios.post('http://localhost:8081/app/v1/plans/diets', {
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
                window.location.reload();
                this.props.openDietPlan(false)
            })
            .catch(err => {
                this.props.openDietPlan(true)
            })
    }

    editDietHandler = () => {
        console.log(this.props.loggedUser)
    }

    render() {
        if (this.state.mealsPerDay || this.props.selectedDiet) {
            var mealInputs = [];
            var mealsPerDay = {};
            // if (localStorage.getItem('isDietCreated') === 'true' ) {
            //     mealsPerDay = this.props.selectedDiet.mealsPerDay
            // } else {
            //     mealsPerDay = this.state.mealsPerDay
            // }
            // console.log(mealsPerDay)
            for (let i = 1; i <= this.state.mealsPerDay; i++) {
                mealInputs.push(
                    <DietInput
                        key={'meal' + mealsPerDay[i] + i}
                        type="meal"
                        i={i}
                        saveMealsValue={this.saveMealsValue}
                        id={'meal' + i}
                        value={localStorage.getItem('isDietCreated') === 'true'  ? this.props.selectedDiet.meals['meal' + i] : this.state.meals['meal' + i]}
                    />
                )
            }
        }  

        console.log(this.props.selectedDiet)
        var ids = ['dietGoals', 'dietDuration']
        var inputs = ids.map((id, i) => {
            return (
                <Input key={id + i}
                    id={id}
                    saveInputValue={this.saveInputValue}
                    name={this.state[i]}
                    class='register-inputs'
                    value={!localStorage.getItem('isDietCreated') ? '' : this.props.selectedDiet[id]}
                />
            )
        })

        var isDietCreated = localStorage.getItem('isDietCreated')
        console.log(isDietCreated)
        return (
            <main className="diet-main">
                <div className="diet">
                    <Title title="diet" />
                        {inputs}
                        {localStorage.getItem('isDietCreated') !== 'true' ?
                            <div className='generate-meals'>
                                <div className='select-meals-number'>
                                    <NumberInput id='mealsPerDay'
                                        type="number"
                                        saveInputValue={this.saveInputValue}
                                        value={localStorage.getItem('isDietCreated') === 'true'  ? this.props.selectedDiet.mealsPerDay : this.state.mealsPerDay}
                                    />
                                </div>
                            </div> : null}
                        {localStorage.getItem('isDietCreated') === 'true' ? mealInputs : null}
                    <div className="wp-btns">
                        <Button click={this.closeDiet}
                            label="close"
                            className="close-btn"
                        />
                        <Button click={!isDietCreated ? this.editDietHandler : this.saveDataHandler}
                            label={!isDietCreated ? "edit" : "save"}
                            className="login-btn"
                        />
                    </div>
                </div>
            </main>
        )
    }
}

function mapStateToProps(state) {
    return {
        loggedUser: state.loggedUser,
        selectedDiet: state.selectedDiet
    }
}

function mapDispatchToProps(dispatch) {
    return {
        openDietPlan: (bool) => dispatch(openDietPlan(bool))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Diet)