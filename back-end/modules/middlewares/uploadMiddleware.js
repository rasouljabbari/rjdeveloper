const multer = require('multer')
const {mkdirp} = require('mkdirp')

const imageStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        let year = new Date().getFullYear()
        let month = new Date().getMonth() + 1
        let day = new Date().getDay()
        let dir = `./public/uploads/images/${year}/${month}/${day}`

        mkdirp.sync(dir)
        cb(null, dir)
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname.replace(/ /g, '-'))
    }
})

const imageFilter = (req, file, cb) => {
    console.log(file.mimetype)
    // cv
    if (file.fieldname === 'cv') {
        if (file.mimetype !== 'application/pdf') {
            return cb(new Error('Only PDFs are allowed for CVs'));
        } else {
            cb(null, true)
        }
    } else if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/webp') {
        cb(null, true)
    } else return cb(new Error('Only png , jpeg and webp are allowed for images'));
}

const uploadImage = multer({
    storage: imageStorage,
    fileFilter: imageFilter,
    limits: {
        fileSize: 1024 * 1024 * 10 // 10MB file size limit
    }
})

module.exports = {
    uploadImage,
}