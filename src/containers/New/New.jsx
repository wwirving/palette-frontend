import React from "react";
import Nav from "../../components/Nav";
import AddModal from "../../components/AddModal";
import styles from "./New.module.scss";

const New = () => {
  return (
    <>
      <Nav />
      <div className={styles.modalContainer}>
        <AddModal placeholder="HEX" />
        <AddModal placeholder="PALETTE" />
      </div>
      <p>New works</p>
    </>
  );
};

export default New;
