import React from 'react'
import './Diet.css'

import Title from '../Title/Title'
import { openDietPlan, selectedDiet } from '../../redux/actions/userActions'
import Input from '../RegInput/RegInput'
import DietInput from './DietInput/DietInput'
import NumberInput from './DietNumberInput/DietNumberInput'
import axios from 'axios'
import { connect } from 'react-redux'
import Button from '../Button/Button'
const HEROKU_URL = "https://bodybuildingmedia.herokuapp.com/"
class Diet extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dietGoals: '',
            dietDuration: '',
            mealsPerDay: 0,
            meals: {},
            error: false,
            alert: false
        }
    }

    componentDidMount() {
        var isCreated = localStorage.getItem('isDietCreated') === 'true'
        if (isCreated) {
            var userID = localStorage.getItem('user-id')
            axios.get(`${HEROKU_URL}app/v1/plans/diets/${userID}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('jwt')}`
                }
            })
                .then(res => {
                    var diet = res.data[0]
                    this.props.selectedDiet(diet)
                    this.setState({
                        dietGoals: diet.dietGoals,
                        dietDuration: diet.dietDuration,
                        mealsPerDay: diet.mealsPerDay,
                        meals: diet.meals
                    })
                })
                .catch(err => {
                    console.log(err)
                })
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
        if (this.state.dietGoals !== '' && this.state.dietDuration !== '' && this.state.mealsPerDay !== 0
            && Object.values(this.state.meals).length !== 0) {
            console.log('entered')
            axios.post(HEROKU_URL + 'app/v1/plans/diets', {
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
                    this.setState({ error: false })
                    localStorage.setItem('isDietCreated', "true")
                    this.props.openDietPlan(false)
                    window.location.reload();
                })
                .catch(err => {
                    this.setState({ error: true })
                    this.props.openDietPlan(true)
                })
        } else {
            console.log('entered else')
            this.setState({ error: true })
        }
    }

    editDietHandler = () => {
        var dietID = this.props.userDiet._id
        axios.put(`${HEROKU_URL}app/v1/plans/diets/${dietID}`, {
            dietGoals: this.state.dietGoals,
            dietDuration: this.state.dietDuration,
            mealsPerDay: this.state.mealsPerDay,
            meals: this.state.meals
        },
            {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('jwt')}`
                }
            })
            .then((res) => {
                this.setState({ error: false, alert: true })
            })
            .catch((err) => { this.props.openDietPlan(true) })
    }

    closeChangedAlert = () => {
        this.props.openDietPlan(false)
        this.setState({
            alert: false
        })
        window.location.reload();
    }

    closeErrorAlert = () => {
        this.setState({
            error: false
        })
    }

    render() {
        var isDietCreated = localStorage.getItem('isDietCreated') === 'true'
        if (this.state.mealsPerDay || this.props.selectedDiet) {
            var mealInputs = [];
            var mealsPerDay = {};
            for (let i = 1; i <= this.state.mealsPerDay; i++) {
                mealInputs.push(
                    <DietInput
                        key={'meal' + mealsPerDay[i] + i}
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
                    value={this.state[id]}
                />
            )
        })

        return (
            <main className="diet-main">
                <div className="diet">
                    <Title title="diet" />
                    
                    <div className="diet-inputs-div">
                        {inputs}
                        <div className='generate-meals'>
                            <div className='select-meals-number'>
                                <NumberInput id='mealsPerDay'
                                    type="number"
                                    saveInputValue={this.saveInputValue}
                                    value={this.state.mealsPerDay}
                                />
                            </div>
                        </div>
                        {mealInputs}
                    </div>
                    {this.state.alert ? <p className="check-p">Info successfully changed!</p> : null}
                    {this.state.error ? <p className="check-p">Check your credentials!</p> : null}
                    <div className="diet-btns">
                        <Button click={this.closeDiet}
                            label="close"
                            className="close-btn"
                        />
                        <Button click={!isDietCreated ? this.saveDataHandler : this.editDietHandler}
                            label={isDietCreated ? "edit" : "save"}
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
        userDiet: state.selectedDiet
    }
}

function mapDispatchToProps(dispatch) {
    return {
        openDietPlan: (bool) => dispatch(openDietPlan(bool)),
        selectedDiet: (bool) => dispatch(selectedDiet(bool))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Diet)