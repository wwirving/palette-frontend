import React from "react";
import styles from "./PaletteCard.module.scss";

const PaletteCard = (props) => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.fontBox}>
          <p className={styles.title}>SOFT CIRCUITS</p>
        </div>
      </div>
    </>
  );
};

export default PaletteCard;
