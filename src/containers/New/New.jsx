import React, { useState, useEffect } from "react";
import Nav from "../../components/Nav";
import AddModal from "../../components/AddModal";
import styles from "./New.module.scss";

const New = () => {
  const [newColour, setNewColour] = useState({});

  useEffect(() => {
    const addColour = (obj) => {
      if (obj.colourId) {
        fetch("https://glassy-rush-319608.nw.r.appspot.com/colours", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(obj),
        })
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            console.log("colour added", data.html_url);
          })
          .catch((error) => {});
      }
    };

    addColour(newColour);
  }, [newColour]);

  return (
    <>
      <Nav />
      <div className={styles.modalContainer}>
        <AddModal placeholder="HEX" submit={setNewColour} type="colour" />
        <AddModal placeholder="PALETTE" />
      </div>
      <p>New works</p>
    </>
  );
};

export default New;
