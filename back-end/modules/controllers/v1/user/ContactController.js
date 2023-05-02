const Controller = require('../../Controller')

module.exports = new class ContactController extends Controller {

    async store(req, res) {
        try {

            // Validation and Show errors
            if (await this.showValidationErrors(req, res))
                return;

            // Create new user
            const contact = await this.model.Contact.create(req.body);
            if (contact) {
                return this.successResponse(req, res, 'contact', 'successfully send message')
            }

        } catch (error) {
            this.serverErrorHandler(error, req, res)
        }
    }

}
