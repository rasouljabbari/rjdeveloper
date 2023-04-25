const express = require('express')
const router = express.Router()
const ControllerApi = config.path.controller


// Validation Controller
const validationRules = require(`${ControllerApi}/v1/ValidationController`)

// middlewares
const {uploadImage} = require("../../middlewares/uploadMiddleware");
const apiAuth = require("../../middlewares/apiAuth");

// User Controllers
const HomeController = require(`${ControllerApi}/v1/HomeController`)
const AuthController = require(`${ControllerApi}/v1/AuthController`)
const UserController = require(`${ControllerApi}/v1/UserController`)

const multer = require('multer');
const upload = multer();

// user
router.get('/', HomeController.index)

router.post('/register', validationRules.register, uploadImage.fields([{ name: 'cv', maxCount: 1 }, { name: 'profile', maxCount: 1 }]), AuthController.register.bind(AuthController))

router.post('/login',upload.none(), AuthController.login.bind(AuthController))
router.get('/users', apiAuth, UserController.list.bind(UserController))
router.get('/user', apiAuth, UserController.index.bind(UserController))

router.post('/user/profile', apiAuth, uploadImage.single('image'), UserController.uploadImage.bind(UserController))



module.exports = router
