import React from 'react'

import UserPage from '../../components/UserPage/UserPage'
import Users from '../../components/Users/Users'
import UserImages from '../../components/UserImages/UserImages'
import Header from '../../components/Navigation/Header'

import './MainLayout.css'

const mainLayout = (props) => {
    return (
        <div>
        <Header />
        <div className="main-layout">
            <Users/>
            <UserPage/>
            <UserImages/>
        </div>
        </div>
    )
}

export default mainLayout