const express = require('express')
const app = express()

// * for upload with any format
const multer = require('multer');
const upload = multer();

// * Routes
const authRouter = require('./routes/auth')

// * config uri
const {API_PORT} = require("./utils/config");

// * database
require('./database')

// * middlewares :
app.use(express.json()) // post body format is row
app.use(express.urlencoded({extended: false})) // post body format is urlencoded
app.use(upload.any())

// * url and route middlewares
app.use('/api/v1/auth', authRouter)

app.listen(API_PORT , () => {
    console.log(`Running express server on port ${API_PORT}`)
})
