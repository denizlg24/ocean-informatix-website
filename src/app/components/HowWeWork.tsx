"use client";
import { useInView } from "framer-motion";
import { useRef } from "react";
const HowWeWork = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const isInView3 = useInView(ref3, { once: true });
  const isInView4 = useInView(ref4, { once: true });
  return (
    <div className="flex flex-1 flex-col items-center bg-base-100 pb-16 gap-8">
      <div className="text-center lg:text-left lg:px-40 sm:px-20 px-4 flex flex-col lg:flex-row items-center justify-between w-full gap-4">
        <div className="flex flex-col items-start justify-center">
          <h3 className="text-neutral w-full text-4xl lg:text-5xl font-bold">
            Como podemos ajudar
          </h3>
          <h5 className="text-info text-4xl w-full lg:text-5xl font-bold">
            o seu negócio
          </h5>
        </div>
        <div className="flex flex-col lg:items-end items-center justify-center relative">
          <h2 className="relative text-neutral text-2xl lg:text-5xl font-bold z-20">
            Abordagem
          </h2>
          <div className="text-info font-bold z-10 text-2xl lg:text-6xl absolute top-5">
            V.I.D.A.
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:px-40 sm:px-20 px-4 items-center w-full">
        <ul className="steps steps-vertical lg:steps-horizontal w-full lg:mt-12 mt-10 lg:gap-2 gap-4">
          <li className="step step-info">
            <div
              style={{
                transform: isInView1 ? "none" : "translateY(-50px)",
                opacity: isInView1 ? 1 : 0,
                transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
              }}
              ref={ref1}
              className="flex flex-col justify-start items-center gap-2 w-full lg:self-start self-end"
            >
              <h1 className="bg-info font-monteserrat text-xl font-bold text-info-content rounded-lg shadow py-2 w-full">
                Visão
              </h1>
              <p className="text-info-content text-left font-monteserrat text-lg">
                Trabalhamos consigo para percebermos a sua visão do seu produto,
                serviço ou negócio.
              </p>
            </div>
          </li>
          <li className="step step-info">
            <div
              style={{
                transform: isInView2 ? "none" : "translateY(-50px)",
                opacity: isInView2 ? 1 : 0,
                transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
              }}
              ref={ref2}
              className="flex flex-col justify-start items-center gap-2 w-full lg:self-start self-end"
            >
              <h1 className="bg-info font-monteserrat text-xl font-bold text-info-content rounded-lg shadow  py-2 w-full">
                Identificação
              </h1>
              <p className="text-info-content  text-left font-monteserrat text-lg ">
                Identificamos objetivos, traduzimo-los em necessidades e
                desenhamos a sua solução.
              </p>
            </div>
          </li>
          <li className="step step-info">
            <div
              style={{
                transform: isInView3 ? "none" : "translateY(-50px)",
                opacity: isInView3 ? 1 : 0,
                transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
              ref={ref3}
              className="flex flex-col justify-start items-center gap-2 w-full lg:self-start self-end"
            >
              <h1 className="bg-info font-monteserrat text-xl font-bold text-info-content rounded-lg shadow  py-2 w-full">
                Desenvolvimento
              </h1>
              <p className="text-info-content  text-left font-monteserrat text-lg ">
                Desenvolvemos e implementamos a solução, avaliando a resposta às
                suas necessidades.
              </p>
            </div>
          </li>
          <li className="step step-info">
            <div
              style={{
                transform: isInView4 ? "none" : "translateY(-50px)",
                opacity: isInView4 ? 1 : 0,
                transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s",
              }}
              ref={ref4}
              className="flex flex-col justify-start items-center gap-2 w-full lg:self-start self-end"
            >
              <h1 className="bg-info font-monteserrat text-xl font-bold text-info-content rounded-lg shadow py-2 w-full">
                Acompanhamento
              </h1>
              <p className="text-info-content  text-left font-monteserrat text-lg ">
                Entregamos o produto e, se necessário, mantemos e desenvolvemos
                as suas soluções para o futuro.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HowWeWork;
