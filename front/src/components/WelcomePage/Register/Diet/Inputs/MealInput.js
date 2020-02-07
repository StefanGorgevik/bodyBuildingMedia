import React from 'react'
import '../Diet.css'

//import {connect} from 'react-redux'
class MealInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
    
        }
    }


    saveInputValue = (event) => {
        this.setState({...this.state, [event.target.id] : event.target.value})
    }

    

    render() {
        return (
            <div className="meals">
                {/* <div>
                    <label htmlFor={this.props.htmlFor} className="login-label">{this.props.labelName}</label>
                    <div className="input-button-diet">
                        <input type="location" id={this.props.inputId} className="login-input" onChange={this.saveInputValue} />
                    </div>
                </div>
                <div>
                    <label htmlFor={this.props.alternativeHtmlFor} className="login-label">{this.props.alternativeLabelName}</label>
                    <div className="input-button-diet">
                        <input type="location" id={this.props.alternativeInputId} className="login-input" onChange={this.saveInputValue} />
                    </div>
                   
                </div> */}
                 <label htmlFor={this.props.htmlFor} className="login-label">{this.props.labelName}</label>
                <textarea onChange={this.saveInputValue} id={this.props.inputId}></textarea>
               <button onClick={() => {this.props.addMeal(this.state)}}>Add meal</button>
            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         clicked: state.dietReducer.clicked
//     }
// }

export default MealInput;
// export default connect(mapStateToProps)(MealInput);