const {Router} = require('express')
const jwt = require('jsonwebtoken')

const User = require('../model/user')
const {hashPassword, comparePassword} = require('../utils/helper')
const {SECRET_TOKEN_KEY} = require('../utils/config')

const router = Router()

router.post('/register', async (request, response) => {
    const {mobile} = request.body

    // check if user already exist
    // Validate if user exist in our database
    const userDB = await User.findOne({$or: [{mobile}]})

    if (userDB) {
        response.status(409).json( "User Already Exist. Please Login")
    } else {

        //Encrypt user password
        const password = hashPassword(request.body.password)

        // Create user in our database
        const user = await User.create({mobile, password})

        response.status(201).json({
            status: 201,
            message : "You are registered successfully please login!",
            user
        })
    }
})
router.post('/login', async (request, response) => {
    const {mobile, password} = request.body

    if (!mobile || !password) return response.status(400).json('all fields is required')

    const user = await User.findOne({mobile})
    if (!user) return response.status(404).json("user not found!")

    const isValidPassword = comparePassword(password, user.password)
    if (isValidPassword) {

        // Create token
        const token = jwt.sign(
            {user_id: user._id, mobile},
            SECRET_TOKEN_KEY,
            {
                expiresIn: "24h",
            }
        );
        // save user token
        user.token = token;
        if(token) response.status(200).send({
            status: 200,
            message : "You are logged in successfully!",
            user: {
                id: user._id,
                mobile,
                createdAt: user.createdAt
            },
            token: user.token
        })
    } else {
        response.status(400).json("password is incorrect")
    }
})


module.exports = router