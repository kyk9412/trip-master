import PlaceSelection from "./PlaceSelection";
import CityContentTwo from "./CityContentTwo";
import TripDuration from "./TripDuration";
import TripCompanion from "./TripCompanion";
import TravelStyle from "./TravelStyle";
import SchedulePreference from "./SchedulePreference";

function CityContents({ progressNumber }) {
	return (
		<div class="main-wrap">
			{progressNumber === 1 && <PlaceSelection />}
			{progressNumber === 2 && <CityContentTwo />}
			{progressNumber === 3 && <TripDuration />}
			{progressNumber === 4 && <TripCompanion />}
			{progressNumber === 5 && <TravelStyle />}
			{progressNumber === 6 && <SchedulePreference />}
		</div>
	);
}

export default CityContents;
