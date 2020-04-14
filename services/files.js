const express = require('express');
const app = express();
const multer = require('multer');


var cloudinary = require('cloudinary').v2;
cloudinary.config({ 
  cloud_name: 'stefangg', 
  api_key: '829499454567796', 
  api_secret: 'ul9N_3Sz6MF1PsHwk5GcyUUBu4M' 
});

const cors = require('cors');
app.use(cors());

const filesHandler = require('../handlers/filesHandler')

//making the connection with mongoose
const config = require('../config/index.js')
const DBConnection = require('../db/connection')
var c = config.getConfig("db")
DBConnection.initialize(c);

app.use(express.static('public'))

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images/uploads')
    },
    filename: (req, file, cb) => {
      console.log(file)
        cb(null, req.user.id + '-' + file.originalname)
    }
});

cloudinary.v2.uploader.upload(storage,
  function (error, result) { console.log(result, error) });
const upload = multer({ storage })

var jwt = require('express-jwt');
app.use(
    jwt(
        { secret: config.getConfig('jwt').key }
    )
        .unless({
            methods: ['GET', 'POST'],
            path: [
                { url: /^\/app\/v1\/files\/upload\/.*/, methods: ['GET','POST'] },
                { url: /^\/app\/v1\/files\/uploads\/images\/.*/, methods: ['GET','POST'] },
                { url: /^\/app\/v1\/files\/images\/.*/, methods: ['GET','POST'] },
                { url: /^\/app\/v1\/files\/images\/uploads\/.*/, methods: ['GET','POST'] },
            ]
        })
);

app.post('/app/v1/files/upload/', filesHandler.uploadPhoto);
// app.get('/app/v1/files/images/', filesHandler.getImages);
// app.get('/app/v1/files/images/:id', filesHandler.getOneImage);
// app.delete('/app/v1/files/images/delete/:id', filesHandler.deleteImage);

app.listen(8083, err => {
    if (err) {
        console.log('Could not start server');
        console.log(err);
        return;
    }
    console.log('Files server successfully started on port 8083');
});


