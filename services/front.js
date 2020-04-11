const express = require('express');
const app = express();

const path = require('path');

const cors = require('cors');
app.use(cors());


app.use(express.static(path.join(__dirname, '../front/build')));

app.get("/*", function (req, res) {
  res.sendFile(path.resolve(__dirname, '../front/build', 'index.html'));
})

app.listen(8084, err => {
    if(err){
        console.log('could not start server');
        console.log(err);
        return;
    }
    console.log('Front end server started successfully on port 8084!');
});