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
const AdminAboutController = require(`${ControllerApi}/v1/admin/AboutController`)
const AdminEducationController = require(`${ControllerApi}/v1/admin/EducationController`)
const AdminSkillsController = require(`${ControllerApi}/v1/admin/SkillsController`)
const AdminExperienceController = require(`${ControllerApi}/v1/admin/ExperienceController`)
const AdminContactController = require(`${ControllerApi}/v1/admin/ContactController`)

// User Controller
const UserAboutController = require(`${ControllerApi}/v1/user/AboutController`)
const EducationController = require(`${ControllerApi}/v1/user/EducationController`)
const SkillsController = require(`${ControllerApi}/v1/user/SkillsController`)
const ExperienceController = require(`${ControllerApi}/v1/user/ExperienceController`)
const ResumeController = require(`${ControllerApi}/v1/user/ResumeController`)
const ContactController = require(`${ControllerApi}/v1/user/ContactController`)

const multer = require('multer');
const upload = multer();

// user
router.get('/', HomeController.index)

router.post('/register', validationRules.register, uploadImage.fields([{name: 'cv', maxCount: 1}, {
    name: 'profile',
    maxCount: 1
}]), AuthController.register.bind(AuthController))

router.post('/login', upload.none(), AuthController.login.bind(AuthController))


// user routes
router.get('/about-me', UserAboutController.index.bind(UserAboutController))
router.get('/educations', EducationController.list.bind(EducationController))
router.get('/skills', SkillsController.list.bind(SkillsController))
router.get('/experience', ExperienceController.list.bind(ExperienceController))
router.get('/resume', ResumeController.list.bind(ResumeController))
router.post('/contact',upload.none(), validationRules.storeContact, ContactController.store.bind(ContactController))

const adminRouter = express.Router()

adminRouter.get('/contact', AdminContactController.list.bind(AdminContactController))
adminRouter.get('/about-me', AdminAboutController.index.bind(AdminAboutController))
adminRouter.post('/about-me', upload.none(), validationRules.storeAbout, AdminAboutController.store.bind(AdminAboutController))

adminRouter.get('/education', AdminEducationController.list.bind(AdminEducationController))
adminRouter.post('/education', upload.none(), validationRules.storeEducation, AdminEducationController.store.bind(AdminEducationController))
adminRouter.put('/education/:id', upload.none(), validationRules.storeEducation, AdminEducationController.update.bind(AdminEducationController))
adminRouter.delete('/education/:id', AdminEducationController.destroy.bind(AdminEducationController))

adminRouter.post('/skills', upload.none(), validationRules.storeSkills, AdminSkillsController.store.bind(AdminSkillsController))
adminRouter.get('/skills', AdminSkillsController.list.bind(AdminSkillsController))
adminRouter.put('/skills/:id', upload.none(), validationRules.storeSkills, AdminSkillsController.update.bind(AdminSkillsController))
adminRouter.delete('/skills/:id', AdminSkillsController.destroy.bind(AdminSkillsController))

adminRouter.post('/experience', upload.none(), validationRules.storeExperience, AdminExperienceController.store.bind(AdminExperienceController))
adminRouter.get('/experience', AdminExperienceController.list.bind(AdminExperienceController))
adminRouter.put('/experience/:id', upload.none(), validationRules.storeExperience, AdminExperienceController.update.bind(AdminExperienceController))
adminRouter.delete('/experience/:id', AdminExperienceController.destroy.bind(AdminExperienceController))

router.use('/admin', apiAuth, adminRouter)

router.all('*', (req, res) => {
    return res.status(404).json({
        status: 404,
        error: `Request URL ${req.path} not found!`,
    })
})


module.exports = router
