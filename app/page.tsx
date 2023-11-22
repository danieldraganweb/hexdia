import Image from "next/image";
import styles from "./page.module.scss";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Welcome to HEXDIA</h1>
    </main>
  );
}
