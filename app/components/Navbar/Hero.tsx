"use client";
import React from "react";
import Image from "next/image";
import styles from "./Hero.module.scss";
import Link from "next/link";
import Button from "../Buttons/Button";

const Hero: React.FC = () => {
  return (
    <div className={styles["hero-main"]}>
      <div className={styles.container}>
        {" "}
        <div className={styles["hero-image"]}>
          {" "}
          <Image
            src="/Logo-transparent.svg"
            alt="hexdia logo"
            width={940}
            height={330}
            blurDataURL="/hexdia.svg"
            placeholder="blur"
            // layout="responsive"
          />
        </div>
        <div className={styles["hero-text-wrapper"]}>
          <section className={styles["hero-title-container"]}>
            <h1 className={styles.title}>
              Precision Diamond Drilling Solutions for Every Project
            </h1>
          </section>
          <section className={styles["hero-text-container"]}>
            <p className={styles.description}>
              HEXDIA is a leading provider of diamond drilling operatives and
              equipment, offering innovative solutions for construction,
              demolition, and engineering projects. Our cutting-edge tools and
              expert team ensure precision and efficiency in tackling the
              toughest materials.
            </p>
            <section className={styles["hero-btn-container"]}>
              <Link href="/blog">
                <Button
                  text="Learn More"
                  onClick={() => {}}
                  ariaLabel="Learn More"
                />
              </Link>
              <Link href="/contact">
                <Button
                  text="Contact Us"
                  onClick={() => {}}
                  ariaLabel="Contact Us"
                />
              </Link>
            </section>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Hero;
