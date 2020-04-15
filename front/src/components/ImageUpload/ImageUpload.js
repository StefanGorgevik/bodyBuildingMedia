import React, { useState, useEffect } from 'react';
import { CloudinaryContext } from "cloudinary-react";
import { fetchPhotos, openUploadWidget } from "../../CloudinaryServices";
import './ImageUpload.css';
import Button from '../Button/Button'
import { openUploadPhoto, uploadPhotoUrl } from '../../redux/actions/userActions'
import { connect } from 'react-redux'
import Title from '../Title/Title'
import axios from 'axios'
const HEROKU_URL = "https://bodybuildingmedia.herokuapp.com/"


function ImageUpload(props) {
    const [images, setImages] = useState([])

    const beginUpload = tag => {
        const uploadOptions = {
            cloudName: "stefangg",
            tags: [tag, 'anImage'],
            uploadPreset: "rn0z3bty"
        };
        openUploadWidget(uploadOptions, (error, photos) => {
            if (!error) {
                if (photos.event === 'success') {
                    if (photos.info.url !== undefined) {
                        props.uploadPhotoUrl(photos.info.url)
                    }
                    setImages([...images, photos.info.public_id])
                }
            } else {
                console.log(error);
            }
        })
    }

    useEffect(() => {
        fetchPhotos("image", setImages);
    }, [])

    const uploadToUser = () => {
        const userID = localStorage.getItem('user-id')
        axios.put(`${HEROKU_URL}app/v1/users/${userID}`,
            {
                photoURL: props.url,
                isPhotoUploaded: true
            },
            {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('jwt')}`
                }
            })
            .then(res => {
                localStorage.setItem('isPhotoUploaded', 'true')
                props.openUploadPhoto(false)
                window.location.reload();
            })
            .catch(err => {})
    }


    const closeUploadPhotoHandler = () => {
        props.openUploadPhoto(false)
        props.uploadPhotoUrl('')
    }
    const isPhotoUploaded = localStorage.getItem('isPhotoUploaded') === 'true'
    return (
        <main className="iu-main">
            <div className="iu-div">
                <Title title="photo upload" />
                <CloudinaryContext cloudName="stefangg">
                {isPhotoUploaded ? <p>Current photo will be deleted!</p> : null}
                        {props.url !== '' ? <img className="iu-photo" src={props.url} alt='upload' /> : null}
                    <div className="iu-btns-div">
                            <Button click={closeUploadPhotoHandler}
                                label="close"
                                className="close-btn" />

                            {props.url === '' ?
                                <Button click={() => beginUpload("image")}
                                    label="Choose"
                                    className="login-btn" />
                                :
                                <Button click={uploadToUser}
                                    label="Upload"
                                    className="login-btn" />}
                        </div>
                </CloudinaryContext>

            </div>
        </main>
    );
}

function mapStateToProps(state) {
    console.log(state.uploadedPhotoUrl)
    return {
        url: state.uploadedPhotoUrl
    }
}

function mapDispatchToProps(dispatch) {
    return {
        openUploadPhoto: (bool) => dispatch(openUploadPhoto(bool)),
        uploadPhotoUrl: (data) => dispatch(uploadPhotoUrl(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageUpload)