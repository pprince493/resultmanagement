const express = require('express');
const app = express();

const studentData = require("../controllers/studentController.js");

app.post('/search', studentData.search);

module.exports = app;