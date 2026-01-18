import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import Header from "./components/Header";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "MemoCartes",
  description: "Application de révision et de mémorisation de cartes d’étude. Créez, modifiez et organisez vos cartes, puis testez vos connaissances grâce au mode étude.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${poppins.variable} antialiased mt-6 mx-25 max-w-310`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
