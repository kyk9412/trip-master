import { NavLink, useNavigate } from "react-router";
import ScheduleButton from "@common/ScheduleButton";

function Main() {
	const navigate = useNavigate();
	const handleOnClick = () => {
		navigate("/schedule");
	};

	return (
		<main>
			<section className="main-container">
				<div className="main-wrap">
					<div className="main_textbox">
						{/* <p>계획부터 예약까지, 여행이 쉬워지는</p>
						<h2>
							나를 아는 여행 앱 <br />
							트리플
						</h2> */}
					</div>
					<img src="images/main.jpg" alt="main_img" />
				</div>
			</section>

			<ScheduleButton
				text="AI 추천 일정보기"
				onClick={handleOnClick}
				to="/components/ScheduleManager"
			/>
			<ScheduleButton
				text="즉시 투어 가이드"
				onClick={handleOnClick}
				to="/components/TripDetails"
			/>

			<div className="popup-container">
				<div className="popup-content">
					<p className="popup-message">
						위치정보 이용권한 설정이 필요합니다.
					</p>
					<section className="popup-description">
						<p>내 근처 정보를 추천받고 싶다면</p>
						<span className="popup-notice">
							사용 중인 브라우저의 위치 권한을 허용해주세요.
						</span>
					</section>
					<button className="popup-close">
						<span className="close-text">닫기</span>
					</button>
				</div>
			</div>
		</main>
	);
}

export default Main;
