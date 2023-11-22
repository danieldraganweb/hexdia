import { useState } from "react";
import React from "react";
import styles from "../../components/Navbar/Navbar.module.scss";

const HamburgerBtn = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div>
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
  );
};

export default HamburgerBtn;
