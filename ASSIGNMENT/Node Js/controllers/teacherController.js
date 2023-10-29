const db = require("../config/db.config.js");
const Student = db.student;


// Post a Student
exports.create = (req, res) => {
    // Save to MySQL database
    Student.create({
        rollNo: req.body.rollNo,
        name: req.body.name,
        dateOfBirth: req.body.dateOfBirth,
        score: req.body.score,
    }).then(() => {

        Student.findAll().then((students) => {
            // res.render('teacherView', { 'data': students });
            res.json(students);
        });
    });
};

// Get all students
exports.findAll = (req, res) => {
    Student.findAll().then((students) => {

        //res.render('teacherView', { 'data': students });
        res.json(students);
    });
};

exports.delete = (req, res) => {
    const id = req.params.rollNo;
    Student.destroy({
        where: { rollNo: id },
    }).then(() => {
        Student.findAll().then((students) => {
            // res.render('teacherView', { 'data': students });
            res.json(students);
        });
    });
};


exports.edit = (req, res) => {
    Student.findAll({
        where: {
            rollNo: req.params.rollNo
        }
    }).then(function(students) {
        // res.render('editRecord', { 'data': students })
        res.json(students);

    })
};

exports.update = (req, res) => {
    Student.update({
        rollNo: req.body.rollNo,
        name: req.body.name,
        dateOfBirth: req.body.dateOfBirth,
        score: req.body.score,
    }, { where: { rollNo: req.body.rollNo } }).then(() => {
        Student.findAll().then((students) => {
            // res.render('teacherView', { 'data': students });
            res.json(students);
        });
    });
};