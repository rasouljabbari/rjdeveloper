// Models
const Skills = require('./../models/skills');
const Experience = require('./../models/experience');
const About = require('./../models/about');
const User = require('./../models/user');
const Education = require('./../models/education');
const Contact = require('./../models/contact');
const {validationResult} = require("express-validator");

const sendErrorDev = (err, res) => {
    console.log(err, res)
    const statusCode = err.statusCode || 500;
    return res.status(statusCode).json({
        status: statusCode,
        message: err.message,
        stack: err.stack
    })
}
const sendErrorProd = (err, res) => {
    const statusCode = err.statusCode || 500;
    return res.status(statusCode).json({
        status: statusCode,
        message: "Something went very wrong!",
    })
}

module.exports = class Controller {
    constructor() {
        this.model = {Skills, Experience, About, Education, User, Contact}
    }

    // success message
    successResponse(req, res, label, data) {
        const statusCode = res.statusCode || 200;
        return res.status(statusCode).json(
            {
                status: statusCode,
                [label]: data
            });
    }

//Show Errors For Validation Rules
    async showValidationErrors(req, res) {
        const errors = await validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json(
                {
                    errors: errors.array({onlyFirstError: true}).map(error => {
                        return {
                            'field': error.path,
                            'message': error.msg,
                        }
                    }),
                    success: false
                });
        }
    }

    serverErrorHandler(err, req, res) {
        // Set status code and error message
        if (config.NODE_ENV === 'dev') {
            sendErrorDev(err, res)
        } else {
            sendErrorProd(err, res)
        }
    }

    customError(res, statusCode, field, message) {
        return res.status(statusCode).json(
            {
                errors: [
                    {
                        field,
                        message
                    }],
                success: false
            });
    }
}
