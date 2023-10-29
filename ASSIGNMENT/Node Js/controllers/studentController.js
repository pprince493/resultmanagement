const db = require("../config/db.config.js");
const Student = db.student;

exports.search = (req, res) => {
    Student.findAll({
        where: {
            rollNo: req.body.rollNo,
            name: req.body.name
        }
    }).then(function(students) {
        // if (students.length == 0) {
        //     res.render('studentNotFound')
        // } else {
        //     res.render('studentResult', { 'data': students })
        // }
        res.json(students);
    })
};