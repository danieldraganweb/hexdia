import React from "react";
import styles from "./loading.module.scss";

const Loading: React.FC = () => {
  return (
    <div className={styles.loader}>
      <div className={styles["cell d-0"]}></div>
      <div className={styles["cell d-1"]}></div>
      <div className={styles["cell d-2"]}></div>

      <div className={styles["cell d-1"]}></div>
      <div className={styles["cell d-2"]}></div>

      <div className={styles["cell d-2"]}></div>
      <div className={styles["cell d-3"]}></div>

      <div className={styles["cell d-3"]}></div>
      <div className={styles["cell d-4"]}></div>
    </div>
  );
};

export default Loading;
