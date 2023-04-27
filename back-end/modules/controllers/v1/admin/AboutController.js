const Controller = require('../../Controller')

module.exports = new class AboutController extends Controller {
    async index(req, res) {
        try {
            const about = await this.model.About.findOne()
            return this.successResponse(req, res, 'about-me', about)
        } catch (error) {
            return this.serverErrorHandler(error, req, res)
        }
    }

    async store(req, res) {

        // Validation and Show errors
        if (await this.showValidationErrors(req, res)) return

        try {
            const aboutMe = await this.model.About.findOne();

            if (!aboutMe) {
                const newAboutMe = new this.model.About(req.body)
                await newAboutMe.save();
            } else {
                Object.keys(req.body).forEach(key => {
                    aboutMe[key] = req.body[key];
                });
                await aboutMe.save();
            }
            return this.successResponse(req, res, 'about-me', aboutMe)

        } catch (error) {
            this.serverErrorHandler(error, req, res)
        }
    }

}
