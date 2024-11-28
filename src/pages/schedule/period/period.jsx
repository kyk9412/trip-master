function Period() {
	return (
		<main>
			<div class="main-container">
				<div class="nav_bar">
					<div class="nav_number">3/6</div>
				</div>
				<div class="main-wrap">
					<div class="container_textbox">
						<img src="images/calendar.png" alt="" />
						<h2 class="title">여행기간은?</h2>
						<span class="text">원하는 기간을 선택해 주세요.</span>
					</div>
					<div class="trip">
						<div class="trip_duration">
							<div class="checkbox-item">
								<input
									type="checkbox"
									name="daytrip"
									id="daytrip"
								/>
								<label for="daytrip" class="citytext">
									당일치기
								</label>
							</div>
							<div class="checkbox-item">
								<input
									type="checkbox"
									name="overnight_trip"
									id="overnight_trip"
								/>
								<label for="overnight_trip" class="citytext">
									1박2일
								</label>
							</div>
							<div class="checkbox-item">
								<input
									type="checkbox"
									name="2night_3day"
									id="2night_3day"
								/>
								<label for="2night_3day" class="citytext">
									2박3일
								</label>
							</div>
							<div class="checkbox-item">
								<input
									type="checkbox"
									name="3night_4day"
									id="3night_4day"
								/>
								<label for="3night_4day" class="citytext">
									3박4일
								</label>
							</div>
							<div class="checkbox-item">
								<input
									type="checkbox"
									name="4night_5day"
									id="4night_5day"
								/>
								<label for="4night_5day" class="citytext">
									4박5일
								</label>
							</div>
							<div class="checkbox-item">
								<input
									type="checkbox"
									name="5night_6day"
									id="5night_6day"
								/>
								<label for="5night_6day" class="citytext">
									5박6일
								</label>
							</div>
						</div>
					</div>

					<div class="next-button">
						<button type="button">다음</button>
					</div>
				</div>
			</div>
		</main>
	);
}
export default Period;
