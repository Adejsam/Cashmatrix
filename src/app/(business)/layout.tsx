import type { Metadata } from "next";
import localFont from "next/font/local"
import "../globals.css";
import Header from "@/component/business component/BusinessHeader/header";
import Footer from "@/component/business component/BusinessFooter/footer";

const myFont = localFont({ src: '../../../public/fonts/object-sans/ObjectSansRegular.otf' })

export const metadata: Metadata = {
  title: "Cashmatrix Business - Digital Banking at ease",
  description: "This is the cashmatrix business website"
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
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" media="all"></link>
        <link rel="shortcut icon" href="/images/favicon-32x32.png" /> 
        <link rel="apple-touch-icon" sizes="180x180" href="/public/images/apple-touch-icon.png" /> 
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/> 
      </head>
      <body className={myFont.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
