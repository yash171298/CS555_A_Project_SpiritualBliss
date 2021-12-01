const express = require('express');
const router = express.Router();
const data = require('../data/feedback');
const feedbackData = data;
const { ObjectId } = require('mongodb');
const xss = require('xss');

router.get('/', async (req, res) => {
    try {
        res.render('pages/contactUs', {title: "Contact-Us"});
    } catch (e) {
        res.status(500).json({
            error: e
        });
    }
});


router.post('/contactUs', async (req, res) => {

    try {
        let flag = false;
        if (!req.body.first_name) {
            flag = true;
            throw { "result": false, statusCode: 400, "message": "", error: "Please provide first name." };
        }

        if (!req.body.last_lame) {
            flag = true;
            throw { "result": false, statusCode: 400, "message": "", error: "Please provide last name." }
        }

        if (!req.body.email_id) {
            flag = true;
            throw { "result": false, statusCode: 400, "message": "", error: "Please provide valid email address." }
        }
        if(!req.body.feedback_title){
            flag = true;
            throw { "result": false, statusCode: 400, "message": "", error: "Please select user type." }
        }

   

        let feedback = {
            feedback_title: xss(req.body.feedback_title),
            summary: xss(req.body.summary),
            email_id: xss(req.body.email_id),
            first_name: xss(req.body.first_name),
            last_name: xss(req.body.last_name)
        }

        const bloguserdata = user;
        const { feedback_title, summary, email_id, first_name, last_name} = bloguserdata;
        const newUser = await users.createnewuser(feedback_title, summary, email_id, first_name, last_name);

        if (newUser == null) {
            flag = true
        }
        if (!newUser) {
            flag = true;
        }
        res.status(newUser.statusCode?newUser.statusCode:200).render('pages/SuccessMessage', { keyobject: newUser.data, message: newUser.message, error: newUser.error })
    } catch (e) {
        res.status(e.statusCode ? e.statusCode : 400).render('pages/SuccessMessage', { message: e.message, error: e.error })
    }
});

module.exports = router;

