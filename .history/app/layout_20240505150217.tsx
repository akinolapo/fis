import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";

import './global.scss'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Federation of Igbo Student OAU",
  description: "Federation of Igbo Student OAU",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        </body>
    </html>
  );
}
