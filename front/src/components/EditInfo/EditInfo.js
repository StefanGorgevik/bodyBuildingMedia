import React, { Component } from 'react'
import './EditInfo.css'
import PersonalInfo from '../WelcomePage/Register/PersonalInfo/Personalinfo'
import axios from 'axios'
import Button from '../Button/Button'
import { connect } from 'react-redux'
import { openEditInfo } from '../../redux/actions/userActions'
import Error from '../WelcomePage/Error/Error'
import ChangedAlert from '../ChangedAlert/ChangedAlert'
const HEROKU_URL = "https://bodybuildingmedia.herokuapp.com/"
class EditInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loaded: false,
            error: false,
            alert: false,
            user: {
                firstName: '',
                lastName: '',
                age: 0,
                level: '',
                location: '',
                email: '',
                password: ''
            }
        }
    }

    componentDidMount() {
        var userID = localStorage.getItem('user-id')
        axios.get(`${HEROKU_URL}app/v1/users/id/${userID}`, {
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
                        age: user.age,
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
        var user = this.state.user
        console.log(this.state.user)
        if (user.firstName !== '' && user.lastName !== '' && user.age !== 0 && user.level !== ''
            && user.location !== '' && user.email !== '' && user.password !== '') {
            axios.put(`${HEROKU_URL}app/v1/users/${userID}`, {
                first_name: this.state.user.firstName,
                last_name: this.state.user.lastName,
                age: this.state.user.age,
                level: this.state.user.level,
                location: this.state.user.location,
                email: this.state.user.email,
                password: this.state.user.password
            }, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('jwt')}`
                }
            })
                .then(res => {
                    this.setState({ error: false, alert: true })
                })
                .catch(err => {
                    this.setState({ error: true })
                })
        } else {
            this.setState({ error: true })
        }
    }

    closeChangedAlert = () => {
        this.props.openEditInfo(false)
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
        return (
            <main className="ei-main">
                {this.state.alert ? <ChangedAlert content="Info successfully changed!" closeChangedAlert={this.closeChangedAlert} /> : null}
                {this.state.error ? <Error closeErrorAlert={this.closeErrorAlert}
                    title="Error"
                    content='Fill up every field or check if your credentials are correct'
                /> : null}
                <div className="ei-div">
                    <PersonalInfo saveInputValue={this.saveInputValue}
                        user={this.state.user}
                        editInfoOpened={this.props.editInfoOpened}
                    />
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

const mapStateToProps = (state) => {
    return {
        editInfoOpened: state.editInfoOpened
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        openEditInfo: (bool) => dispatch(openEditInfo(bool))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditInfo)