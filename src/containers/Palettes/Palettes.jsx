import React from "react";
import Nav from "../../components/Nav";
import PaletteCard from "../../components/PaletteCard";
import styles from "./Palettes.module.scss";
import { Link } from "react-router-dom";

const Palettes = () => {
  const palette = {
    id: 4234234,
  };

  return (
    <>
      <Nav />
      <Link to={`/palettes/${palette.id}`}>
        <PaletteCard />
      </Link>
    </>
  );
};

export default Palettes;
