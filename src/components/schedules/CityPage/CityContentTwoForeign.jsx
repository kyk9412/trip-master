import React from "react";
import Style from "../../../styles/CityContentTwoForeign.module.css";

function CityContentTwoForeign() {
	return (
		<>
			<div className={Style.container_textbox}>
				<img
					src="/images/airplane.png"
					style={{ width: "50px" }}
					alt=""
				/>
				<h2 className={Style.title}>해외에서 떠나고 싶은 곳은?</h2>
				<span className={Style.text}>1곳을 선택해주세요.</span>
			</div>
			<div className={Style.foreign}>
				<div className={Style.foreign_area}>
					<p className={Style.country}>일본</p>
					<div className={Style.area}>
						<input type="checkbox" name="tokyo" id="tokyo" />
						<label htmlFor="tokyo" className={Style.citytext}>
							도쿄
						</label>
					</div>
					<div className={Style.area}>
						<input type="checkbox" name="fukuoka" id="fukuoka" />
						<label htmlFor="fukuoka" className={Style.citytext}>
							후쿠오카
						</label>
					</div>
					<div className={Style.area}>
						<input type="checkbox" name="osaka" id="osaka" />
						<label htmlFor="osaka" className={Style.citytext}>
							오사카
						</label>
					</div>
					<div className={Style.area}>
						<input type="checkbox" name="shizuoka" id="shizuoka" />
						<label htmlFor="shizuoka" className={Style.citytext}>
							시즈오카
						</label>
					</div>
					<div className={Style.area}>
						<input type="checkbox" name="nagoya" id="nagoya" />
						<label htmlFor="nagoya" className={Style.citytext}>
							나고야
						</label>
					</div>
					<div className={Style.area}>
						<input type="checkbox" name="sapporo" id="sapporo" />
						<label htmlFor="sapporo" className={Style.citytext}>
							삿포로
						</label>
					</div>
					<div className={Style.area}>
						<input type="checkbox" name="okinawa" id="okinawa" />
						<label htmlFor="okinawa" className={Style.citytext}>
							오키나와
						</label>
					</div>
				</div>

				<div className={Style.foreign_area}>
					<p className={Style.country}>중화/중국</p>
					<div className={Style.area}>
						<input
							type="checkbox"
							name="kaohsiung"
							id="kaohsiung"
						/>
						<label htmlFor="kaohsiung" className={Style.citytext}>
							가오슝
						</label>
					</div>
					<div className={Style.area}>
						<input type="checkbox" name="qingdao" id="qingdao" />
						<label htmlFor="qingdao" className={Style.citytext}>
							칭다오
						</label>
					</div>
					<div className={Style.area}>
						<input type="checkbox" name="hongkong" id="hongkong" />
						<label htmlFor="hongkong" className={Style.citytext}>
							홍콩
						</label>
					</div>
					<div className={Style.area}>
						<input type="checkbox" name="taipei" id="taipei" />
						<label htmlFor="taipei" className={Style.citytext}>
							타이베이
						</label>
					</div>
					<div className={Style.area}>
						<input type="checkbox" name="shanghai" id="shanghai" />
						<label htmlFor="shanghai" className={Style.citytext}>
							상하이
						</label>
					</div>
					<div className={Style.area}>
						<input type="checkbox" name="beijing" id="beijing" />
						<label htmlFor="beijing" className={Style.citytext}>
							베이징
						</label>
					</div>
				</div>

				<div className={Style.foreign_area}>
					<p className={Style.country}>유럽</p>
					<div className={Style.area}>
						<input type="checkbox" name="granada" id="granada" />
						<label htmlFor="granada" className={Style.citytext}>
							그라나다
						</label>
					</div>
					<div className={Style.area}>
						<input
							type="checkbox"
							name="dubrovnik"
							id="dubrovnik"
						/>
						<label htmlFor="dubrovnik" className={Style.citytext}>
							두브로브니크
						</label>
					</div>
					<div className={Style.area}>
						<input type="checkbox" name="lisbon" id="lisbon" />
						<label htmlFor="lisbon" className={Style.citytext}>
							리스본
						</label>
					</div>
					<div className={Style.area}>
						<input type="checkbox" name="milan" id="milan" />
						<label htmlFor="milan" className={Style.citytext}>
							밀라논
						</label>
					</div>
					<div className={Style.area}>
						<input type="checkbox" name="brussels" id="brussels" />
						<label htmlFor="brussels" className={Style.citytext}>
							브뤼셀
						</label>
					</div>
					<div className={Style.area}>
						<input type="checkbox" name="seville" id="seville" />
						<label htmlFor="seville" className={Style.citytext}>
							세비야
						</label>
					</div>
					<div className={Style.area}>
						<input type="checkbox" name="porto" id="porto" />
						<label htmlFor="porto" className={Style.citytext}>
							포르투
						</label>
					</div>
					<div className={Style.area}>
						<input type="checkbox" name="paris" id="paris" />
						<label htmlFor="paris" className={Style.citytext}>
							파리
						</label>
					</div>
					<div className={Style.area}>
						<input type="checkbox" name="prague" id="prague" />
						<label htmlFor="prague" className={Style.citytext}>
							프라하
						</label>
					</div>
					<div className={Style.area}>
						<input type="checkbox" name="rome" id="rome" />
						<label htmlFor="rome" className={Style.citytext}>
							로마
						</label>
					</div>
					<div className={Style.area}>
						<input type="checkbox" name="london" id="london" />
						<label htmlFor="london" className={Style.citytext}>
							런던
						</label>
					</div>
					<div className={Style.area}>
						<input
							type="checkbox"
							name="barcelona"
							id="barcelona"
						/>
						<label htmlFor="barcelona" className={Style.citytext}>
							바르셀로나
						</label>
					</div>
					<div className={Style.area}>
						<input type="checkbox" name="vienna" id="vienna" />
						<label htmlFor="vienna" className={Style.citytext}>
							빈
						</label>
					</div>
					<div className={Style.area}>
						<input type="checkbox" name="florence" id="florence" />
						<label htmlFor="florence" className={Style.citytext}>
							피렌체
						</label>
					</div>
					<div className={Style.area}>
						<input
							type="checkbox"
							name="interlaken"
							id="interlaken"
						/>
						<label htmlFor="interlaken" className={Style.citytext}>
							인터라켄
						</label>
					</div>
					<div className={Style.area}>
						<input type="checkbox" name="madrid" id="madrid" />
						<label htmlFor="madrid" className={Style.citytext}>
							마드리드
						</label>
					</div>
					<div className={Style.area}>
						<input type="checkbox" name="budapest" id="budapest" />
						<label htmlFor="budapest" className={Style.citytext}>
							부다페스트
						</label>
					</div>
					<div className={Style.area}>
						<input
							type="checkbox"
							name="vladivostok"
							id="vladivostok"
						/>
						<label htmlFor="vladivostok" className={Style.citytext}>
							블라디보스토크
						</label>
					</div>
					<div className={Style.area}>
						<input type="checkbox" name="zurich" id="zurich" />
						<label htmlFor="zurich" className={Style.citytext}>
							취리히
						</label>
					</div>
					<div className={Style.area}>
						<input
							type="checkbox"
							name="frankfurt"
							id="frankfurt"
						/>
						<label htmlFor="frankfurt" className={Style.citytext}>
							프랑크푸르트
						</label>
					</div>
					<div className={Style.area}>
						<input type="checkbox" name="munich" id="munich" />
						<label htmlFor="munich" className={Style.citytext}>
							뮌헨
						</label>
					</div>
					<div className={Style.area}>
						<input
							type="checkbox"
							name="amsterdam"
							id="amsterdam"
						/>
						<label htmlFor="amsterdam" className={Style.citytext}>
							암스테르담
						</label>
					</div>
					<div className={Style.area}>
						<input type="checkbox" name="berlin" id="berlin" />
						<label htmlFor="berlin" className={Style.citytext}>
							베를린
						</label>
					</div>
				</div>

				<div className={Style.foreign_area}>
					<p className={Style.country}>동남아시아</p>
					<div className={Style.area}>
						<input type="checkbox" name="gapyeong" id="gapyeong" />
						<label htmlFor="gapyeong" className={Style.citytext}>
							나트랑
						</label>
					</div>
					<div className={Style.area}>
						<input
							type="checkbox"
							name="gangneung"
							id="gangneung"
						/>
						<label htmlFor="gangneung" className={Style.citytext}>
							치앙마이
						</label>
					</div>
					<div className={Style.area}>
						<input type="checkbox" name="gyeongju" id="gyeongju" />
						<label htmlFor="gyeongju" className={Style.citytext}>
							푸꾸옥
						</label>
					</div>
					<div className={Style.area}>
						<input type="checkbox" name="busan" id="busan" />
						<label htmlFor="busan" className={Style.citytext}>
							라오스
						</label>
					</div>
					<div className={Style.area}>
						<input type="checkbox" name="yeosu" id="yeosu" />
						<label htmlFor="yeosu" className={Style.citytext}>
							쿠알라룸푸르
						</label>
					</div>
					<div className={Style.area}>
						<input type="checkbox" name="incheon" id="incheon" />
						<label htmlFor="incheon" className={Style.citytext}>
							달랏
						</label>
					</div>
					<div className={Style.area}>
						<input type="checkbox" name="incheon" id="incheon" />
						<label htmlFor="incheon" className={Style.citytext}>
							다낭
						</label>
					</div>
					<div className={Style.area}>
						<input type="checkbox" name="incheon" id="incheon" />
						<label htmlFor="incheon" className={Style.citytext}>
							방콕
						</label>
					</div>
					<div className={Style.area}>
						<input type="checkbox" name="incheon" id="incheon" />
						<label htmlFor="incheon" className={Style.citytext}>
							세부
						</label>
					</div>
					<div className={Style.area}>
						<input type="checkbox" name="incheon" id="incheon" />
						<label htmlFor="incheon" className={Style.citytext}>
							코타키나발루
						</label>
					</div>
					<div className={Style.area}>
						<input type="checkbox" name="incheon" id="incheon" />
						<label htmlFor="incheon" className={Style.citytext}>
							싱가포르
						</label>
					</div>
					<div className={Style.area}>
						<input type="checkbox" name="incheon" id="incheon" />
						<label htmlFor="incheon" className={Style.citytext}>
							하노이
						</label>
					</div>
					<div className={Style.area}>
						<input type="checkbox" name="incheon" id="incheon" />
						<label htmlFor="incheon" className={Style.citytext}>
							호치민
						</label>
					</div>
					<div className={Style.area}>
						<input type="checkbox" name="incheon" id="incheon" />
						<label htmlFor="incheon" className={Style.citytext}>
							발리
						</label>
					</div>
					<div className={Style.area}>
						<input type="checkbox" name="incheon" id="incheon" />
						<label htmlFor="incheon" className={Style.citytext}>
							푸켓
						</label>
					</div>
					<div className={Style.area}>
						<input type="checkbox" name="incheon" id="incheon" />
						<label htmlFor="incheon" className={Style.citytext}>
							보라카이
						</label>
					</div>
				</div>

				<div className={Style.foreign_area}>
					<p className={Style.country}>서아시아</p>
					<div className={Style.area}>
						<input type="checkbox" name="gapyeong" id="gapyeong" />
						<label htmlFor="gapyeong" className={Style.citytext}>
							두바이
						</label>
					</div>
				</div>

				<div className={Style.foreign_area}>
					<p className={Style.country}>미주</p>
					<div className={Style.area}>
						<input type="checkbox" name="gapyeong" id="gapyeong" />
						<label htmlFor="gapyeong" className={Style.citytext}>
							벤쿠버
						</label>
					</div>
					<div className={Style.area}>
						<input
							type="checkbox"
							name="gangneung"
							id="gangneung"
						/>
						<label htmlFor="gangneung" className={Style.citytext}>
							샌프란시스코
						</label>
					</div>
					<div className={Style.area}>
						<input type="checkbox" name="gyeongju" id="gyeongju" />
						<label htmlFor="gyeongju" className={Style.citytext}>
							토론토
						</label>
					</div>
					<div className={Style.area}>
						<input type="checkbox" name="busan" id="busan" />
						<label htmlFor="busan" className={Style.citytext}>
							하와이
						</label>
					</div>
					<div className={Style.area}>
						<input type="checkbox" name="yeosu" id="yeosu" />
						<label htmlFor="yeosu" className={Style.citytext}>
							뉴욕
						</label>
					</div>
					<div className={Style.area}>
						<input type="checkbox" name="incheon" id="incheon" />
						<label htmlFor="incheon" className={Style.citytext}>
							로스앤젤레스
						</label>
					</div>
				</div>

				<div className={Style.foreign_area}>
					<p className={Style.country}>미주</p>
					<div className={Style.area}>
						<input type="checkbox" name="gapyeong" id="gapyeong" />
						<label htmlFor="gapyeong" className={Style.citytext}>
							시드니
						</label>
					</div>
					<div className={Style.area}>
						<input
							type="checkbox"
							name="gangneung"
							id="gangneung"
						/>
						<label htmlFor="gangneung" className={Style.citytext}>
							멜버른
						</label>
					</div>
					<div className={Style.area}>
						<input type="checkbox" name="gyeongju" id="gyeongju" />
						<label htmlFor="gyeongju" className={Style.citytext}>
							괌
						</label>
					</div>
					<div className={Style.area}>
						<input type="checkbox" name="busan" id="busan" />
						<label htmlFor="busan" className={Style.citytext}>
							사이판
						</label>
					</div>
				</div>
			</div>
		</>
	);
}

export default CityContentTwoForeign;
