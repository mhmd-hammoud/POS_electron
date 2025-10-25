const { DataTypes } = require("sequelize");
const { sequelize } = require("../dbManager");

const Person = sequelize.define(
    "Person",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        tableName: "person",
        timestamps: false, // Disables the createdAt and updatedAt columns
    }
);

module.exports = Person;