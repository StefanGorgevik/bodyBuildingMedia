import React from 'react'
import './UserImages.css'
import Cover from '../../assets/images/cover.jpg'
import User from '../../assets/images/builder.jpg'
import {connect} from 'react-redux'

class UserImages extends React.Component {
    render(){
        return (
            <div className="user-images">
                {this.props.userClicked ? 
                <> 
                <img className="cover-image" src={!this.props.userClicked ? Cover : User} alt='cover' />
                <p>Image Description: I AM A STRONG DUDE !</p>
                </> : null}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userClicked: state.userClicked
    }
}

export default connect(mapStateToProps)(UserImages);