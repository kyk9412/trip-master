import Domestic from "./Domestic";
import Foreign from "./Foreign";

function CityContentTwo({ stepStatus, setStepStatus }) {
	const { option } = stepStatus;

	return (
		<>
			{option === "domestic" && (
				<Domestic setStepStatus={setStepStatus} />
			)}
			{option === "foreign" && <Foreign setStepStatus={setStepStatus} />}
		</>
	);
}

export default CityContentTwo;
