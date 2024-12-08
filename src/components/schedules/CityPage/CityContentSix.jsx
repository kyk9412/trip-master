function CityContentSix() {
	return (
		<>
			<div class="container_textbox">
				<img src="./images/schedule.png" alt="" />
				<h2 class="title">내가 선호하는 여행 일정은?</h2>
				<span class="text">
					선택해주신 스타일로 일정을 만들어 드려요.
				</span>
			</div>
			<div class="schedule-preference">
				<div class="schedule-option">
					<div class="checkbox-item">
						<input
							type="checkbox"
							name="packed_schedule"
							id="packed_schedule"
						/>
						<label for="packed_schedule" class="citytext">
							뺴곡한 일정 선호
						</label>
					</div>
					<div class="checkbox-item">
						<input
							type="checkbox"
							name="spacious_schedule"
							id="spacious_schedule"
						/>
						<label for="spacious_schedule" class="citytext">
							널널한 일정 선호
						</label>
					</div>
				</div>
			</div>
		</>
	);
}

export default CityContentSix;
