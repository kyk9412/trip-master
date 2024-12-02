function With() {
	return (
		<main>
			<div class="main-container">
				<div class="nav_bar">
					<div class="nav_number">4/6</div>
				</div>
				<div class="main-wrap">
					<div class="container_textbox">
						<img src="images/with.png" alt="" />
						<h2 class="title">누구와 함께 떠나나요?</h2>
						<span class="text">다중 선택이 가능해요.</span>
					</div>
					<div class="trip">
						<div class="trip_together">
							<div class="checkbox-item">
								<input
									type="checkbox"
									name="alone"
									id="alone"
								/>
								<label for="alone" class="citytext">
									혼자
								</label>
							</div>
							<div class="checkbox-item">
								<input
									type="checkbox"
									name="friend"
									id="friend"
								/>
								<label for="friend" class="citytext">
									친구와
								</label>
							</div>
							<div class="checkbox-item">
								<input
									type="checkbox"
									name="couple"
									id="couple"
								/>
								<label for="couple" class="citytext">
									연인or배우자와
								</label>
							</div>
							<div class="checkbox-item">
								<input
									type="checkbox"
									name="child"
									id="child"
								/>
								<label for="child" class="citytext">
									아이와
								</label>
							</div>
							<div class="checkbox-item">
								<input
									type="checkbox"
									name="parents"
									id="parents"
								/>
								<label for="parents" class="citytext">
									부모님과
								</label>
							</div>
							<div class="checkbox-item">
								<input
									type="checkbox"
									name="other"
									id="other"
								/>
								<label for="other" class="citytext">
									기타
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
export default With;
