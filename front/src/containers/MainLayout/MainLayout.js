import React from 'react'

import UserPage from '../../components/UserPage/UserPage'
import Users from '../../components/Users/Users'

import './MainLayout.css'

const mainLayout = (props) => {
    return (
        <div className="main-layout">
            <Users/>
            <UserPage/>
        </div>
    )
}

export default mainLayout