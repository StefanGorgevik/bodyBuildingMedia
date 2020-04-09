const mongoose = require('mongoose');

var Image = mongoose.model(
    'image', new mongoose.Schema({
        url: String,
        userID: String
        }, { collection: "images" })
)

const saveImage = (data) => {
    return new Promise((success, fail) => {
        var img = new Image(data)
        img.save(data, (err) => {
            if (err) {
                return fail;
            } else {
                // console.log(data)
                return success(data)
            }
        })
    })
}

const getImages = () => {
    return new Promise((success, fail) => {
        Image.find({}, (err, data) => {
            if (err) {
                // console.log(err)
                return fail(err)
            } else {
                // console.log(data)
                return success(data)
            }
        })
    })
}

const getOneImage = (id) => {
    return new Promise((success, fail) => {
        Image.find({userID: id}, (err, data) => {
            if (err) {
                console.log(err)
                return fail(err)
            } else {
                console.log(data[0])
                return success(data[0])
            }
        })
    })
}

module.exports = { 
    saveImage,
    getOneImage,
    getImages
}