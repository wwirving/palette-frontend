import React from "react";
import styles from "./AddModal.module.scss";

const AddModal = (props) => {
  return (
    <>
      <div className={styles.card}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(e);
          }}
        >
          <div className={styles.formDisplay}>
            <input
              type="text"
              name="MERGE0"
              id="MERGE0"
              placeholder={props.placeholder}
              className={styles.inputBox}
            />
            <div className={styles.line}></div>
            <input
              type="submit"
              value="ADD"
              className={styles.signUp}
              onClick={(e) => {
                e.preventDefault();
                if (props.type === "colour") {
                  let newColour = {};
                  newColour.colourId =
                    "id" + Math.random().toString(16).slice(2);
                  newColour.hexcode = document.getElementById("MERGE0").value;
                  props.submit(newColour);
                } else if (props.type === "palette") {
                  let newColour = {};
                  newColour.colourId =
                    "id" + Math.random().toString(16).slice(2);
                  newColour.hex = document.getElementById("MERGE0").value;
                  props.submit(newColour);
                }
              }}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default AddModal;
