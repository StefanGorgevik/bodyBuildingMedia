import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import './Users.css'
import User from './User/User'
import LoggedUser from './LoggedUser/LoggedUser'
import Button from '../Button/Button'
import { connect } from 'react-redux'
import { userSelected, userClicked, getAllUsers, selectedWorkoutPlan, personalInfoClick, workoutPlanClick, dietClick, selectedDiet, uploadPhotoUrl } from '../../redux/actions/userActions'
import axios from 'axios'
const HEROKU_URL = "https://bodybuildingmedia.herokuapp.com/"

class Users extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            redirect: false,
            user: {},
            activeUser: null,
            images: [],
            search: ''
        }
    }

    componentDidMount() {
        this.getUsers()
    }

    getUsers = () => {
        axios.get(HEROKU_URL + 'app/v1/users/all/', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            }
        })
            .then((res) => {
                var loggedUserId = localStorage.getItem('user-id')
                var users = res.data.filter((user) => {
                    if (user._id === loggedUserId) {
                        this.setState({ user: user })
                    }
                    return user._id !== loggedUserId
                })
                this.props.getAllUsers(users)
                this.setState({ users: users })
            })
            .catch((error) => {
                if (error.response.status === 401) {
                    this.setState({ redirect: true })
                }
            })
    }

    getWorkoutPlan = (id) => {
        axios.get(`${HEROKU_URL}app/v1/plans/workoutplans/${id}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            }
        })
            .then(res => {
                this.props.selectedWorkoutPlan(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    getDiet = (id) => {
        axios.get(`${HEROKU_URL}app/v1/plans/diets/${id}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            }
        })
            .then(res => {
                this.props.selectedDiet(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    redirectToAuth = () => {
        if (this.state.redirect) {
            return <Redirect to='/' />
        }
    }


    userClicked = (id) => {
        var user;
        if (localStorage.getItem('user-id') === id) {
            user = [this.state.user]
        } else {
            user = this.state.users.filter((user) => {
                return user._id === id
            })
        }
        this.getWorkoutPlan(user[0]._id)
        this.getDiet(user[0]._id)
        this.props.userSelected(user[0])
        this.props.personalInfoClick(true)
        this.props.workoutPlanClick(false)
        this.props.dietClick(false)
        this.props.userClicked(true)
        this.setState({ activeUser: id })
    }

    saveSearchValue = (event) => {
        this.setState({ search: event.target.value })
    }

    searchUser = () => {
        if (this.state.search !== '') {
            axios.get(`${HEROKU_URL}app/v1/users/name/${this.state.search}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('jwt')}`
                }
            })
                .then(res => {
                    if (res.data) {
                        this.setState({ users: res.data })
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        } 
    }

    cancelSearch = () => {
        this.getUsers()
        this.setState({ search: ''})
    }

    render() {
        var images = this.state.images
        var users = this.state.users
        if (users && images) {
            var user = users.map((user, i) => {
                return (
                    <User key={user._id} click={() => this.userClicked(user._id)}
                        fullname={user.first_name + ' ' + user.last_name}
                        userID={user._id}
                        age={user.age}
                        level={user.level}
                        class={this.state.activeUser !== user._id ? 'selected-user' : 'user'}
                        photo={user.photoURL}
                    />)
            })
        }
        return (
            <div className='users' >
                {this.redirectToAuth()}
                <div className="logged-user-div">
                    <LoggedUser fullname={this.state.user.first_name + ' ' + this.state.user.last_name}
                        age={this.state.user.age}
                        userID={this.state.user._id}
                        level={this.state.user.level}
                        click={() => this.userClicked(this.state.user._id)}
                        class={'logged-user'}
                        image={this.state.user.photoURL}
                    />
                </div>
                <h1>Users</h1>
                <div className="users-scroll">
                    {user}
                </div>
                <div className='search-input-div'>
                    <input type='search' placeholder="Search for a user by first name" onChange={this.saveSearchValue} value={this.state.search} />
                    <Button click={this.searchUser}
                        label={<i className="fas fa-search"></i>}
                        className="search-btn"
                    />
                    <Button click={this.cancelSearch}
                        label="X"
                        className="search-btn"
                    />
                </div>
            </div>)
    }
}

function mapStateToProps(state) {
    return {
        users: state.users,
        userClicked: state.userClicked,
        isUserLogged: state.userLoggedIn,
        loggedUser: state.loggedUser
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getAllUsers: (data) => dispatch(getAllUsers(data)),
        userSelected: (data) => dispatch(userSelected(data)),
        selectedWorkoutPlan: (data) => dispatch(selectedWorkoutPlan(data)),
        selectedDiet: (data) => dispatch(selectedDiet(data)),
        personalInfoClick: (bool) => dispatch(personalInfoClick(bool)),
        workoutPlanClick: (bool) => dispatch(workoutPlanClick(bool)),
        dietClick: (bool) => dispatch(dietClick(bool)),
        userClicked: (bool) => dispatch(userClicked(bool)),
        uploadPhotoUrl: (url) => dispatch(uploadPhotoUrl(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)