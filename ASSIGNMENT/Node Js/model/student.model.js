module.exports = (sequelize, Sequelize) => {
    const Student = sequelize.define("student", {
        rollNo: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            unique: true
        },
        name: {
            type: Sequelize.STRING
        },
        dateOfBirth: {
            type: Sequelize.DATEONLY,
            get: function() {
                var myDate = new Date(this.getDataValue('dateOfBirth'));
                return myDate
                    .toLocaleDateString('hi-IN', { timeZone: 'UTC' });
            }

        },
        score: {
            type: Sequelize.INTEGER
        }
    });
    return Student;
};