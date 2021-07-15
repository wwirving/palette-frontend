import React from "react";
import { useParams } from "react-router-dom";
import styles from "./ColourPalette.module.scss";
import ColourBlock from "../../components/ColourBlock";
import Nav from "../../components/Nav";

const ColourPalette = () => {
  let { id } = useParams();
  return (
    <>
      <Nav />
      <div className={styles.mainContainer}>
        <div className={styles.title}>
          <p>SOFT CIRCUITS</p>
        </div>
        <div className={styles.blockGrid}>
          <ColourBlock />
          <ColourBlock />
          <ColourBlock />
          <ColourBlock />
        </div>
      </div>
    </>
  );
};

export default ColourPalette;
