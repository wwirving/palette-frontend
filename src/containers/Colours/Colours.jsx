import React, { useState } from "react";
import Nav from "../../components/Nav";
import ColourCard from "../../components/ColourCard";
import MenuModal from "../../components/MenuModal";
import styles from "./Colours.module.scss";

const Colours = () => {
  return (
    <>
      <Nav />
      <ColourCard hex="76a955" />
      <ColourCard hex="76a955" />
      <ColourCard hex="76a955" />
    </>
  );
};

export default Colours;
