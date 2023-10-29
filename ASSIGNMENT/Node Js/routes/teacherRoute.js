const express = require('express');
const app = express();

const data = require("../controllers/teacherController.js");
app.post("/create", data.create);

// Retrieve all book
app.get("/view", data.findAll);

app.get("/delete/:rollNo", data.delete);

app.get("/edit/:rollNo", data.edit);

app.post("/update", data.update);

module.exports = app;