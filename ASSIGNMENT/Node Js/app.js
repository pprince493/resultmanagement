const express = require('express');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true })); // New

app.use(express.json()); // New

app.set('view engine', '.ejs');
var cors = require('cors');
app.use(cors());

const db = require("./config/db.config.js");
// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and Resync with { force: true }");
// });


const appRoute = require('./routes/appRoute.js');
const teacherLoginRoute = require('./routes/teacherLoginRoute.js');
const studentRoute = require('./routes/studentRoute.js');
const teacherRoute = require('./routes/teacherRoute.js');
app.use('/', appRoute);
app.use('/', teacherLoginRoute);
app.use('/', studentRoute);
app.use('/', teacherRoute);

app.listen(port, () => console.log(`Listening on port ${port}`));