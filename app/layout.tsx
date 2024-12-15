import "./globals.css";
import React from "react";
import Header from "@/components/navigation/header";
import Footer from "@/components/navigation/footer";
import Cursor from "@/components/cursor";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <title>Animations & Visual Effects</title>
      </head>
      <body>
        <Cursor />
        <Header />
        <main className='main'> {children}</main>
        <Footer />
      </body>
    </html>
  );
}
