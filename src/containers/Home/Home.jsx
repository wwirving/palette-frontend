import React from "react";
import styles from "./Home.module.scss";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className={styles.homeContainer}>
        <div className={styles.block}>
          <Link to="/colours">Colours</Link>
        </div>
        <div className={styles.line}></div>
        <div className={styles.block}>
          <Link to="/palettes">Palettes</Link>
        </div>
      </div>
    </>
  );
};

export default Home;
