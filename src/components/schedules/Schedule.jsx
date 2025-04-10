import { useNavigate } from 'react-router';
import styled from 'styled-components';

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2rem;
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

const SubTitle = styled.h3`
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 18px;
  color: #3b90f9;
  font-weight: bold;
  animation: FadeInTitle 1s ease 0.75s forwards;
`;

const MainTitle = styled.h2`
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: 700;
  font-size: 45px;
  line-height: 60px;
  margin-top: 20px;
  animation: FadeInTitle 1s ease 0.75s forwards;
`;

const BottomText = styled.div`
  padding-top: 180px;
  padding-left: 50px;
  margin-bottom: 300px;
  animation: FadeInSub 1.3s ease 0.95s forwards;
`;
const BottomDescription = styled.p`
  font-size: 23px;
  font-weight: bold;
  color: #474747;
  margin-bottom: 25px;
  letter-spacing: -1px;
`;
const BottomTitle = styled.h3`
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  word-break: keep-all;
  color: #787878;
  margin-bottom: 35px;
`;

const Logo = styled.h1`
  position: absolute;
  top: 20px;
  left: 170px;
  font-size: 2rem;
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: 800;
  letter-spacing: 1px;
  color: #000;
  text-shadow:
    rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px,
    rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px,
    rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

const ContainerTextbox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
`;
const Title = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 1.2;
  color: #333;
  margin-bottom: 1rem;
`;
const Text = styled.div`
  font-size: 1rem;
  font-weight: 400;
  color: #a2a1a1;
`;

const Button = styled.button`
  width: 230px;
  height: 50px;
  background-color: var(--color_button_box);
  border-radius: 30px;
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 4rem;
`;

function Schedule() {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate('/');
  };

  function handleClick() {
    navigate('/schedule/citypage');
  }
  return (
    <MainContainer>
      <Logo onClick={handleOnClick}>TRIPLIBERTY</Logo>

      <SubContainer>
        <div className="schedule-textbox">
          <SubTitle>일정 생성 관리</SubTitle>
          <MainTitle>
            나만의 여행 일정,
            <br />
            AI로 간편해졌어요
          </MainTitle>
        </div>

        <div className="schedule_content_img">
          <BottomText>
            <BottomDescription>어떤 취향이든, 다 맞춰주니까</BottomDescription>
            <BottomTitle>
              어떤 여행 취향이든 간단히 알려만 주세요.
              <br />
              AI는 여러분의 취향에 꼭 맞는 일정을 추천해 드립니다.
            </BottomTitle>
          </BottomText>
        </div>
      </SubContainer>

      <SubContainer>
        <ContainerTextbox>
          <Title>
            취향에 맞게 일정을
            <br />
            추천해 드려요!
          </Title>
          <div className="text">
            <Text>순식간에 여행 준비 끝</Text>
          </div>
        </ContainerTextbox>

        <div className="main-visual">
          <img src="images/schedules/main-visual.png" alt="" />
        </div>
      </SubContainer>

      <Button onClick={handleClick}>AI 추천 일정보기</Button>
    </MainContainer>
  );
}

export default Schedule;
