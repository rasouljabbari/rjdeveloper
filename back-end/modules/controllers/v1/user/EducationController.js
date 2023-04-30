const Controller = require(`${config.path.controller}/Controller`)
const UserEducationTransform = require(`${config.path.transform}/v1/UserEducationTransform`)
module.exports = new class EducationController extends Controller {
    async list(req, res) {
        try {
            const educations = await this.model.Education.find({})
            if (educations) {
                return this.successResponse(req, res, 'educations', new UserEducationTransform().transform(educations))
            }
        } catch (error) {
            this.serverErrorHandler(error, req, res)
        }
    }

}
