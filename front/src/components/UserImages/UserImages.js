import React from 'react'
import './UserImages.css'
import { connect } from 'react-redux'
const HEROKU_URL = "https://bodybuildingmedia.herokuapp.com/"

class UserImages extends React.Component {
    render() {
        var content;
        if (this.props.uploadedPhotoUrl === HEROKU_URL + 'undefined') {
            content = <p>No photo found for this user!</p>
        } else {
            content = <img className="cover-image" src={this.props.uploadedPhotoUrl} alt="user" />  
        }
        return (
            <div className="user-images">      
                {this.props.userClicked ?
                    <>
                        {content}
                    </> : null}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userClicked: state.userClicked,
        uploadedPhotoUrl: state.uploadedPhotoUrl
    }
}

export default connect(mapStateToProps)(UserImages);