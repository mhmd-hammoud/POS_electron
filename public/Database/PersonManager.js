const Person = require("./models/Person");

// The functions are now async and use Sequelize methods
const readAllPerson = async () => {
	try {
		const people = await Person.findAll();
		// Convert Sequelize model instances to plain JavaScript objects
		return people.map(p => p.get({ plain: true }));
	} catch (err) {
		console.error("Error reading people:", err);
		throw err;
	}
};

const insertPerson = async (name, age) => {
	try {
		const newPerson = await Person.create({ name, age });
		console.log(`Inserted person with ID: ${newPerson.id}`);
		return newPerson.get({ plain: true });
	} catch (err) {
		console.error("Error inserting person:", err);
		throw err;
	}
};

module.exports = {
	readAllPerson,
	insertPerson,
};