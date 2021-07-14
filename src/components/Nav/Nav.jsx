import React from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.scss";

const Nav = () => {
  return (
    <>
      <div className={styles.sticky}>
        <div className={styles.container}>
          <Link to="/">{`<`}</Link>
          <Link to="/new">{`+`}</Link>
        </div>
      </div>
    </>
  );
};

export default Nav;
