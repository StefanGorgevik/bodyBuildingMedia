const mongoose = require('mongoose');

var Image = mongoose.model(
    'image', new mongoose.Schema({
        name: String,
        url: String,
        userID: String
    }, { collection: "images" })
)

const getImages = (userID) => {
    return new Promise((success, fail) => {
        Image.find({}, (err, data) => {
            if (err) {
                console.log(err)
                return fail(err)
            } else {
                console.log(data)
                return success(data)
            }
        })
    })
}

const saveImage = (data) => {
    return new Promise((success, fail) => {
        var img = new Image(data)
        img.save(data, (err) => {
            if (err) {
                return fail;
            } else {
                return success(data)
            }
        })
    })
}

module.exports = { 
    saveImage, 
    getImages
}