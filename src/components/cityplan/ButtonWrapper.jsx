function ButtonWrapper({ children, direction = 'row', titleText }) {
  const directionClass = direction === 'row' ? 'flex-row' : 'flex-col';
  return (
    <div
      className={`relative flex flex-wrap items-center justify-center gap-[10px] w-full max-w-[800px] mx-auto mt-[60px] ${directionClass}`}
    >
      <div className="absolute top-[-32px] left-0 max-[1100px]:left-[45px] text-[15px] font-normal text-[#787878]">
        {titleText}
      </div>
      {children}
    </div>
  );
}

export function ContainerTextbox({ children }) {
  return <div className="font-['Nanum_Gothic'] text-center mt-[80px] flex flex-col items-center">{children}</div>;
}

export function Title({ children }) {
  return (
    <h1 className="text-[30px] leading-[36px] font-bold text-[#232323] mt-[15px] pb-[10px] max-[1100px]:text-[27px]">
      {children}
    </h1>
  );
}

export function Text({ children }) {
  return <p className="text-[15px] font-normal text-[#787878]">{children}</p>;
}

export function Image({ src, alt }) {
  return <img src={src} alt={alt} className="w-[50px] h-[50px]" />;
}

export default ButtonWrapper;
