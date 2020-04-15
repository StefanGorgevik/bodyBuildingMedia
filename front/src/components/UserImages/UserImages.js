import React from 'react'
import './UserImages.css'
import { connect } from 'react-redux'
// const HEROKU_URL = "https://raw.githubusercontent.com/StefanGorgevik/bodyBuildingMedia/master/public/"

class UserImages extends React.Component {
    render() {
        var content;
        console.log(this.props.userSelected.photoURL)
        if (this.props.userSelected.photoURL !== undefined && this.props.userSelected.photoURL !== '') {
            content = <img className="cover-image" src={this.props.userSelected.photoURL} alt="user" />
        } else {
            content = <p>No photo found for this user!</p>
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
        uploadedPhotoUrl: state.uploadedPhotoUrl,
        userSelected: state.userSelected
    }
}

export default connect(mapStateToProps)(UserImages);