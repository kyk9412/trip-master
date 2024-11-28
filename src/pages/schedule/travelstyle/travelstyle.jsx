function Travelstyle() {
	return (
		<main>
			<div class="main-container">
				<div class="nav_bar">
					<div class="nav_number">5/6</div>
				</div>
				<div class="main-wrap">
					<div class="container_textbox">
						<img src="./images/bag.png" alt="" />
						<h2 class="title">내가 선호하는 여행 스타일은?</h2>
						<span class="text">다중 선택이 가능해요.</span>
					</div>
					<div class="trip">
						<div class="trip_style">
							<div class="checkbox-item">
								<input
									type="checkbox"
									name="activity"
									id="activity"
								/>
								<label for="activity" class="citytext">
									체험액티비티
								</label>
							</div>
							<div class="checkbox-item">
								<input
									type="checkbox"
									name="hotplace"
									id="hotplace"
								/>
								<label for="hotplace" class="citytext">
									SNS 핫플레이스
								</label>
							</div>
							<div class="checkbox-item">
								<input
									type="checkbox"
									name="nature"
									id="nature"
								/>
								<label for="nature" class="citytext">
									자연과 함께
								</label>
							</div>
							<div class="checkbox-item">
								<input
									type="checkbox"
									name="tourist"
									id="tourist"
								/>
								<label for="tourist" class="citytext">
									유명 관광지는 필수
								</label>
							</div>
							<div class="checkbox-item">
								<input
									type="checkbox"
									name="healing"
									id="healing"
								/>
								<label for="healing" class="citytext">
									여유롭게 힐링
								</label>
							</div>
							<div class="checkbox-item">
								<input
									type="checkbox"
									name="culture"
									id="culture"
								/>
								<label for="culture" class="citytext">
									문화예술역사
								</label>
							</div>
							<div class="checkbox-item">
								<input
									type="checkbox"
									name="travel_destination"
									id="travel_destination"
								/>
								<label
									for="travel_destination"
									class="citytext"
								>
									여행지 느낌 물씬
								</label>
							</div>
							<div class="checkbox-item">
								<input
									type="checkbox"
									name="shopping"
									id="shopping"
								/>
								<label for="shopping" class="citytext">
									쇼핑은 열정적으로
								</label>
							</div>
							<div class="checkbox-item">
								<input type="checkbox" name="food" id="food" />
								<label for="food" class="citytext">
									관광보다 먹방
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
export default Travelstyle;
