const express = require('express');
const app = express();
const crypto = require('crypto');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Middleware
app.use(bodyParser.json());
app.use(methodOverride('_method'));

const cors = require('cors');
app.use(cors());

// const filesHandler = require('../handlers/filesHandler')

//making the connection with mongoose
const mongoURI = 'mongodb+srv://stefan_gg:furious7@cluster0-ptuut.mongodb.net/bodybuildingmedia'

const conn = mongoose.createConnection(mongoURI, {useUnifiedTopology: true, useNewUrlParser: true});
let gfs;

conn.once('open', () => {
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection('uploads');
  });

//Create storage engine
const storage = new GridFsStorage({
    url: mongoURI,
    file: (req, file) => {
        console.log(req)
      return new Promise((resolve, reject) => {
        crypto.randomBytes(16, (err, buf) => {
          if (err) {
            return reject(err);
          }
          const filename = buf.toString('hex') + path.extname(file.originalname);
          const fileInfo = {
            filename: filename,
            bucketName: 'uploads'
          };
          resolve(fileInfo);
        });
      });
    }
  });
  const upload = multer({ storage });

  app.post('/upload', upload.single('file'), (req,res) => {
      res.send( req.file);
  })

app.listen(8083, err => {
    if (err) {
        console.log('Could not start server');
        console.log(err);
        return;
    }
    console.log('Files server successfully started on port 8083');
});


