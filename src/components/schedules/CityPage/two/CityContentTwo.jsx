import Domestic from "./Domestic";
import Foreign from "./Foreign";

function CityContentTwo({ stepStatus, setStepStatus }) {
	const {
		option: { one },
	} = stepStatus;

	return (
		<>
			{one === "domestic" && <Domestic setStepStatus={setStepStatus} />}
			{one === "foreignCountry" && (
				<Foreign setStepStatus={setStepStatus} />
			)}
		</>
	);
}

export default CityContentTwo;
