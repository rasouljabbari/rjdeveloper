const Transform = require('../Transform')
module.exports = class UserExperienceTransform extends Transform {

    transform(items) {
        let arr = []
        items.forEach(item => {
            arr.push({
                title: item?.title,
                company: item?.company,
                status: item?.status,
                start_date: item?.start_date,
                end_date: item?.end_date,
                location: item?.location,
                skills: item?.skills,
                description: item?.description,
                createdAt: item?.createdAt,
            })
        })
        return arr
    }

}
