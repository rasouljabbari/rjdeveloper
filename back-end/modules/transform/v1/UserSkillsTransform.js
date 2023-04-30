const Transform = require('../Transform')
module.exports = class UserSkillsTransform extends Transform {

    transform(items) {
        let arr = []
        items.forEach(item => {
            arr.push({
                title: item?.title,
                icon: item?.icon,
            })
        })
        return arr
    }

}
