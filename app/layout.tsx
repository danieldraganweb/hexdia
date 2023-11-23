import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Navbar from "./components/Navbar/Navbar";
import Head from "next/head";
import { Gruppo, Roboto } from "next/font/google";

const gruppo = Gruppo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-gruppo",
  weight: "400",
  style: "normal",
});

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "HEXDIA",
  description: "Diamond Drilling Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${gruppo.variable} ${roboto.variable}`}>
      <Head>
        <title>HEXDIA</title>
        <meta name="description" content="HEXDIA" />
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
