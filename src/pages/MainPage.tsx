import StartButton from '@/common/StartButton';
import type { ReactNode } from 'react';

function MainPage(): ReactNode {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-cover bg-center bg-no-repeat bg-[url('/images/main.jpg')]">
      <div className="text-4xl lg:text-5xl font-bold text-[#333] text-center w-[80%] mb-2.5">
        취향에 맞게 똑똑한 AI가 일정을 추천해 드려요!
      </div>
      <StartButton text="See My Trip Now" to="/schedule" />
    </div>
  );
}

export default MainPage;
