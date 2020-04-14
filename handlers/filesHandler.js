const usersModel = require('../models/usersModel')
const imageModel = require('../models/imageModel')
const fs = require('fs')
var cloudinary = require('cloudinary').v2;

const getImages = (req, res) => {
    imageModel.getImages()
        .then(data => {
            res.status(200).send(data)
        })
        .catch(err => {
            res.status(404).send(err)
        })
}

const getOneImage = (req, res) => {
    imageModel.getOneImage(req.params.id)
        .then(data => {
            res.status(200).send(data)
        })
        .catch(err => {
            res.status(404).send(err)
        })
}

const uploadPhoto = (req, res) => {
    stream = cloudinary.uploader.upload_stream(function (result) {
        console.log(result);
        res.send(loudinary.image(result.public_id, { format: "png", width: 100, height: 130, crop: "fill" }));
    });
    fs.createReadStream(req.files.image.path, { encoding: 'binary' }).on('data', stream.write).on('end', stream.end);
    const user = req.user;
    const img = `images/uploads/${req.file.filename}`;
    var imgData = {
        url: img,
        userID: user.id
    }
    if (req.file) {

        res.json({
            imageUrl: img
        });
        imageModel.saveImage(imgData)
        usersModel.updateUser(user.id, { ...user, isPhotoUploaded: true })

    }
    else {
        res.status(409).json("No Files to Upload.");
    }
}

const deleteImage = (req, res) => {
    imageModel.getOneImage(req.params.id)
        .then(data => {
            var url = './public/' + data.url
            fs.unlinkSync(url)
        })

    imageModel.deleteImage(req.params.id)
        .then(() => {
            res.status(204).send("Item deleted");
        })
        .catch((err) => {
            res.status(500).send(err);
        })
}


module.exports = {
    uploadPhoto,
    getOneImage,
    getImages,
    deleteImage
}