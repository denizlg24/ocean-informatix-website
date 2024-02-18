"use client";
import Image from "next/image";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <main className="flex flex-1 flex-col min-h-screen justify-center">
      <section className="flex flex-col lg:flex-row p-10 lg:mb-20 px-10 sm:px-20 lg:px-0 lg:py-20 h-[calc(100vh - 7.875rem)]">
        <div className="text-center lg:text-left lg:pl-40 w-full lg:w-1/2 flex flex-col justify-center order-2 lg:order-1">
          <section className="">
            <motion.h1
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl 2xl:pr-40 font-medium xl:text-5xl 2xl:text-6xl cursor-default mt-5 lg:mt-0 pb-10 "
            >
              Aceleramos o seu negócio através de soluções tecnológicas
            </motion.h1>
            <motion.p
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-lg 2xl:pr-40 2xl:text-xl cursor-default font-montserrat pb-10"
            >
              As nossas equipas de desenvolvimento altamente qualificadas
              ajudam-no a acelerar o seu negócio e a consolidar os seus serviços
              através de soluções de software modernas e personalizadas.
            </motion.p>
          </section>
        </div>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative w-full lg:w-1/2 flex items-center justify-center order-1 lg:order-2"
        >
          <Image
            src="/Programmer-rafiki.svg"
            width={700}
            height={700}
            alt="Hero Picture"
            className="sm:max-w-[400px] max-w-[300px] lg:max-w-full"
          />
        </motion.div>
      </section>
      <a className="hidden" href="https://storyset.com/work">
        Work illustrations by Storyset
      </a>
    </main>
  );
};

export default Hero;
