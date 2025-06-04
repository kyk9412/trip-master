import { useNavigate } from 'react-router-dom';

function StartButton({ text = 'text', to }) {
  const navigate = useNavigate(); // navigate 사용

  const handleOnClick = () => {
    navigate(to); // 클릭 시 to로 이동
  };

  return (
    <button
      className="w-[240px] h-[80px] px-[30px] py-[15px] rounded-[30px] border-none bg-[#f0c168] text-white font-bold font-['Roboto'] 
      uppercase cursor-pointer flex items-center justify-center shadow-md hover:bg-[#f09930] hover:shadow-lg transition-all duration-300 
      ease-in-out overflow-hidden relative group lg:w-[210px] lg:h-[60px] lg:rounded-[23px]"
      onClick={handleOnClick}
    >
      <span className="mr-2 transition-transform duration-300 group-hover:scale-125">✈️</span>
      <span className="text-[17px] font-bold text-center transition-transform duration-300 ease group-hover:scale-110 lg:text-[14px]">
        {text}
      </span>
    </button>
  );
}

export default StartButton;
