import React, { useState } from "react";
import classes from "./CustomColors.module.css";
import { SketchPicker } from "react-color";

const CustomColors = () => {
  const [color, setColor] = useState({
    r: "241",
    g: "112",
    b: "19",
    a: "1",
  });
  return (
    <div className={classes.main}>
      <SketchPicker
        width={500}
        disableAlpha={false}
        color={color}
        onChangeComplete={(color) => {
          setColor(color.rgb);
        }}
      />
    </div>
  );
};

export default CustomColors;
