import React, { Component } from 'react'
import Builder from '../../../assets/images/builder.jpg'
import './User.css'
import { connect } from 'react-redux'

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

    hoverLeaveHandler = () => {
        this.setState({ hovered: false })
    }

    render() {
        return (
            <div className='user' onClick={this.props.click} onMouseEnter={this.hoverHandler} onMouseLeave={this.hoverLeaveHandler}>
                <div className="photo-name">
                    <img className="user-photo" src={Builder} alt="builder" />
                </div>
                <div className="details">
                    <p>{this.props.fullname}</p>
                        {this.state.hovered ?
                        <> <p>Age: <span>{this.props.age}</span></p>
                            <p>Level: <span>{this.props.level}</span></p> </> : null}
                </div>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        users: state.users,
        userClicked: state.userClicked
    }
}

export default connect(mapStateToProps)(User)