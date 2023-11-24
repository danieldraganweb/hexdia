import React from "react";
import styles from "./Gallery.module.scss";
import Image from "next/image";
import Link from "next/link";

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
      <div className={styles["gallery-title-container"]}>
        {/* <h1 className={styles["gallery-title"]}>
          Discover our Product Catalog
        </h1> */}
        <h1 className={styles["gallery-subtitle"]}>
          We offer a wide range of products for your needs!
        </h1>
      </div>
      <div className={styles["gallery-main"]}>
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
      <div className={styles["gallery-button-container"]}>
        <Link href="/catalog" key="catalog">
          <button className={styles["gallery-button"]}>View Catalog</button>
        </Link>
      </div>
      ;
    </>
  );
};

export default Gallery;
