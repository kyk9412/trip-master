function Button({ key = '', text, id, handleClick, active }) {
  return (
    <div
      key={key}
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        handleClick(id);
      }}
    >
      <input type="checkbox" name={id} id={id} className="hidden" />
      <label
        htmlFor={id}
        className={`citytext flex w-[256px] h-[50px] cursor-pointer items-center justify-center rounded-[25px] border-none bg-[#f5f4f4] 
          text-center text-[16px] font-normal text-[#181818] font-['Nanum_Gothic'] 
          ${active ? 'active' : ''}
          `}
      >
        {text}
      </label>
    </div>
  );
}

export default Button;
