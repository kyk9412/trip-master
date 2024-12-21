import React from "react";
import Style from "../../../styles/TripCompanion.module.css";
function TripCompanion() {
	return (
		<>
			<div className={Style.container_textbox}>
				<img src="/images/with.png" style={{ width: "50px" }} alt="" />
				<h2 className={Style.title}>누구와 함께 떠나나요?</h2>
				<span className={Style.text}>다중 선택이 가능해요.</span>
			</div>
			<div className={Style.trip}>
				<div className={Style.trip_together}>
					<div className={Style.checkbox_item}>
						<input type="checkbox" name="alone" id="alone" />
						<label htmlFor="alone" className={Style.citytext}>
							혼자
						</label>
					</div>
					<div className={Style.checkbox_item}>
						<input type="checkbox" name="friend" id="friend" />
						<label htmlFor="friend" className={Style.citytext}>
							친구와
						</label>
					</div>
					<div className={Style.checkbox_item}>
						<input type="checkbox" name="couple" id="couple" />
						<label htmlFor="couple" className={Style.citytext}>
							연인or배우자와
						</label>
					</div>
					<div className={Style.checkbox_item}>
						<input type="checkbox" name="child" id="child" />
						<label htmlFor="child" className={Style.citytext}>
							아이와
						</label>
					</div>
					<div className={Style.checkbox_item}>
						<input type="checkbox" name="parents" id="parents" />
						<label htmlFor="parents" className={Style.citytext}>
							부모님과
						</label>
					</div>
					<div className={Style.checkbox_item}>
						<input type="checkbox" name="other" id="other" />
						<label htmlFor="other" className={Style.citytext}>
							기타
						</label>
					</div>
				</div>
			</div>
		</>
	);
}

export default TripCompanion;
