import type { Metadata } from "next";
import ContactPage from "../components/ContactPage";

export const metadata: Metadata = {
  title: "Contacte-nos | Ocean Informatix",
  description:
    "Entre em contacto com a Ocean Informatix para soluções de software personalizadas. Estamos prontos para colaborar, fornecer suporte e transformar as suas ideias em realidade. Estamos aqui para ajudar!",
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
    title: "Contacte-nos | Ocean Informatix",
    description:
      "Entre em contacto com a Ocean Informatix para soluções de software personalizadas. Estamos prontos para colaborar, fornecer suporte e transformar as suas ideias em realidade. Estamos aqui para ajudar!",
    site: "https://oceaninformatix.com/contact",
  },
  openGraph: {
    description:
      "Entre em contacto com a Ocean Informatix para soluções de software personalizadas. Estamos prontos para colaborar, fornecer suporte e transformar as suas ideias em realidade. Estamos aqui para ajudar!",
    title: "Contacte-nos | Ocean Informatix",
  },
};

export default function Contact() {
  return <ContactPage />;
}
