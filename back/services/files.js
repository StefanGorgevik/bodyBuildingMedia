const express = require('express');
const app = express();
const multer = require('multer');

const cors = require('cors');
app.use(cors());

const filesHandler = require('../handlers/filesHandler')

//making the connection with mongoose
const config = require('../config/index')
const DBConnection = require('../db/connection')
var c = config.getConfig("db")
DBConnection.initialize(c);

app.use(express.static('public'))

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images/uploads')
    },
    filename: (req, file, cb) => {
        cb(null, req.user.id + '-' + file.originalname)
    }
});
const upload = multer({ storage })

var jwt = require('express-jwt');
app.use(
    jwt(
        { secret: config.getConfig('jwt').key }
    )
        .unless({
            methods: ['GET', 'POST'],
            path: [
                { url: /^\/upload\/.*/, methods: ['GET','POST'] },
                { url: /^\/uploads\/images\/.*/, methods: ['GET','POST'] },
                { url: /^\/images\/.*/, methods: ['GET','POST'] },
                { url: /^\/images\/uploads\/.*/, methods: ['GET','POST'] },
            ]
        })
);

app.post('/upload/', upload.single('image'), filesHandler.uploadPhoto);
app.get('/images', filesHandler.getImages);
app.get('/images/:id', filesHandler.getOneImage);


app.listen(8083, err => {
    if (err) {
        console.log('Could not start server');
        console.log(err);
        return;
    }
    console.log('Files server successfully started on port 8083');
});


