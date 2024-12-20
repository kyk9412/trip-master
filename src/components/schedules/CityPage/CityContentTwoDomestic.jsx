import React from "react";
import Style from "../../../styles/CityContentTwoDomestic.module.css";

function CityContentTwoDomestic() {
	return (
		<>
			<div className={Style.container_textbox}>
				<img
					src="/images/airplane.png"
					style={{ width: "50px" }}
					alt=""
				/>
				<h2 className={Style.title}>국내에서 떠나고 싶은 곳은?</h2>
				<span className={Style.text}>1곳을 선택해주세요.</span>
			</div>
			<div className={Style.korea}>
				<p>대한민국</p>
				<div className={Style.korea_area}>
					<div className={Style.area}>
						<input type="checkbox" name="gapyeong" id="gapyeong" />
						<label htmlFor="gapyeong" className={Style.citytext}>
							가평'양평
						</label>
					</div>
					<div className={Style.area}>
						<input
							type="checkbox"
							name="gangneung"
							id="gangneung"
						/>
						<label htmlFor="gangneung" className={Style.citytext}>
							강릉'속초
						</label>
					</div>
					<div className={Style.area}>
						<input type="checkbox" name="gyeongju" id="gyeongju" />
						<label htmlFor="gyeongju" className={Style.citytext}>
							경주
						</label>
					</div>
					<div className={Style.area}>
						<input type="checkbox" name="busan" id="busan" />
						<label htmlFor="busan" className={Style.citytext}>
							부산
						</label>
					</div>
					<div className={Style.area}>
						<input type="checkbox" name="yeosu" id="yeosu" />
						<label htmlFor="yeosu" className={Style.citytext}>
							여수
						</label>
					</div>
					<div className={Style.area}>
						<input type="checkbox" name="incheon" id="incheon" />
						<label htmlFor="incheon" className={Style.citytext}>
							인천
						</label>
					</div>
					<div className={Style.area}>
						<input type="checkbox" name="jeonju" id="jeonju" />
						<label htmlFor="jeonju" className={Style.citytext}>
							전주
						</label>
					</div>
					<div className={Style.area}>
						<input type="checkbox" name="jeju" id="jeju" />
						<label htmlFor="jeju" className={Style.citytext}>
							제주
						</label>
					</div>
					<div className={Style.area}>
						<input
							type="checkbox"
							name="chuncheon"
							id="chuncheon"
						/>
						<label htmlFor="chuncheon" className={Style.citytext}>
							춘천'홍천
						</label>
					</div>
					<div className={Style.area}>
						<input type="checkbox" name="taean" id="taean" />
						<label htmlFor="taean" className={Style.citytext}>
							태안
						</label>
					</div>
					<div className={Style.area}>
						<input
							type="checkbox"
							name="tongyeong"
							id="tongyeong"
						/>
						<label htmlFor="tongyeong" className={Style.citytext}>
							통영'거제'남해
						</label>
					</div>
					<div className={Style.area}>
						<input type="checkbox" name="pohang" id="pohang" />
						<label htmlFor="pohang" className={Style.citytext}>
							포항'안동
						</label>
					</div>
				</div>
			</div>
		</>
	);
}

export default CityContentTwoDomestic;
