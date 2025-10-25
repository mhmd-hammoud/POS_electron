import { useEffect, useState } from "react"
import "./App.css"
import { Display } from "./Components/Display"
import { InputPerson } from "./Components/InputPerson"
import { useCallback } from "react"

function App() {
	const [data, setData] = useState([]);

	// Make this function async
	const fetchData = useCallback(async () => {
		try {
			// Await the promise from the backend
			const people = await window.sqlite.personDB?.readAllPerson();
			setData(people);
		} catch (error) {
			console.error("Failed to fetch data:", error);
		}
	}, []);

	useEffect(() => {
		fetchData();
	}, [fetchData]);
	return (
		<>
			<div className='background'>
				<div className='App'>
					<InputPerson fetchData={fetchData} />
					<Display data={data} />
				</div>
				<span>The background is provided by loading.io </span>
			</div>
		</>
	)
}

export default App
