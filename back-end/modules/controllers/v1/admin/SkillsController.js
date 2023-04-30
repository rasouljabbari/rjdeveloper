const Controller = require(`${config.path.controller}/Controller`)

module.exports = new class SkillsController extends Controller {

    async store(req, res) {
        try {
            const {title} = req.body;

            // Validation and Show errors
            if (await this.showValidationErrors(req, res))
                return;

            // Check if user with this email already exists
            const existingSkills = await this.model.Skills.findOne({title});
            if (existingSkills) {
                return res.status(409).json({
                    errors: [
                        {
                            'field': 'title',
                            'message': 'عنوان مهارت نمی تواند تکراری باشد',
                        }
                    ],
                    success: false
                })
            }

            // Create new skill
            const newSkills = await this.model.Skills.create(req.body);
            return this.successResponse(req, res, 'skill', newSkills)

        } catch (error) {
            this.serverErrorHandler(error, req, res)
        }
    }

    async list(req, res) {
        try {
            const skills = await this.model.Skills.find({})
            if (skills) {
                return this.successResponse(req, res, 'skills', skills)
            }
        } catch (error) {
            this.serverErrorHandler(error, req, res)
        }
    }

    async update(req, res) {

        const id = req.params.id;
        const updateData = req.body;

        try {

            const skill = await this.model.Skills.findOne({_id: id})

            if (skill) {

                await Object.keys(updateData).forEach(key => {
                    // check if req.body key is null jump to next index
                    if (updateData[key]) {
                        skill[key] = updateData[key];
                    }
                });

                // Validation and Show errors
                if (await this.showValidationErrors(req, res))
                    return;

                await skill.save();

                return this.successResponse(req, res, 'skill', skill)
            } else {
                return res.status(404).json({
                    error: 'مهارت مورد نظر وجود ندارد',
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
            const deletedSkill = await this.model.Skills.findByIdAndRemove(id)
            if (deletedSkill) {
                return this.successResponse(req, res, 'skill', 'با موفقیت حذف شد')
            } else {
                return res.status(404).json({
                    error: 'مهارت مورد نظر وجود ندارد',
                    success: false
                })
            }
        } catch (err) {
            return this.serverErrorHandler(err, req, res)
        }
    }

}
