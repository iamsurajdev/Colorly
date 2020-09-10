import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import classes from "./RandomColors.module.css";

const RandomColors = () => {
  const [colorFormat, setColorFormat] = useState("hex");
  const [colorNames] = useState([
    { name: "#E91E63", rgb: "rgb(233, 30, 99)" },
    { name: "#880E4F", rgb: "rgb(136, 14, 79)" },
    { name: "#F50057", rgb: "rgb(245, 0, 87)" },
    { name: "#7B1FA2", rgb: "rgb(123, 31, 162)" },
    { name: "#BA68C8", rgb: "rgb(186, 104, 200)" },
    { name: "#536DFE", rgb: "rgb(83, 109, 254)" },
    { name: "#1A237E", rgb: "rgb(26, 35, 126)" },
    { name: "#00897B", rgb: "rgb(0, 137, 123)" },
    { name: "#66BB6A", rgb: "rgb(102, 187, 106)" },
    { name: "#00C853", rgb: "rgb(0, 200, 83)" },
    { name: "#FBC02D", rgb: "rgb(251, 192, 45)" },
    { name: "#F57F17", rgb: "rgb(245, 127, 23)" },
    { name: "#FF8A65", rgb: "rgb(255, 138, 101)" },
    { name: "#FF3D00", rgb: "rgb(255, 61, 0)" },
    { name: "#3E2723", rgb: "rgb(62, 39, 35)" },
    { name: "#607D8B", rgb: "rgb(96, 125, 139)" },
    { name: "#263238", rgb: "rgb(38, 50, 56)" },
    { name: "#03A9F4", rgb: "rgb(3, 169, 244)" },
    { name: "#01579B", rgb: "rgb(1, 87, 155)" },
    { name: "#512DA8", rgb: "rgb(81, 45, 168)" },
    { name: "#3C8784", rgb: "rgb(60,135,132)" },
  ]);

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
      <div className={classes.select}>
        <select
          value={colorFormat}
          onChange={(e) => {
            setColorFormat(e.target.value);
          }}
        >
          <option value="hex">HEX</option>
          <option value="rgb">RGB</option>
        </select>
      </div>
      <div className={classes.colorsDiv}>
        {colorNames.map((color) => {
          const colorName = colorFormat === "hex" ? color.name : color.rgb;
          return (
            <div
              className={classes.itemBlock}
              key={color.name}
              style={{ background: color.name }}
              onClick={() => copyColor(colorName)}
            >
              <div>
                <div>{colorName}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RandomColors;
