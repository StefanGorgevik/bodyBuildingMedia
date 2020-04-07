const express = require('express');
const multer = require('multer');
const cors = require('cors');
const filesHandler = require('../handlers/filesHandler')
const app = express();

//making the connection with mongoose
const config = require('../config/index')
const DBConnection = require('../db/connection')
var c = config.getConfig("db")
DBConnection.initialize(c);

var jwt = require('express-jwt');
app.use(                                                      
    jwt(
        { secret: config.getConfig('jwt').key }
    )
    .unless(
        { path: '/getimages' }
    )
);

app.use(express.static('public'))

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images/uploads')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
});
const upload = multer({ storage })

app.use(cors());


app.get('/getimages', filesHandler.getImages)
app.post('/upload', upload.single('image'), filesHandler.uploadPhoto);

app.listen(8083, err => {
    if (err) {
        console.log('Could not start server');
        console.log(err);
        return;
    }
    console.log('Files server successfully started on port 8083');
});