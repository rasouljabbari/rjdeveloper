const Controller = require(`${config.path.controller}/Controller`)

module.exports = new class EducationController extends Controller {

    async list(req, res) {
        try {
            const educations = await this.model.Education.find({})
            if (educations) {
                return this.successResponse(req, res, 'educations', educations)
            }
        } catch (error) {
            this.serverErrorHandler(error, req, res)
        }
    }

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

    async update(req, res) {

        const id = req.params.id;
        const updateData = req.body;

        try {

            const education = await this.model.Education.findOne({_id: id})

            if (education) {

                await Object.keys(updateData).forEach(key => {
                    // check if req.body key is null jump to next index
                    if (updateData[key]) {
                        education[key] = updateData[key];
                    }
                });

                // Validation and Show errors
                if (await this.showValidationErrors(req, res))
                    return;

                await education.save();

                return this.successResponse(req, res, 'education', education)
            } else {
                return res.status(404).json({
                    error: 'سطح تحصیلات مورد نظر وجود ندارد',
                    success: false
                })
            }
        } catch (error) {
            this.serverErrorHandler(error, req, res)
        }
    }

    async destroy(req, res) {

        const id = req.params.id;
        try {
            const deletedEducation = await this.model.Education.findByIdAndRemove(id)
            if (deletedEducation) {
                return this.successResponse(req, res, 'education', null)
            } else {
                return res.status(404).json({
                    error: 'دوره تحصیلی مورد نظر وجود ندارد',
                    success: false
                })
            }
        } catch (err) {
            return this.serverErrorHandler(err, req, res)
        }
    }

}
