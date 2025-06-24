import usePlan from '@store/usePlan';
import { useNavigate } from 'react-router-dom';

function CityNextButton() {
  const { progress, canNext, setNextProgress, setCanNextByProgressValue } = usePlan();
  const navigate = useNavigate();
  const handleClick = () => {
    if (!canNext) {
      alert('이동할 수 없습니다.');
      return;
    }

    // 현재 프로그레스 6번이면 종료하고 라우트 이동하고 ai결과물 보여준다.
    if (progress === 6) {
      navigate('/schedule/result');
    }

    setNextProgress();
    setCanNextByProgressValue();
  };

  return (
    <div
      className={`w-full mx-auto flex justify-center items-center font-size-[14px] font-family-[Nanum Gothic] font-weight-[400] bg-white fixed  pt-[5px] pb-[30px] px-0 bottom-0 left-0 right-0`}
    >
      <button
        onClick={handleClick}
        className={`w-full md:max-w-[800px] max-w-[500px] min-h-[40px] rounded-[10px] border-0 text-center cursor-pointer bg-[#f5f4f4] ${canNext && 'bg-[var(--color_button_box)] text-[#e7e7e7] font-weight-[700]'}`}
      >
        다음
      </button>
    </div>
  );
}

export default CityNextButton;
