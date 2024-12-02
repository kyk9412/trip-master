function Korea() {
	return (
		<main>
			<div class="main-container">
				<div class="nav_bar">
					<div class="nav_number">2/6</div>
				</div>
				<div class="main-wrap">
					<div class="container_textbox">
						<img src="images/airplane.png" alt="" />
						<h2 class="title">국내에서 떠나고 싶은 곳은?</h2>
						<span class="text">1곳을 선택해주세요.</span>
					</div>
					<div class="korea">
						<p>대한민국</p>
						<div class="korea_area">
							<div class="area">
								<input
									type="checkbox"
									name="gapyeong"
									id="gapyeong"
								/>
								<label for="gapyeong" class="citytext">
									가평'양평
								</label>
							</div>
							<div class="area">
								<input
									type="checkbox"
									name="gangneung"
									id="gangneung"
								/>
								<label for="gangneung" class="citytext">
									강릉'속초
								</label>
							</div>
							<div class="area">
								<input
									type="checkbox"
									name="gyeongju"
									id="gyeongju"
								/>
								<label for="gyeongju" class="citytext">
									경주
								</label>
							</div>
							<div class="area">
								<input
									type="checkbox"
									name="busan"
									id="busan"
								/>
								<label for="busan" class="citytext">
									부산
								</label>
							</div>
							<div class="area">
								<input
									type="checkbox"
									name="yeosu"
									id="yeosu"
								/>
								<label for="yeosu" class="citytext">
									여수
								</label>
							</div>
							<div class="area">
								<input
									type="checkbox"
									name="incheon"
									id="incheon"
								/>
								<label for="incheon" class="citytext">
									인천
								</label>
							</div>
							<div class="area">
								<input
									type="checkbox"
									name="jeonju"
									id="jeonju"
								/>
								<label for="jeonju" class="citytext">
									전주
								</label>
							</div>
							<div class="area">
								<input type="checkbox" name="jeju" id="jeju" />
								<label for="jeju" class="citytext">
									제주
								</label>
							</div>
							<div class="area">
								<input
									type="checkbox"
									name="chuncheon"
									id="chuncheon"
								/>
								<label for="chuncheon" class="citytext">
									춘천'홍천
								</label>
							</div>
							<div class="area">
								<input
									type="checkbox"
									name="taean"
									id="taean"
								/>
								<label for="taean" class="citytext">
									태안
								</label>
							</div>
							<div class="area">
								<input
									type="checkbox"
									name="tongyeong"
									id="tongyeong"
								/>
								<label for="tongyeong" class="citytext">
									통영'거제'남해
								</label>
							</div>
							<div class="area">
								<input
									type="checkbox"
									name="pohang"
									id="pohang"
								/>
								<label for="pohang" class="citytext">
									포항'안동
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
export default Korea;
