import React, { Component } from 'react'
import Builder from '../../../assets/images/builder.jpg'
import './User.css'
import {connect} from 'react-redux'

class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hovered: false
        }
    }

    hoverHandler = () => {
        this.setState({ hovered: true })
    }

    hoverLeaveHandler =() => {
        this.setState({hovered: false})
    }

    render() {
        return (
            <div className='user' onClick={this.props.click} onMouseEnter={this.hoverHandler} onMouseLeave={this.hoverLeaveHandler}>
                <div className="photo-name">
                    <img className="user-photo" src={Builder} alt="builder" />
                    <p>{this.props.fullname}</p>
                    {this.state.hovered ?
                    <div className="details">
                            <p>Age:{this.props.age}</p>
                            <p>Level:{this.props.level}</p>
                    </div> : null}
                </div>
                
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        users:state.users,
        userClicked: state.userClicked
    }
}

export default connect(mapStateToProps)(User)