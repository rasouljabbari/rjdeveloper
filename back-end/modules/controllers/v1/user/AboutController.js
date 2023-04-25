const Controller = require('../../Controller')
const UserAboutTransform = require(`${config.path.transform}/v1/UserAboutTransform`)
module.exports = new class AboutController extends Controller {
    async index(req, res) {
        try {
            const about = await this.model.About.findOne()
            return this.successResponse(req, res, 'about-me', new UserAboutTransform().transform(about))
        } catch (error) {
            return this.serverErrorHandler(error, req, res)
        }
    }
}
