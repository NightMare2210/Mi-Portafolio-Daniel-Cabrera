import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Brando Daniel Cabrera Bonilla — Python Backend Developer",
  description:
    "Personal portfolio of Brando Daniel Cabrera Bonilla. Python Backend Developer, Software Developer, and AI & Software Architecture Enthusiast.",
  keywords: [
    "Brando Cabrera",
    "Python developer",
    "Backend developer",
    "Software developer",
    "AI",
    "Software architecture",
    "FastAPI",
    "PostgreSQL",
    "Ecuador",
  ],
  authors: [{ name: "Brando Daniel Cabrera Bonilla" }],
  openGraph: {
    title: "Brando Daniel Cabrera Bonilla — Python Backend Developer",
    description:
      "Personal portfolio showcasing software projects, technical skills, and professional experience.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
