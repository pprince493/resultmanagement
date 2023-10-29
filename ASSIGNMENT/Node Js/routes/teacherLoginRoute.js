const express = require('express');
const app = express();


const teacherData = require("../controllers/teacherLoginController.js");
app.post("/check", teacherData.verify);

module.exports = app;