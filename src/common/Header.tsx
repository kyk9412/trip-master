import { useNavigate } from 'react-router';

function Header({ isBlack = false }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };

  return (
    <header className="w-full h-full mx-auto">
      <div className="max-w-[1400px] w-full h-[80px] mx-auto flex absolute top-0 left-1/2 transform -translate-x-1/2 z-10">
        <h1
          onClick={handleClick}
          className={`absolute top-[20px] left-[20px] text-[2rem] font-extrabold font-['Nanum_Gothic'] tracking-[1px] text-[#fff] cursor-pointer 
          ${isBlack ? 'filter brightness-0' : ''}
          `}
          style={{
            textShadow: `rgba(0, 0, 0, 0.25) 0px 54px 55px,
              rgba(0, 0, 0, 0.12) 0px -12px 30px,
              rgba(0, 0, 0, 0.12) 0px 4px 6px,
              rgba(0, 0, 0, 0.17) 0px 12px 13px,
              rgba(0, 0, 0, 0.09) 0px -3px 5px,
            `,
          }}
        >
          <div>TRIPLIBERTY</div>
        </h1>
      </div>
    </header>
  );
}

export default Header;
