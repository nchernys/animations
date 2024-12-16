import "./globals.css";
import React from "react";
import Footer from "./components/navigation/footer";
import Cursor from "./components/cursor/cursor";

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
        <main className='main'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
