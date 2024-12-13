import "./style.css";
import "./common.css";
import "./schedule.css";
import "./PlaceSelection.module.css";
import "./TripDuration.module.css";
import "./TripCompanion.module.css";
import "./TravelStyle.module.css";
import "./SchedulePreference.module.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Main from "./components/Main";
import { useState } from "react";

function App() {
	const [modalState, setModalState] = useState(false);
	return (
		<>
			<Header setModalState={setModalState} />
			<Nav modalState={modalState} setModalState={setModalState} />
			<Main />
		</>
	);
}

export default App;
