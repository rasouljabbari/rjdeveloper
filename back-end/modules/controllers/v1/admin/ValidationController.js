const {check} = require('express-validator');

const mobileRegex = /^(\+98|0)?9\d{9}$/;
const dateRegex = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;


module.exports = {
    register: [
        check('profile')
            .notEmpty().withMessage('آپلود عکس پروفایل الزامی است')
            .isIn(["PNG", "JPEG", "WEBP"]).withMessage('فرمت فایل بارگزاری شده باید یکی از فرمت های png,jpeg,jpg,webp باشد'),

        check('full_name')
            .notEmpty().trim().escape().withMessage('وارد کردن نام و نام خانوادگی اجباری است.')
            .isLength({min: 5}).withMessage('نام و نام خانوادگی حداقل می بایست 5 کاراکتر باشد.'),

        check('job_title')
            .notEmpty().trim().escape()
            .withMessage('وارد کردن عنوان شغلی اجباری است.'),

        check('instagram')
            .notEmpty().trim().escape()
            .withMessage('وارد کردن لینک های اینستاگرام اجباری است.'),

        check('whatsapp')
            .notEmpty().trim().escape()
            .withMessage('وارد کردن شماره واتساپ اجباری است.')
            .matches(mobileRegex)
            .withMessage('فرمت شماره واتساپ وارد شده معتبر نیست'),

        check('cv')
            .notEmpty().withMessage('آپلود فایل رزومه الزامی است'),

        check('email')
            .notEmpty().trim().escape()
            .withMessage('وارد کردن ایمیل اجباری است.')
            .isEmail().withMessage('فرمت ایمیل معتبر نیست'),

        check('mobile')
            .notEmpty().trim().escape()
            .withMessage('وارد کردن شماره موبایل اجباری است.')
            .matches(mobileRegex)
            .withMessage('فرمت شماره موبایل وارد شده معتبر نیست'),

        check('birthday')
            .notEmpty().trim().escape()
            .withMessage('وارد کردن تاریخ تولد اجباری است.'),

        check('location')
            .notEmpty().trim().escape()
            .withMessage('وارد کردن آدرس محل زندگی اجباری است.'),

        check('password')
            .notEmpty().trim().escape().withMessage('وارد کردن رمز اجباری است.')
            .isLength({min: 8}).withMessage('حداقل تعداد رمز 8 رقم می باشد'),
    ],

    storeAbout: [
        check('description')
            .notEmpty().trim().escape()
            .withMessage('وارد کردن توضیحات اجباری است.').isLength({min: 100})
            .withMessage('توضیحات حداقل می بایست 100 کاراکتر باشد.'),

        check('job_title')
            .notEmpty().trim().escape()
            .withMessage('وارد کردن عنوان شغلی اجباری است.'),

        check('job_level')
            .notEmpty().trim().escape().withMessage('وارد کردن سطح مهارت اجباری است.')
    ],

    storeEducation: [
        check('title')
            .notEmpty().trim().escape()
            .withMessage('وارد کردن عنوان اجباری است.'),

        check('start')
            .notEmpty().trim().escape()
            .withMessage('وارد کردن سال شروع تحصیل اجباری است.')
            .isInt().withMessage('سال شروع باید به صورت عدد باشد')
            .isLength({min: 4, max: 4}).withMessage('سال شروع تحصیل باید 4 کاراکتر باشد.'),

        check('end')
            .notEmpty().trim().escape()
            .withMessage('وارد کردن سال پایان تحصیل اجباری است.')
            .isInt().withMessage('سال پایان باید به صورت عدد باشد')
            .isLength({min: 4, max: 4}).withMessage('سال پایان تحصیل باید 4 کاراکتر باشد.'),

        check('description')
            .notEmpty().trim().escape()
            .withMessage('وارد کردن توضیحات اجباری است.'),
    ],

    storeSkills: [
        check('title')
            .notEmpty().trim().escape()
            .withMessage('وارد کردن عنوان مهارت اجباری است.'),

        check('icon')
            .notEmpty().trim().escape()
            .withMessage('وارد کردن آیکون مهارت اجباری است.'),
    ],

    storeExperience: [
        check('title')
            .notEmpty().trim().escape()
            .withMessage('وارد کردن عنوان شغل اجباری است.'),

        check('company')
            .notEmpty().trim().escape()
            .withMessage('وارد کردن عنوان شرکت اجباری است.'),

        check('status')
            .notEmpty().trim().escape().withMessage('وارد کردن وضعیت کاری اجباری است.')
            .isIn(['Full-time', 'Freelance']).withMessage('وضعیت وارد شده معتبر نیست'),

        check('start_date')
            .notEmpty().trim().escape()
            .withMessage('وارد کردن تاریخ شروع همکاری اجباری است.')
            .matches(dateRegex)
            .withMessage('Date field is invalid'),
            // .matches(dateRegex)
            // .withMessage('تاریخ شروع همکاری معتبر نیست'),

        // check('end_date')
        //     .isEmpty(),

        check('location')
            .notEmpty().trim().escape()
            .withMessage('وارد کردن آدرس اجباری است.'),

        check('description')
            .notEmpty().trim().escape()
            .withMessage('وارد کردن توضیحات اجباری است.'),

        check('skills')
            .notEmpty().trim().escape()
            .withMessage('وارد کردن مهارت ها اجباری است.'),
    ],

    storeContact: [

        check('full_name')
            .notEmpty().trim().escape().withMessage('Entering the first and last name is mandatory.')
            .isLength({min: 5}).withMessage('The first and last name must be at least 5 characters long'),

        check('email')
            .notEmpty().trim().escape()
            .withMessage('Entering email is mandatory.')
            .isEmail().withMessage('The email format is not valid.'),

        check('mobile')
            .notEmpty().trim().escape()
            .withMessage('Entering the mobile number is mandatory.')
            .matches(mobileRegex)
            .withMessage('The entered mobile number format is not valid.'),

        check('message')
            .notEmpty().trim().escape()
            .withMessage('Entering the text of the message is mandatory.'),
    ],
}
