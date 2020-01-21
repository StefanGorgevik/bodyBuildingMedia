import React from 'react'
import './UserImages.css'
import Cover from '../../assets/images/cover.jpg'

class UserImages extends React.Component {
    render(){
        return (
            <div className="user-data">
                <img className="cover-image" src={Cover} alt='cover' />
                <p>Image Description: I AM A STRONG DUDE !</p>
            </div>
        )
    }
}

export default UserImages;