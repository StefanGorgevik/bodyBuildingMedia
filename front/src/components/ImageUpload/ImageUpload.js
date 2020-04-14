import React, { Component } from 'react'
import './ImageUpload.css'
import Button from '../Button/Button'
import { openUploadPhoto, uploadPhotoUrl } from '../../redux/actions/userActions'
import { connect } from 'react-redux'
import Title from '../Title/Title'
import axios from 'axios'
const HEROKU_URL = "https://bodybuildingmedia.herokuapp.com/"

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
            return axios.post(HEROKU_URL + 'app/v1/files/upload', data, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('jwt')}`
                }
            })
                .then(response => {
                    console.log(response)
                    localStorage.setItem('isPhotoUploaded', "true")
                    this.props.uploadPhotoUrl(HEROKU_URL + response.data.imageUrl)
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

    changePhoto = () => {
        var id = localStorage.getItem('user-id')
        axios.delete(HEROKU_URL + `app/v1/files/images/delete/${id}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            }
        })
            .then(res => {
                console.log(res)
                this.uploadImages()
            })
            .catch(err => {
                console.log(err)
            })
    }

    closeUploadPhotoHandler = () => {
        this.props.openUploadPhoto(false)
    }

    render() {
        var isPhotoUploaded = localStorage.getItem("isPhotoUploaded") === 'true'
        return (
            <main className="iu-main">
                <div className="iu-div">
                    <Title title="photo upload" />
                    {isPhotoUploaded ? <p className="iu-info-p"><i className="fas fa-exclamation-triangle"></i>
                    Your current photo will be removed!</p> : null}
                    <input className="photo-input " type="file" onChange={this.selectImages} single="true" />
                    <div className="wp-btns">
                        <Button click={this.closeUploadPhotoHandler}
                            label="close"
                            className="close-btn"
                        />
                        {isPhotoUploaded ?
                            <Button click={this.changePhoto}
                                label={"change"}
                                className="login-btn"
                            /> :
                            <Button click={this.uploadImages}
                                label={"upload"}
                                className="login-btn"
                            />}
                    </div>
                    {/* <p className='iu-p'>Upload photo under construction!</p>
                    <i className="fas fa-wrench"></i>
                    <Button click={this.closeUploadPhotoHandler}
                            label="Ok"
                            className="close-btn"
                        /> */}
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







