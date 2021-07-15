import React, { useState, useEffect } from "react";
import styles from "./ColourCard.module.scss";
import MenuModal from "../MenuModal";
import { UserContext } from "../../context/UserProvider/UserProvider";

const ColourCard = (props) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <div className={styles.card}>
        <div className={styles.fontBox}>
          <p className={styles.hex}>{props.hex}</p>
          <p className={styles.add} onClick={toggleModal}>
            ADD TO PALETTE
          </p>
        </div>
      </div>
      <MenuModal modal={modal} click={toggleModal} update={props.update} />
    </>
  );
};

export default ColourCard;
