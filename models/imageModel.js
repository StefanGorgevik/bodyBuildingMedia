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
                return success(data)
            }
        })
    })
}

// const getImages = () => {
//     return new Promise((success, fail) => {
//         Image.find({}, (err, data) => {
//             if (err) {
//                 return fail(err)
//             } else {
//                 return success(data)
//             }
//         })
//     })
// }

// const getOneImage = (id) => {
//     return new Promise((success, fail) => {
//         Image.find({userID: id}, (err, data) => {
//             if (err) {
//                 return fail(err)
//             } else {
//                 return success(data[0])
//             }
//         })
//     })
// }

// const deleteImage = (id) => {
//     return new Promise((success,fail) => {
//         Image.deleteOne({userID: id}, err => {
//             if(err) {
//                 return fail(err);
//             }
//             return success();
//         })
//     })
// }

module.exports = { 
    saveImage
    // getOneImage,
    // getImages,
    // deleteImage
}