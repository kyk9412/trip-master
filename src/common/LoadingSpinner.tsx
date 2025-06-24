function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center h-[400px] fixed z-[1000] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-transparent">
      <div
        className="w-[50px] h-[50px] border-[5px] border-[#f3f3f3] border-t-[5px] border-t-[#3b90f9] rounded-full animate-spin"
        aria-label="Loading spinner"
      />
      <p className="mt-[20px] text-[#666] text-[16px]">AI가 여행 일정을 만들고 있어요...</p>
    </div>
  );
}
export default LoadingSpinner;
