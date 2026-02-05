import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AISSIA SÉCURITÉ - Excellence en Sécurité Privée",
  description: "AISSIA SÉCURITÉ, votre partenaire de confiance pour tous vos besoins en sécurité privée et formation professionnelle.",
  keywords: "sécurité, sécurité privée, agent de sécurité, formation sécurité, gardiennage, AISSIA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${montserrat.variable} flex flex-col min-h-screen antialiased font-sans`}>{children}</body>
    </html>
  );
}
