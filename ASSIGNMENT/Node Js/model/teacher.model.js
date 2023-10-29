module.exports = (sequelize, Sequelize) => {
    const Teacher = sequelize.define("teacher", {
        userName: {
            type: Sequelize.STRING,
            primaryKey: true,
            unique: true
        },
        password: {
            type: Sequelize.STRING

        }
    });
    return Teacher;
};