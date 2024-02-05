const LargeDivider = ({ text }: { text: string }) => {
  return (
    <div className="w-full py-12 px-4 bg-neutral text-primary-content font-bold text-3xl flex flex-row items-center justify-center my-12">
      {text}
    </div>
  );
};
export default LargeDivider;
