import React from 'react'

import './Diet.css'

class Diet extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dietName: '',
            dietGoals: '',
            mealsPerDay: '',
            snacksPerDay: '',
            breakfast: '',
            breakfasts: []
        }
    }

    saveInputValue = (event) => {
        this.setState({ [event.target.id]: event.target.value })
    }

    addBreakfastHandler = () => {
        this.setState(previousState => ({
            breakfasts: [...previousState.breakfasts, this.state.breakfast]
        }));
    }

    render() {
        const breaks = this.state.breakfasts.map((breakfast, i) => {            
            return (<p className="breakfast-p" key={breakfast + i} >{breakfast}</p>)
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
                    <input type="number" id="dietGoals" className="login-input" onChange={this.saveInputValue} />
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

                <div>
                    <label htmlFor="breakfast" className="login-label">Breakfast</label>
                    <div className="input-button-diet">
                        <input type="location" id="breakfast" className="login-input" onChange={this.saveInputValue} />
                        <button onClick={this.addBreakfastHandler}>Add meal</button>
                    </div>
                    {this.state.breakfast !== '' ? <div className="breakfast-div">{breaks}</div> : null}
                </div>
              
            </div>
        )
    }
}

export default Diet