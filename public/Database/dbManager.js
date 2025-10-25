const { Sequelize } = require("sequelize");
const path = require("path");

// Use the same logic as before to locate the database file
const dbPath =
	process.env.NODE_ENV === "development"
		? "./demo_table.db"
		: path.join(process.resourcesPath, "./demo_table.db");

// Initialize Sequelize with the database path
const sequelize = new Sequelize({
	dialect: "sqlite",
	storage: dbPath,
	logging: console.log, // Set to false to disable logging SQL queries
});

// ******************** THE FIX IS HERE ********************
// We will call this function to ensure models are loaded.
const loadModels = () => {
	// This line will load and define the Person model.
	// If you add more models, you'll import them here too.
	require("./models/Person");
};
// **********************************************************

// Function to initialize and sync the database
const initializeDB = async () => {
	try {
		await sequelize.authenticate();
		console.log("Database connection established successfully.");

		// Load all your models
		loadModels();

		// Sync all defined models to the DB.
		await sequelize.sync({ force: false });
		console.log("All models were synchronized successfully.");
	} catch (error) {
		console.error("Unable to connect to or sync the database:", error);
	}
};

module.exports = { sequelize, initializeDB };
