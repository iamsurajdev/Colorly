import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SwatchesPicker } from "react-color";

import classes from "./ColorShades.module.css";

const ColorShades = () => {
  const copyColor = (colorVal) => {
    let color = colorVal;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(color);
      navigator.clipboard.readText();

      toast.success(`You have copied ${color} value successfully`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  return (
    <div className={classes.main}>
      <ToastContainer />
      <SwatchesPicker
        width={1000}
        onChange={(color) => {
          copyColor(color.hex);
        }}
      />
    </div>
  );
};

export default ColorShades;
