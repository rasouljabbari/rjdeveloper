const Controller = require(`${config.path.controller}/Controller`)

module.exports = new class EducationController extends Controller {
    async store(req, res) {
        try {
            const {title} = req.body;

            // Validation and Show errors
            if (await this.showValidationErrors(req, res))
                return;

            // Check if user with this email already exists
            const existingEducation = await this.model.Education.findOne({title});
            if (existingEducation) {
                return res.status(409).json({
                    errors: [
                        {
                            'field': 'title',
                            'message': 'عنوان سطح تحصیلاتی نمی تواند تکراری باشد',
                        }
                    ],
                    success: false
                })
            }
            // Create new user
            const newEducation = await this.model.Education.create(req.body);
            return this.successResponse(req, res, 'education', newEducation)

        } catch (error) {
            this.serverErrorHandler(error, req, res)
        }

    }

}
