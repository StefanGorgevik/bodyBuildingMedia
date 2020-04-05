import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import './Users.css'
import User from './User/User'
import { connect } from 'react-redux'
import { userSelected, userClicked, getAllUsers, selectedWorkoutPlan, personalInfoClick, workoutPlanClick, dietClick, selectedDiet } from '../../redux/actions/userActions'
import axios from 'axios'
class Users extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            redirect: false
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8082/app/v1/users/', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            }
        }).then((res) => {
            this.props.getAllUsers(res.data)
            this.setState({ users: res.data })
        })
        .catch((error) =>{
            if (error.response.status === 401) {
                this.setState({redirect: true})
            }
          })
    }


    getWorkoutPlan = (id) => {
        axios.get(`http://localhost:8081/app/v1/plans/workoutplans/${id}`, {
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
        console.log(id)
        axios.get(`http://localhost:8081/app/v1/plans/diets/${id}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            }
        })
            .then(res => {
                console.log(res)
                this.props.selectedDiet(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    redirectToAuth = () => {
        if(this.state.redirect) {
            return <Redirect to='/' />     
           }
    }


    userClicked = (id) => {
        var user = this.state.users.filter((user) => {
            return user._id === id
        })
        this.getWorkoutPlan(user[0]._id)
        this.getDiet(user[0]._id)
        this.props.userSelected(user[0])
        this.props.personalInfoClick(true)
        this.props.workoutPlanClick(false)
        this.props.dietClick(false)
        this.props.userClicked(true)
    }

    render() {
        var user = this.state.users.map((user, i) => {
            return (
                <User key={user._id} click={() => this.userClicked(user._id)}
                    fullname={user.first_name + ' ' + user.last_name}
                    age={new Date().getFullYear() - new Date(user.birthday).getFullYear()}
                    level={user.level}
                    userClicked={this.props.userClicked}
                />)
        })

        return (
            <div className='users' >
            {this.redirectToAuth()}
                <h1>Users</h1>
                <div className="users-scroll">
                    {user}
                </div>
            </div>)
    }
}

function mapStateToProps(state) {
    return {
        users: state.users,
        userClicked: state.userClicked,
        isUserLogged: state.userLoggedIn
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
        userClicked: (bool) => dispatch(userClicked(bool))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)