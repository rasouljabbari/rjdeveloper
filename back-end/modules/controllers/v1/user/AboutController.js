const Controller = require('../../Controller')
const UserAboutTransform = require(`${config.path.transform}/v1/UserAboutTransform`)
module.exports = new class AboutController extends Controller {
    async index(req, res) {
        try {
            const about = await this.model.About.findOne()
            const user = await this.model.User.findOne()

            return res.status(200).json({
                status: 200,
                about: new UserAboutTransform().transform(about),
                user: new UserAboutTransform().transform(user)
            })
            
        } catch (error) {
            return this.serverErrorHandler(error, req, res)
        }
    }
}
