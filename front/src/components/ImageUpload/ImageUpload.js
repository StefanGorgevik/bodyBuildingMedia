import React, { useState, useEffect } from 'react';
import { CloudinaryContext, Image } from "cloudinary-react";
import { fetchPhotos, openUploadWidget } from "../../CloudinaryServices";
import './ImageUpload.css';
import Button from '../Button/Button'
import { openUploadPhoto, uploadPhotoUrl } from '../../redux/actions/userActions'
import { connect } from 'react-redux'
import Title from '../Title/Title'
import axios from 'axios'
// const HEROKU_URL = "https://localhost:8082/"
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
                if (photos.info.url !== undefined) {
                    console.log(photos.info.url);
                    props.uploadPhotoUrl(photos.info.url)
                }
                if (photos.event === 'success') {
                    if (photos.info.url !== undefined) {
                        console.log(photos.info.url);
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
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }


    const closeUploadPhotoHandler = () => {
        props.openUploadPhoto(false)
    }

    return (
        <main className="iu-main">
            <div className="iu-div">
                <Title title="photo upload" />
                <CloudinaryContext cloudName="stefangg">
                    <div className="App">
                        <Button click={closeUploadPhotoHandler}
                            label="close"
                            className="close-btn" />
                        <Button click={() => beginUpload("image")}
                            label="Choose"
                            className="login-btn" />
                        <section>
                            {images.map(i => <Image
                                key={i}
                                publicId={i}
                                fetch-format="auto"
                                quality="auto"
                            />)}
                        </section>
                        {props.url === '' ? null

                            : <Button click={uploadToUser}
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




//     // changePhoto = () => {
//     //     var id = localStorage.getItem('user-id')
//     //     axios.delete(HEROKU_URL + `app/v1/files/images/delete/${id}`, {
//     //         headers: {
//     //             'Authorization': `Bearer ${localStorage.getItem('jwt')}`
//     //         }
//     //     })
//     //         .then(res => {
//     //             console.log(res)
//     //             this.uploadImages()
//     //         })
//     //         .catch(err => {
//     //             console.log(err)
//     //         })
//     // }


//     render() {
//         var isPhotoUploaded = localStorage.getItem("isPhotoUploaded") === 'true'
//         return (
//             <main className="iu-main">
//                 <div className="iu-div">
//                     <Title title="photo upload" />
//                     {isPhotoUploaded ? <p className="iu-info-p"><i className="fas fa-exclamation-triangle"></i>
//                     Your current photo will be removed!</p> : null}
//                     <input className="photo-input " type="file" onChange={this.selectImages} single="true" />
//                     <div className="wp-btns">
//                         <Button click={this.closeUploadPhotoHandler}
//                             label="close"
//                             className="close-btn"
//                         />
//                         {isPhotoUploaded ?
//                             <Button click={this.changePhoto}
//                                 label={"change"}
//                                 className="login-btn"
//                             /> :
//                             <Button click={this.uploadImages}
//                                 label={"upload"}
//                                 className="login-btn"
//                             />}
//                     </div>
//                     {/* <p className='iu-p'>Upload photo under construction!</p>
//                     <i className="fas fa-wrench"></i>
//                     <Button click={this.closeUploadPhotoHandler}
//                             label="Ok"
//                             className="close-btn"
//                         /> */}
//                 </div>
//             </main>
//         )
//     }
// }

