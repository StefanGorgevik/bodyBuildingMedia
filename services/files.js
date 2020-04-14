const express = require('express');
const app = express();
const multer = require('multer');



const cors = require('cors');
app.use(cors());

const filesHandler = require('../handlers/filesHandler')

//making the connection with mongoose
const config = require('../config/index.js')
const DBConnection = require('../db/connection')
var c = config.getConfig("db")
DBConnection.initialize(c);

app.use(express.static('public'))

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


