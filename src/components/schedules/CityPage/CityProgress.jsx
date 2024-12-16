function CityProgress({ stepStatus }) {
	return (
		<div class="nav_bar">
			<div class="nav_number">{stepStatus.progress}/6</div>
		</div>
	);
}

export default CityProgress;
