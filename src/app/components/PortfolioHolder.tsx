"use client";

import { motion } from "framer-motion";
import PortfolioCard from "./PortfolioCard";
import Image from "next/image";
const PortfolioHolder = () => {
  return (
    <div className="min-h-screen bg-base-100 w-full flex flex-col items-center lg:pt-36 pt-28">
      <div className={`w-[95%] max-w-[1440px] flex flex-col items-center`}>
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`select-none lg:text-6xl text-4xl font-bold w-full text-center text-neutral`}
        >
          /portfolio.
        </motion.h1>
        <motion.h2
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`select-none lg:text-2xl text-lg font-semibold w-full text-center text-neutral mt-4`}
        >
          Nós trabalhamos com vários clientes satisfeitos.
          <br />
          Estas são algumas das nossas histórias de sucesso.
        </motion.h2>
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className={`grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl items-stretch w-full lg:pt-32 pt-12`}
        >
          <PortfolioCard
            title="Shortn"
            linkTitle="shortn.at"
            link="https://shortn.at"
          >
            <Image
              width={192}
              height={192}
              src="/shortn-logo.png"
              alt="Shortn Logo"
            />
          </PortfolioCard>
          <PortfolioCard
            title="Porto Space Team"
            linkTitle="portospaceteam.pt"
            link="https://www.portospaceteam.pt"
          >
            <Image
              width={144}
              height={144}
              className="rounded-2xl"
              src="/pts-logo.png"
              alt="Porto Space Team Logo"
            />
          </PortfolioCard>

          <PortfolioCard
            title="Personal Website"
            linkTitle="denizlg24.com"
            link="https://denizlg24.com"
          >
            <Image
              className="max-w-[9rem] max-h-[9rem] w-full h-full rounded-xl"
              width={144}
              height={144}
              src="/ms-icon-310x310.png"
              alt="Personal Website Logo"
            />
          </PortfolioCard>
        </motion.div>
      </div>
    </div>
  );
};

export default PortfolioHolder;
