import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Início | Ocean Informatix",
  description:
    "Na Ocean Informatix transformamos ideias em software inovador para acelerar o seu negócio.",
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
    title: "Início | Ocean Informatix",
    description:
      "Na Ocean Informatix transformamos ideias em software inovador para acelerar o seu negócio.",
    site: "https://oceaninformatix.com",
  },
  openGraph: {
    description:
      "Na Ocean Informatix transformamos ideias em software inovador para acelerar o seu negócio.",
    title: "Início | Ocean Informatix",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={
          ubuntu.className +
          " flex flex-col min-h-screen scrollbar-thin scrollbar-track-base-100 scrollbar-thumb-neutral"
        }
      >
        <Header />
        {children}
        <Toaster position="bottom-right" />
        <Footer />
      </body>
    </html>
  );
}
