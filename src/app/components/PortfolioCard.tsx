const PortfolioCard = ({
  linkTitle,
  link,
  title,
  children,
}: {
  linkTitle: string;
  link: string;
  title: string;
  children: string | JSX.Element | JSX.Element[];
}) => {
  return (
    <div className="hover:-translate-y-2 hover:cursor-pointer transition duration-300 shadow-lg w-full bg-slate-100 flex flex-col rounded items-center justify-between font-montserrat">
      <div className="flex flex-row items-center justify-center h-full w-full py-8">
        {children}
      </div>
      <div className="bg-white p-8 justify-self-end rounded-b w-full flex flex-col items-start text-left">
        <h1 className="text-neutral text-2xl font-bold">{title}</h1>
        <a
          href={link}
          target="_blank"
          className="text-info text-xl font-base hover:cursor-pointer hover:text-info-content transition-colors"
        >
          {linkTitle}
        </a>
      </div>
    </div>
  );
};
export default PortfolioCard;
