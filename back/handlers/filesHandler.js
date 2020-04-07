const usersModel = require('../models/usersModel')
const imageModel = require('../models/imageModel')

const getImages = (req,res) => {
    imageModel.getImages() 
    .then(data => {
        console.log(data)
        res.status(200).send(data)
    }) 
    .catch(err => {
        console.log(err)
        res.status(404).send(err)
    }) 
}

const uploadPhoto = (req, res) => {
    const user = req.user;
    console.log(req.user)
    const img = `images/uploads/${req.file.filename}`;
    const imageData = {
        name: req.file.filename,
        url: img,
        userID: req.user.id
    }
    if (req.file) {
        res.json({
            imageUrl: img
        });
        imageModel.saveImage(imageData)
        usersModel.updateUser(user.id, {...user, photoUploaded: true} )
    }
    else {
        res.status(409).json("No Files to Upload.");
    }
}



module.exports = {
    uploadPhoto,
    getImages
}