import React, { useState } from "react";
import styles from "./ColourCard.module.scss";
import MenuModal from "../MenuModal";
import { UserContext } from "../../context/UserProvider/UserProvider";

const ColourCard = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <div className={styles.card}>
        <div className={styles.fontBox}>
          <p className={styles.hex}>76a955</p>
          <p className={styles.add} onClick={toggleModal}>
            ADD TO PALETTE
          </p>
        </div>
      </div>
      <MenuModal modal={modal} click={toggleModal} />
    </>
  );
};

export default ColourCard;
