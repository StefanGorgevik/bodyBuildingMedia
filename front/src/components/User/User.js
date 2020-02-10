import React, { Component } from 'react'
import Builder from '../../assets/images/builder.jpg'
import './User.css'


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
            <div className="user" onMouseEnter={this.hoverHandler} onMouseLeave={this.hoverLeaveHandler}>
                <div className="photo-username">
                    <img className="user-photo" src={Builder} alt="builder" />
                    <p>{this.props.fullname}</p>
                </div>
                {this.state.hovered ?
                    <div className="details">
                            <p>Age:{this.props.age}</p>
                            <p>Level:{this.props.level}</p>
                    </div> : null}
            </div>
        )
    }
}



export default User