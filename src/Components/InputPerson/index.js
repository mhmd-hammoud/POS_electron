import styles from "./inputPerson.module.css"

export const InputPerson = ({ fetchData }) => {
	const onSubmit = async e => {
		e.preventDefault();
		const name = e.target.name?.value;
		const age = e.target.age?.value;
		if (!name || !age) return;

		try {
			// Await the insertion and then fetch new data
			await window.sqlite.personDB?.insertPerson(name, parseInt(age));
			fetchData(); // This now correctly waits for the insert to finish
		} catch (error) {
			console.error("Failed to insert person:", error);
		}

		e.target.reset();
	};

	return (
		<>
			<form className={styles.form} onSubmit={onSubmit}>
				<fieldset>
					<legend>Enter Details</legend>
					<div className={styles.form_field}>
						<label htmlFor='name'>Name</label>
						<input type='text' id='name' name='name' />
					</div>
					<div className={styles.form_field}>
						<label htmlFor='age'>Age</label>
						<input type='number' id='age' name='age' />
					</div>
					<div className={styles.form_submit}>
						<input type='submit' value='ADD' />
					</div>
				</fieldset>
			</form>
		</>
	)
}
