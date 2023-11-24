import React from "react";
import styles from "./Logo.module.scss";
import Image from "next/image";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Image
        src="/Logo-transparent.svg"
        alt="Hexdia Logo"
        width={500}
        height={500}
      />
    </div>
  );
};

export default Logo;
