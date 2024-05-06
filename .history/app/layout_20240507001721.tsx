import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import Head from "next/head";
import Footer from "./components/Footer/Footer";
import { NavMobile } from "./components/Header/MobileNav/NavMobile";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Federation of Igbo Student OAU",
  description: "Federation of Igbo Student OAU",
  icons: {
    icon: '/favicon.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="/favicon.ico" />      
        {/* Add any other meta tags you need */}
      </Head>
      <body className={inter.className}>
        <main className="px-6 lg:px-20">
        <Header/>
        <NavMobile/>
        {children}
        </main>
        <Footer/>
        </body>
    </html>
  );
}
