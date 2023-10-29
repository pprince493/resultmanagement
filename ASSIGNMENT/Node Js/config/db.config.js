const env = require("./env.js");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(env.database, env.username, env.password, {
    host: env.host,
    dialect: env.dialect,
    operatorsAliases: false,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models
db.student = require("../model/student.model.js")(sequelize, Sequelize);
db.teacher = require("../model/teacher.model.js")(sequelize, Sequelize);

module.exports = db;