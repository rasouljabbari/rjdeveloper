const Controller = require(`${config.path.controller}/Controller`)
const UserExperienceTransform = require(`${config.path.transform}/v1/UserExperienceTransform`)

module.exports = new class ExperienceController extends Controller {
    async list(req, res) {
        try {
            const experience = await this.model.Experience.find({}).sort({start_date: -1}) // sort with date
            if (experience) {
                return this.successResponse(req, res, 'experience', new UserExperienceTransform().transform(experience))
            }
        } catch (error) {
            this.serverErrorHandler(error, req, res)
        }
    }

}
