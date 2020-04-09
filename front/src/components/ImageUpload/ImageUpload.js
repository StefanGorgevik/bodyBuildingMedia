import React, { Component } from 'react'
import './ImageUpload.css'
import Button from '../Button/Button'
import { openUploadPhoto, uploadPhotoUrl } from '../../redux/actions/userActions'
import { connect } from 'react-redux'
import Title from '../Title/Title'
import axios from 'axios'
const BASE_URL = 'http://localhost:8083/'
class ImageUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            imageUrls: ''
        }
    }

    selectImages = (event) => {
        let images = []
        for (var i = 0; i < event.target.files.length; i++) {
            images[i] = event.target.files.item(i);
        }
        images = images.filter(image => image.name.match(/\.(jpg|jpeg|png|gif)$/))
        this.setState({ images })
    }

    uploadImages = () => {
        console.log('upload')
        const uploaders = this.state.images.map(image => {
            const data = new FormData();
            data.append("image", image, image.name);
            return axios.post(BASE_URL + 'upload', data, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('jwt')}`
                }
            })
                .then(response => {
                    console.log(response.data.imageUrl)
                    this.props.uploadPhotoUrl(BASE_URL + response.data.imageUrl)
                    this.setState({
                        imageUrl: response.data.imageUrl
                    });
                    this.props.openUploadPhoto(false)
                    window.location.reload();
                })
                .catch(err => console.log(err))
        });
        // Once all the files are uploaded 
        axios.all(uploaders, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            }
        }).then(() => {
            console.log('done');
        }).catch(err => alert(err.message));
    }

    closeUploadPhotoHandler = () => {
        this.props.openUploadPhoto(false)
    }

    render() {
        return (
            <main className="iu-main">
                <div className="iu-div">
                    <Title title="photo upload" />                  
                        <input className="photo-input " type="file" onChange={this.selectImages} single="true" />
                    <div className="wp-btns">
                        <Button click={this.closeUploadPhotoHandler}
                            label="close"
                            className="close-btn"
                        />
                        <Button click={this.uploadImages}
                            label="upload"
                            className="login-btn"
                        />
                    </div>
                </div>
            </main>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        openUploadPhoto: (bool) => dispatch(openUploadPhoto(bool)),
        uploadPhotoUrl: (data) => dispatch(uploadPhotoUrl(data))
    }
}

export default connect(null, mapDispatchToProps)(ImageUpload)







