const Controller = require(`${config.path.controller}/Controller`)

module.exports = new class ExperienceController extends Controller {

    async store(req, res) {
        try {

            // Validation and Show errors
            if (await this.showValidationErrors(req, res))
                return;

            // Create new experience
            const newExperience = await this.model.Experience.create(req.body);
            return this.successResponse(req, res, 'experience', newExperience)

        } catch (error) {
            this.serverErrorHandler(error, req, res)
        }
    }

    async list(req, res) {
        try {
            const experience = await this.model.Experience.find({}).sort({start_date: -1}) // sort with date
            if (experience) {
                return this.successResponse(req, res, 'experience', experience)
            }
        } catch (error) {
            this.serverErrorHandler(error, req, res)
        }
    }

    async update(req, res) {

        const id = req.params.id;
        const updateData = req.body;

        try {

            const experience = await this.model.Experience.findOne({_id: id})

            if (experience) {

                await Object.keys(updateData).forEach(key => {
                    // check if req.body key is null jump to next index
                    if (updateData[key]) {
                        experience[key] = updateData[key];
                    }
                });

                if (req.body?.status !== 'Freelance' && req.body?.status !== 'Full-time') {
                    return res.status(400).json({
                        "errors": [
                            {
                                "field": "status",
                                "message": 'وضعیت وارد شده معتبر نیست'
                            }
                        ],
                        "success": false
                    })
                }

                await experience.save();

                return this.successResponse(req, res, 'experience', experience)
            } else {
                return res.status(404).json({
                    error: 'سابقه کاری مورد نظر وجود ندارد',
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
            const deletedExperience = await this.model.Experience.findByIdAndRemove(id)
            if (deletedExperience) {
                return this.successResponse(req, res, 'experience', 'با موفقیت حذف شد')
            } else {
                return res.status(404).json({
                    error: 'سابقه کاری مورد نظر وجود ندارد',
                    success: false
                })
            }
        } catch (err) {
            return this.serverErrorHandler(err, req, res)
        }
    }

}
