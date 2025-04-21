import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ScheduledBtnContainer = styled.div`
  // display: flex;
  // gap: 10px;
  // position: absolute;
  // z-index: 1;
  // top: 55%;
  // left: 50%;
  // transform: translateX(-50%);
`;
const ScheduledBtn = styled.div`
  width: 240px;
  height: 80px;
  padding: 15px 30px;
  color: #fff;
  border: none;
  border-radius: 30px;
  background-color: #f0c168;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  text-transform: uppercase;
  font-family: 'Roboto', sans-serif;
  transition: background-color 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #f09930;
    color: white;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.5);
  }
`;

const BtnIcon = styled.div`
  margin-right: 10px;
  transition: transform 0.3s ease;

  ${ScheduledBtn}:hover & {
    transform: scale(1.3);
  }
`;

const BtnText = styled.div`
  font-size: 17px;
  font-weight: bold;
  text-align: center;
  transition: transform 0.3s ease;

  ${ScheduledBtn}:hover & {
    transform: scale(1.1);
  }
`;

function ScheduleButton({ text = 'text', to }) {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(to); // 클릭 시 to로 이동
  };

  return (
    <ScheduledBtn type="button" onClick={handleOnClick}>
      <BtnIcon>✈️</BtnIcon>
      <BtnText>{text}</BtnText>
    </ScheduledBtn>
  );
}

export default ScheduleButton;
