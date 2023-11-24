import React from "react";
import styles from "./Gallery.module.scss";
import Image from "next/image";

const images = [
  "/diamond-drill-sample-detail.jpg",
  "/diamond-drill-sample-1.jpg",
  "/diamond-drill-sample-2.jpg",
  "/diamond-drill-sample-3.jpg",
  "/diamond-drill-sample-4.jpg",
];
const Gallery = () => {
  return (
    <>
      <div className={styles["gallery-main"]}>
        <div className={styles["gallery-container"]}>
          <div className={styles["gallery-title-container"]}>
            <h1 className={styles["gallery-title"]}>Gallery</h1>
          </div>
          <div className={styles["gallery-image-container"]}>
            {images.map((image) => (
              <div className={styles["gallery-image-wrapper"]} key={image}>
                <Image
                  src={image}
                  alt="diamond drill sample"
                  className={styles["gallery-image"]}
                  width={500}
                  height={500}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default Gallery;
