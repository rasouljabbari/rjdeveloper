const Controller = require('../../Controller')

module.exports = new class ContactController extends Controller {
    async list(req, res) {
        try {
            const about = await this.model.Contact.find({}).sort({start_date: -1})
            return this.successResponse(req, res, 'contact', about)
        } catch (error) {
            return this.serverErrorHandler(error, req, res)
        }
    }

}
