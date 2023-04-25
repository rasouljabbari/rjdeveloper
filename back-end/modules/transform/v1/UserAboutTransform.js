const Transform = require('../Transform')
module.exports = class UserAboutTransform extends Transform {

    transform(item) {
        return {
            description: item?.description,
            job_title: item?.job_title,
            job_level: item?.job_level,
            updatedAt: item?.updatedAt,
            createdAt: item?.createdAt,
        }
    }

}
