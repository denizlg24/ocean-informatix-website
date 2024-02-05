"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import LargeDivider from "./LargeDivider";
import ServiceCard from "./ServiceCard";
import useWindowSize from "@/utilities/useWindowSize";
const HeroServices = () => {
  const size = useWindowSize();
  return (
    <>
      <main className="flex flex-1 flex-col min-h-screen justify-center">
        <section className="flex flex-col lg:flex-row p-10 lg:mb-20 px-10 sm:px-20 lg:px-0 lg:py-20 h-[calc(100vh - 7.875rem)]">
          <div className="text-center lg:text-left lg:pl-40 w-full lg:w-1/2 flex flex-col justify-center order-2 lg:order-1">
            <section>
              <motion.h1
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl 2xl:pr-40 font-medium xl:text-5xl 2xl:text-6xl cursor-default mt-5 lg:mt-0 pb-10 "
              >
                A peça que falta para acelerar o seu negócio
              </motion.h1>
              <motion.p
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-lg 2xl:pr-40 2xl:text-xl cursor-default font-monteserrat pb-10"
              >
                Traduzimos as necessidades do seu negócio em soluções reais,
                oferecendo serviços de software profissionais e personalizados.
                As nossas soluções tecnológicas são as peças que faltam.
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
              src="/Business solution-bro.svg"
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
      <LargeDivider text="O que podemos fazer?" />
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 justify-stretch gap-4 px-10 md:px-20 lg:px-40 py-8">
        <ServiceCard
          title="Websites"
          delay={size.width > 768 ? 0.2 : 0.4}
          description="Destaque-se online! Crie credibilidade, acesse novos mercados e esteja disponível 24/7 com nosso serviço de websites."
          points={[
            "A partir de tecnologias como React, Next.js, HTML e Javascript, nós conseguimos criar páginas funcionais, e otimizadas para o seu negócio.",
            "Usando TailwindCSS, DaisyUI entre outras librarias, conseguimos criar páginas apelativas, responsivas e interativas, que vão de encontro com o que o cliente necessita.",
            "Mantemos-nos atualizados com as últimas tendências e tecnologias, assegurando que seu website esteja sempre na vanguarda.",
          ]}
        />
        <ServiceCard
          title="Aplicações"
          delay={0.4}
          description="Eleve seu negócio com aplicações personalizadas. Fortaleça o engajamento, adapte-se rapidamente e inove constantemente."
          points={[
            "Utilizamos tecnologias como React Native, C# e C++ para criar aplicações poderosas.",
            "A nossa abordagem foca-se em interfaces intuitivas, garantindo uma experiência para o usuário sem atritos.",
            "Projetamos aplicações preparadas para crescer junto com seu negócio.",
            "Garantimos a qualidade através de testes abrangentes, assegurando desempenho e confiabilidade.",
          ]}
        />
        <ServiceCard
          title="Automação do negócio"
          delay={size.width > 1536 ? 0.6 : 0.4}
          description="Automatize seu negócio para impulsionar eficiência, tomar decisões rápidas e aprimorar a experiência do cliente"
          points={[
            "Criamos aplicações avançadas utlizando C, C++ e C#, para realizar tarefas repetitivas com precisão e velocidade.",
            "Conectamos sistemas e plataformas para garantir uma transição suave na implementação da automação, sem interrupções nos seus processos existentes.",
            "Desenvolvemos soluções de automação adaptadas às suas necessidades específicas, proporcionando uma abordagem personalizada para otimizar seu negócio.",
            "Oferecemos suporte e treinamento especializado para garantir que sua equipe esteja capacitada a aproveitar ao máximo os benefícios da automação.",
          ]}
        />
        <ServiceCard
          title="Análise de Dados"
          delay={size.width > 1536 ? 0.8 : size.width > 768 ? 0.6 : 0.4}
          description="Desvende insights cruciais, maximize eficiência e antecipe tendências com nossos serviços de análise de dados."
          points={[
            "Utilizamos tecnologias avançadas, como Python, R e SQL, para analisar e interpretar dados de maneira eficaz.",
            "Criamos representações visuais poderosas dos dados, facilitando a compreensão e a tomada de decisões.",
            "Implementamos modelos estatísticos e técnicas de machine learning para prever tendências futuras e identificar padrões.",
            "Adaptamos nossa abordagem às especificidades do seu negócio, garantindo análises personalizadas e relevantes.",
          ]}
        />
      </div>
    </>
  );
};

export default HeroServices;
