import React, { Component } from 'react'
import './EditInfo.css'
import PersonalInfo from '../WelcomePage/Register/PersonalInfo/PersonalInfo'
import axios from 'axios'
import Button from '../Button/Button'
import { connect } from 'react-redux'
import { openEditInfo } from '../../redux/actions/userActions'

class EditInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loaded: false,
            user: {
                firstName: '',
                lastName: '',
                birthday: '',
                level: '',
                location: '',
                email: '',
                password: ''
            }
        }
    }

    componentDidMount() {
        var userID = localStorage.getItem('user-id')
        axios.get(`http://localhost:8082/app/v1/users/${userID}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            }
        })
            .then(res => {
                var user = res.data[0]
                this.setState({
                    ...this.state,
                    user: {
                        firstName: user.first_name,
                        lastName: user.last_name,
                        birthday: user.birthday,
                        level: user.level,
                        location: user.location,
                        email: user.email,
                        password: user.password
                    },
                    loaded: true
                })
            })
            .catch(err => console.log(err))
    }

    saveInputValue = (event) => {
        this.setState({ ...this.state, user: { ...this.state.user, [event.target.id]: event.target.value } })
    }

    closePopUp = () => {
        this.props.openEditInfo(false)
    }

    editUserHandler = () => {
        var userID = localStorage.getItem('user-id')
        axios.put(`http://localhost:8082/app/v1/users/${userID}`, {
                        first_name: this.state.user.firstName,
                        last_name: this.state.user.lastName,
                        birthday: this.state.user.birthday,
                        level: this.state.user.level,
                        location: this.state.user.location,
                        email: this.state.user.email,
                        password: this.state.user.password
        },{
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            }
        })
            .then(res => {
                console.log(res)
                this.props.openEditInfo(false)

            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <main className="ei-main">
                <div className="ei-div">
                    <PersonalInfo saveInputValue={this.saveInputValue}
                        user={this.state.user} />
                    <div className="reg-btns-div">
                        <Button click={this.closePopUp}
                            label="close"
                            className="close-btn"
                        />
                        <Button click={this.editUserHandler}
                            label="edit"
                            className="login-btn"
                        />
                    </div>
                </div>
            </main>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        openEditInfo: (bool) => dispatch(openEditInfo(bool))
    }
}

export default connect(null, mapDispatchToProps)(EditInfo)