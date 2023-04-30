const Controller = require(`${config.path.controller}/Controller`)
const UserSkillsTransform = require(`${config.path.transform}/v1/UserSkillsTransform`)
module.exports = new class SkillsController extends Controller {
    async list(req, res) {
        try {
            const educations = await this.model.Skills.find({})
            if (educations) {
                return this.successResponse(req, res, 'skills', new UserSkillsTransform().transform(educations))
            }
        } catch (error) {
            this.serverErrorHandler(error, req, res)
        }
    }

}
