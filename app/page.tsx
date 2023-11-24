import Image from "next/image";
import styles from "./page.module.scss";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Hero from "./components/Navbar/Hero";
import Gallery from "./components/Gallery/Gallery";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Hero />
        <Gallery />
      </main>
    </>
  );
}
