import Header from "../../../components/Header";

function Login() {
	return (
		<>
			<Header />
			<main>
				<section class="main-container">
					<article class="main-wrap">
						<div class="main-visual">
							<img
								src="./images/intro_main.png"
								alt="intro_main"
							/>
						</div>
						<div class="container_textbox">
							<div class="title">
								나를 아는 여행앱
								<br />
								트리플
							</div>
							<div class="text">
								예약부터 일정까지 여행이 더 쉬워집니다
							</div>
						</div>
						<div class="sec_login">
							<form onsubmit="">
								<div class="input_form">
									<input
										type="text"
										id="loginid"
										placeholder="아이디 입력"
										autocomplete="off"
									/>
									<input
										type="password"
										id="password"
										placeholder="비밀번호 입력 (영문,숫자,특수문자 조합)"
										autocomplete="off"
									/>
								</div>
							</form>
							<div class="saveid-btn">
								<input
									type="checkbox"
									name="saveid"
									id="saveid"
								/>
								<label for="saveid">아이디저장</label>
							</div>
							<div class="login-btn">
								<button
									type="button"
									id="loginbtn"
									class="loginbtn"
								>
									로그인
								</button>
							</div>
						</div>

						<div class="ect-login">
							<div class="sns-login">
								<button type="button" class="sns-login">
									<img src="./images/kakao.png" alt="kakao" />
								</button>
								<button type="button" class="sns-login">
									<img src="./images/naver.png" alt="naver" />
								</button>
								<button type="button" class="sns-login">
									<img
										src="./images/facebook.png"
										alt="facebook"
									/>
								</button>
								<button type="button" class="sns-login">
									<img src="./images/apple.png" alt="apple" />
								</button>
							</div>
						</div>
					</article>
				</section>
			</main>
		</>
	);
}
export default Login;
