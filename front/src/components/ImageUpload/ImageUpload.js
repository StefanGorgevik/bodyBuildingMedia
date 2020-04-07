import React, { Component } from 'react'
import './ImageUpload.css'
import Button from '../Button/Button'
import { openUploadPhoto } from '../../redux/actions/userActions'
import { connect } from 'react-redux'
import Title from '../Title/Title'
import axios from 'axios'

class ImageUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            imageUrl: '',
            message: ''
        }
    }

    selectImages = (event) => {
        let images = []
        for (var i = 0; i < event.target.files.length; i++) {
            images[i] = event.target.files.item(i);
        }
        images = images.filter(image => image.name.match(/\.(jpg|jpeg|png|gif)$/))
        let message = 'Image selected'
        this.setState({ images, message })
    }

    uploadImages = () => {
        const uploaders = this.state.images.map(image => {
            const data = new FormData();
            data.append("image", image, image.name);
           return axios.post('http://localhost:8083/upload', data, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            }
        })
                .then(response => {
                    this.setState({
                        imageUrl: response.data.imageUrl
                    });
                })
        });

        // Once all the files are uploaded 
        axios.all(uploaders).then(() => {
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
                    <input className="photo-input " type="file"
                        onChange={this.selectImages} single="true" />
                    <p className="text-info">{this.state.message}</p>
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
        openUploadPhoto: (bool) => dispatch(openUploadPhoto(bool))
    }
}

export default connect(null, mapDispatchToProps)(ImageUpload)

// <div className="img-divvv">
//                         {
//                             this.state.imageUrls.map((url, i) => (
//                                 <div className="img-div" key={i}>
//                                     <img src={BASE_URL + url}
//                                         alt="not available" /><br />
//                                 </div>
//                             ))
//                         }
//                     </div>