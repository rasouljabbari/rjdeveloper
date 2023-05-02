const Controller = require(`${config.path.controller}/Controller`)
const UserExperienceTransform = require(`${config.path.transform}/v1/UserExperienceTransform`)
const UserSkillsTransform = require(`${config.path.transform}/v1/UserSkillsTransform`)
const UserEducationTransform = require(`${config.path.transform}/v1/UserEducationTransform`)

module.exports = new class ResumeController extends Controller {
    async list(req, res) {
        try {
            const experience = await this.model.Experience.find({}).sort({start_date: -1}) // sort with date
            const educations = await this.model.Education.find({}).sort({start_date: -1}) // sort with date
            const skills = await this.model.Skills.find({}).sort({start_date: -1}) // sort with date
            let data = {
                educations: new UserEducationTransform().transform(educations),
                experience: new UserExperienceTransform().transform(experience),
                skills: new UserSkillsTransform().transform(skills)
            }
            if (data) {
                return this.successResponse(req, res, 'resume', data)
            }
        } catch (error) {
            this.serverErrorHandler(error, req, res)
        }
    }

}
