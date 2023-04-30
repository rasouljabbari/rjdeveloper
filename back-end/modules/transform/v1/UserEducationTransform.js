const Transform = require('../Transform')
module.exports = class UserEducationTransform extends Transform {

    transform(items) {
        let arr = []
        items.forEach(item => {
            arr.push({
                title: item?.title,
                description: item?.description,
                start: item?.start,
                end: item?.end,
                createdAt: item?.createdAt,
            })
        })
        return arr
    }

}
