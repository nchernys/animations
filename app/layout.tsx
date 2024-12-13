import "./globals.css";
import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Animations & Visual Effects</title>
        
      </head>
      <body>
        <Header />
        <main className="main"> {children}</main>
        <Footer />
      </body>
    </html>
  );
}
