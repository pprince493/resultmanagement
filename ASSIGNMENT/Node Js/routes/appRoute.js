const express = require('express');
const app = express();

app.get('', (req, res) => {
    res.render('home');
});
app.get('/logout', (req, res) => {
    res.render('home');
});

//app.get('/view',appController.view);

app.get('/login', (req, res) => {
    res.render('teacherLogin');
});

app.get('/student', (req, res) => {
    res.render('studentView');
});


app.get('/add', (req, res) => {
    res.render('addRecord');
});


module.exports = app;