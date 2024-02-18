import PortfolioHolder from "../components/PortfolioHolder";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfólio | Ocean Informatix",
  description:
    "Explore o diversificado portfólio da Ocean Informatix: Projetos de Software Inovadores, Soluções Personalizadas e Casos de Sucesso que destacam nossa excelência em desenvolvimento e inovação tecnológica.",
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
    title: "Portfólio | Ocean Informatix",
    description:
      "Explore o diversificado portfólio da Ocean Informatix: Projetos de Software Inovadores, Soluções Personalizadas e Casos de Sucesso que destacam nossa excelência em desenvolvimento e inovação tecnológica.",
    site: "https://oceaninformatix.com/portfolio",
  },
  openGraph: {
    description:
      "Explore o diversificado portfólio da Ocean Informatix: Projetos de Software Inovadores, Soluções Personalizadas e Casos de Sucesso que destacam nossa excelência em desenvolvimento e inovação tecnológica.",
    title: "Portfólio | Ocean Informatix",
  },
};

export default function Portfolio() {
  return <PortfolioHolder />;
}
