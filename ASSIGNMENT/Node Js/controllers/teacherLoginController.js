const db = require("../config/db.config.js");
const Teacher = db.teacher;

exports.verify = (req, res) => {
    Teacher.findAll({
        where: {
            userName: req.body.userName,
            password: req.body.password
        }
    }).then(function(teachers) {
        // if (teachers.length == 0) {
        //     res.render('teacherLogin')
        // } else {
        //     res.redirect('/view');
        //     // Student.findAll().then((students) => {

        //     //     res.render('teacherView', { 'data': students });
        //     // });
        // }
        res.json(teachers);
    })
};