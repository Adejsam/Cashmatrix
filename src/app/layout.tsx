import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/component/Header/header";
import Footer from "@/component/Footer/footer";

const inter = Inter({ subsets: ["latin"], display: 'swap', adjustFontFallback: false});

export const metadata: Metadata = {
  title: "cashmatrix",
  description: "Digital banking at ease",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"></link>
      </head>
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer />
        </body>
    </html>
  );
}
