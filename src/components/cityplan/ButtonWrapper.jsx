import styled from 'styled-components';

const ContainerTextbox = styled.div`
  font-family: 'Nanum Gothic', sans-serif;
  text-align: center;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 30px;
  line-height: 36px;
  font-weight: 700;
  color: #232323;
  margin-top: 15px;
  padding-bottom: 10px;

  @media (max-width: 1100px) {
    font-size: 27px;
  }
`;

const Text = styled.p`
  font-size: 15px;
  font-weight: 400;
  color: #787878;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  max-width: 800px;
  margin: 50px auto 0;
  position: relative;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
`;

const TitleText = styled.div`
  position: absolute;
  top: -32px;
  left: 0;
  font-size: 15px;
  font-weight: 400;
  color: #787878;

  @media (max-width: 1100px) {
    position: absolute;
    top: -32px;
    left: 45px;
  }
`;

function ButtonWrapper({ children, direction = 'row', titleText }) {
  return (
    <Wrapper direction={direction}>
      <TitleText>{titleText}</TitleText>
      {children}
    </Wrapper>
  );
}

export { ContainerTextbox, Title, Text, Wrapper, Image };
export default ButtonWrapper;
