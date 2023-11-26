"use client";

import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import Logo from "./Logo";
// import disableScroll from "disable-scroll";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Disable scrolling when menu is open
  //   useEffect(() => {
  //     if (menuOpen) {
  //       disableScroll.on();
  //     } else {
  //       disableScroll.off();
  //     }
  //   }, [menuOpen]);

  return (
    <>
      <div className={styles["navbar-container"]}>
        <nav className={styles["navbar"]}>
          <div className={styles["navbar-mobile"]}>
            {/* <Logo /> */}
            <ul className={styles.logo}>
              <li>
                <Link href="/" key="home" onClick={() => setMenuOpen(false)}>
                  <Logo />
                </Link>
              </li>
            </ul>
            {/* <div className={styles["navbar-button-container"]}>
              <Link href="/contact">
                <button
                  className={styles["navbar-button"]}
                  aria-label="Contact"
                >
                  Contact
                </button>
              </Link>
            </div> */}
            <div className={styles["hamburger-container"]}>
              <button
                className={styles.burgerMenuButton}
                onClick={toggleMenu}
                aria-label="Toggle Menu"
                aria-expanded={menuOpen ? "true" : "false"}
              >
                <svg
                  fill="var(--button-color)"
                  className={styles.hamburger}
                  viewBox="0 0 90 90"
                  width="22"
                >
                  <rect
                    className={styles.lineTop}
                    width="88"
                    height="10"
                    x="1"
                    y="10"
                    rx="5"
                  />
                  <rect
                    className={styles.lineMiddle}
                    width="88"
                    height="10"
                    x="1"
                    y="40"
                    rx="5"
                  />
                  <rect
                    className={styles.lineBottom}
                    width="88"
                    height="10"
                    x="1"
                    y="70"
                    rx="5"
                  />
                </svg>
              </button>
            </div>
            {menuOpen && (
              <ul
                className={`${styles.navLinks} ${
                  menuOpen ? styles.open : styles.closed
                }`}
              >
                <li>
                  <Link
                    href="/catalog"
                    key="catalog"
                    onClick={() => setMenuOpen(false)}
                  >
                    Catalog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    key="contact"
                    onClick={() => setMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    key="blog"
                    onClick={() => setMenuOpen(false)}
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about-us"
                    key="about-us"
                    onClick={() => setMenuOpen(false)}
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            )}
          </div>
          {/* Second section for desktop view */}
          <div className={styles["navbar-desktop"]}>
            <div className={styles["navbar-links"]}>
              <ul className={styles.logo}>
                <li>
                  <Link href="/" key="home" onClick={() => setMenuOpen(false)}>
                    <Logo />
                  </Link>
                </li>
              </ul>
              <ul className={styles.navLinks}>
                <li>
                  <Link
                    href="/catalog"
                    key="catalog"
                    onClick={() => setMenuOpen(false)}
                  >
                    Catalog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    key="blog"
                    onClick={() => setMenuOpen(false)}
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about-us"
                    key="about-us"
                    onClick={() => setMenuOpen(false)}
                  >
                    About Us
                  </Link>
                </li>

                <li>
                  <Link
                    href="/contact"
                    key="blog"
                    onClick={() => setMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
