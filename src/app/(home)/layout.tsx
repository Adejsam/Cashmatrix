import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/component/PersonalHeader/header";
import Footer from "@/component/PersonalFooter/footer";

const inter = Inter({ subsets: ["latin"], display: "swap", adjustFontFallback: false });

export const metadata: Metadata = {
  title: "Cashmatrix - Digital Banking at Ease",
  description: "This is the cashmatrix website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"></link>
          <link rel="shortcut icon" href="/images/favicon-32x32.png" /> 
          <link rel="apple-touch-icon" sizes="180x180" href="/public/images/apple-touch-icon.png" /> 
          <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/> 
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
