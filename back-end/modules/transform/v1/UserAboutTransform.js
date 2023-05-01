const Transform = require('../Transform')
module.exports = class UserAboutTransform extends Transform {

    transform(item) {
        console.log(item)
        return {
            profile: item?.profile,
            cv: item?.cv,
            full_name: item?.full_name,
            instagram: item?.instagram,
            whatsapp: item?.whatsapp,
            email: item?.email,
            mobile: item?.mobile,
            birthday: item?.birthday,
            location: item?.location,
            description: item?.description,
            job_title: item?.job_title,
            job_level: item?.job_level,
            updatedAt: item?.updatedAt,
            createdAt: item?.createdAt,
        }
    }

}
