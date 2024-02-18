import type { Metadata } from "next";
import HeroServices from "../components/HeroServices";
export const metadata: Metadata = {
  title: "Serviços | Ocean Informatix",
  description:
    "Explore os serviços personalizados da Ocean Informatix: Desenvolvimento de Websites e Aplicações, Análise de Dados, bem como soluções inovadoras para a automação do seu negócio.",
  keywords: [
    "ocean",
    "informatics",
    "ocean informatics",
    "ocean informatix",
    "it",
    "tech",
    "developers",
    "consulting",
    "it consulting",
  ],
  twitter: {
    card: "summary",
    title: "Serviços | Ocean Informatix",
    description:
      "Explore os serviços personalizados da Ocean Informatix: Desenvolvimento de Websites e Aplicações, Análise de Dados, bem como soluções inovadoras para a automação do seu negócio.",
    site: "https://oceaninformatix.com/services",
  },
  openGraph: {
    description:
      "Explore os serviços personalizados da Ocean Informatix: Desenvolvimento de Websites e Aplicações, Análise de Dados, bem como soluções inovadoras para a automação do seu negócio.",
    title: "Serviços | Ocean Informatix",
  },
};
export default function Services() {
  return <HeroServices />;
}
