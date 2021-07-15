import React, { useState, useEffect } from "react";
import Nav from "../../components/Nav";
import ColourCard from "../../components/ColourCard";
import MenuModal from "../../components/MenuModal";
import styles from "./Colours.module.scss";

const Colours = () => {
  const [colours, setColours] = useState([]);

  const [isUpdated, setIsUpdated] = useState(false);

  const toggleUpdate = () => {
    setIsUpdated(!isUpdated);
  };

  useEffect(() => {
    fetch("https://glassy-rush-319608.nw.r.appspot.com/colours")
      .then((response) => response.json())
      .then((jsonResponse) => {
        setColours(jsonResponse);
      });
  }, []);

  const getColoursJSX = (colour) => {
    return (
      <>
        <ColourCard
          hex={colour.hexcode}
          update={toggleUpdate}
          key={colour.colourId}
        />
        <div
          style={{
            backgroundColor: `#${colour.hexcode}`,
            width: "100vw",
            height: "100vw",
          }}
        ></div>
      </>
    );
  };

  return (
    <>
      <Nav />
      <div className={styles.colourGrid}>
        {colours && colours.map(getColoursJSX)}
      </div>
    </>
  );
};

export default Colours;
