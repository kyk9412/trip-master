import React from "react";
import Style from "../../../styles/TripDuration.module.css";

function TripDuration() {
	return (
		<>
			<div className={Style.container_textbox}>
				<img
					src="/images/calendar.png"
					style={{ width: "50px" }}
					alt=""
				/>
				<h2 className={Style.title}>여행기간은?</h2>
				<span className={Style.text}>원하는 기간을 선택해 주세요.</span>
			</div>
			<div className={Style.trip}>
				<div className={Style.trip_duration}>
					<div className={Style.checkbox_item}>
						<input type="checkbox" name="daytrip" id="daytrip" />
						<label htmlFor="daytrip" className={Style.citytext}>
							당일치기
						</label>
					</div>
					<div className={Style.checkbox_item}>
						<input
							type="checkbox"
							name="overnight_trip"
							id="overnight_trip"
						/>
						<label
							htmlFor="overnight_trip"
							className={Style.citytext}
						>
							1박2일
						</label>
					</div>
					<div className={Style.checkbox_item}>
						<input
							type="checkbox"
							name="2night_3day"
							id="2night_3day"
						/>
						<label htmlFor="2night_3day" className={Style.citytext}>
							2박3일
						</label>
					</div>
					<div className={Style.checkbox_item}>
						<input
							type="checkbox"
							name="3night_4day"
							id="3night_4day"
						/>
						<label htmlFor="3night_4day" className={Style.citytext}>
							3박4일
						</label>
					</div>
					<div className={Style.checkbox_item}>
						<input
							type="checkbox"
							name="4night_5day"
							id="4night_5day"
						/>
						<label htmlFor="4night_5day" className={Style.citytext}>
							4박5일
						</label>
					</div>
					<div className={Style.checkbox_item}>
						<input
							type="checkbox"
							name="5night_6day"
							id="5night_6day"
						/>
						<label htmlFor="5night_6day" className={Style.citytext}>
							5박6일
						</label>
					</div>
				</div>
			</div>
		</>
	);
}

export default TripDuration;
