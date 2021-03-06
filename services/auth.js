var express = require('../node_modules/express')
var app = express();

//making the connection with mongoose
const config = require('../config/index.js')
const DBConnection = require('../db/connection')
var c = config.getConfig("db")
DBConnection.initialize(c);

var bodyParser = require('../node_modules/body-parser')
app.use(bodyParser.json())

const usersHandler = require('../handlers/usersHandler')

const cors = require('../node_modules/cors/lib')
app.use(cors())

var jwt = require('../node_modules/express-jwt/lib');
app.use(                                                       //sekoj req ke pomine niz ova i ke vrati req.user
    jwt(
        { secret: config.getConfig('jwt').key }
    )
        .unless(
            { path: ['/app/v1/auth/register', '/app/v1/auth/login'] }
        )
);

app.post('/app/v1/auth/register', usersHandler.registerUser)
app.post('/app/v1/auth/login', usersHandler.loginUser)


app.listen(8080, (err) => {
    if(err) {
        console.log(err)
        console.log("Error")
        return;
    }
    return console.log("Auth server has started successfully on port 8080")
})