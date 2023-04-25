const express = require('express')
const router = express.Router()
const ControllerApi = config.path.controller


// Validation Controller
const validationRules = require(`${ControllerApi}/v1/admin/ValidationController`)

// middlewares
const {uploadImage} = require("../../middlewares/uploadMiddleware");
const apiAuth = require("../../middlewares/apiAuth");

// Controllers
const HomeController = require(`${ControllerApi}/v1/HomeController`)
const AuthController = require(`${ControllerApi}/v1/admin/AuthController`)
const UserController = require(`${ControllerApi}/v1/admin/UserController`)
const AdminAboutController = require(`${ControllerApi}/v1/admin/AboutController`)

// User Controller
const UserAboutController = require(`${ControllerApi}/v1/user/AboutController`)

const multer = require('multer');
const upload = multer();

// user
router.get('/', HomeController.index)

router.post('/register', validationRules.register, uploadImage.fields([{name: 'cv', maxCount: 1}, {
    name: 'profile',
    maxCount: 1
}]), AuthController.register.bind(AuthController))

router.post('/login', upload.none(), AuthController.login.bind(AuthController))
router.get('/user', apiAuth, UserController.index.bind(UserController))


// user routes
router.get('/about-me', UserAboutController.index.bind(UserAboutController))


const adminRouter = express.Router()

adminRouter.get('/about-me', AdminAboutController.index.bind(AdminAboutController))
adminRouter.post('/about-me', upload.none(), validationRules.storeAbout, AdminAboutController.store.bind(AdminAboutController))


router.use('/admin', apiAuth, adminRouter)


module.exports = router
