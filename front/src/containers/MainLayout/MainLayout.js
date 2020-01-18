import React from 'react'

import UserPage from '../../components/UserPage/UserPage'
import Users from '../../components/Users/Users'
import UserData from '../../components/UserData/UserData'
import Header from '../../components/Navigation/Header'

import './MainLayout.css'

const mainLayout = (props) => {
    return (
        <div>
        <Header />
        <div className="main-layout">
            <Users/>
            <UserPage/>
            <UserData/>
        </div>
        </div>
    )
}

export default mainLayout