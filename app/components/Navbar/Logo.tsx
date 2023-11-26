import React from "react";
import styles from "./Logo.module.scss";
import Image from "next/image";

const Logo: React.FC = () => {
  return (
    <div className={styles.logo}>
      <Image
        src="/Logo-transparent.svg"
        alt="Hexdia Logo"
        width={200}
        height={400}
      />
    </div>
  );
};

export default Logo;
