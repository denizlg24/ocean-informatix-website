import { useInView } from "framer-motion";
import { useRef } from "react";

const ServiceCard = ({
  title,
  description,
  points,
  delay,
}: {
  title: string;
  description: string;
  points?: string[];
  delay: number;
}) => {
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });
  return (
    <div
      style={{
        transform: isInView1 ? "none" : "translateY(-100px)",
        opacity: isInView1 ? 1 : 0,
        transition: `all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s`,
      }}
      ref={ref1}
      className="w-full flex flex-col rounded-lg shadow-lg outline outline-1 outline-neutral-content"
    >
      <div className="w-full self-stretch p-4 rounded-t-lg bg-info border-b-[1px] border-neutral-content flex flex-row items-center justify-center">
        <h1 className="text-info-content text-2xl font-bold text-center">
          {title}
        </h1>
      </div>
      <div className="w-full p-4 rounded-b-lg flex flex-col items-stretch justify-start font-montserrat bg-base-100 h-full">
        <section>
          <h1 className="w-full text-left text-xl font-semibold text-info-content">
            Para quê?
          </h1>
          <h2 className="mt-4 text-left text-base font-normal text-info-content">
            {description}
          </h2>
        </section>
        <section>
          {points && (
            <h1 className="w-full text-left text-xl font-semibold text-info-content mt-4">
              Como?
            </h1>
          )}
          <ul className="w-full pl-4 list-decimal text-left mt-4 text-base font-normal text-info-content">
            {points?.map((point) => {
              return <li key={point}>{point}</li>;
            })}
          </ul>
        </section>
      </div>
    </div>
  );
};
export default ServiceCard;
