import React, { useContext, useEffect } from "react";
import styles from "./MenuModal.module.scss";
import { UserContext } from "../../context/UserProvider/UserProvider";

const MenuModal = (props) => {
  return (
    <>
      <div className={props.modal ? styles.pageContainer : styles.pageHidden}>
        <div className={styles.menuContainer}>
          <p onClick={props.click}>X</p>
          <div className={styles.line}></div>
          <p>SOFT CIRCUITS</p>
          <div className={styles.line}></div>
          <p>LOOPY FRUITS</p>
          <div className={styles.line}></div>
          <p>SCI MX</p>
          <div className={styles.line}></div>
          <p>NOLOGY</p>
          <div className={styles.line}></div>
        </div>
      </div>
    </>
  );
};

export default MenuModal;
