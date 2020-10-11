import React, { useState } from "react";
import classes from "./CustomColors.module.css";
import { SketchPicker } from "react-color";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CustomColors = () => {
  const [rgbaColor, setRgbaColor] = useState({
    r: "241",
    g: "112",
    b: "19",
    a: "1",
  });

  const { r, g, b, a } = rgbaColor;

  const [hexColor, setHexColor] = useState(null);

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
      <div>
        <h4 style={{ textAlign: "center" }}>Click to copy</h4>
      </div>
      <div className={classes.colorsDiv}>
        {/* rgba */}
        <div
          className={classes.itemBlock}
          style={{ background: `rgb(${r},${g},${b},${a})` }}
          onClick={() => copyColor(`rgb(${r},${g},${b},${a})`)}
        >
          <div>
            <div className={classes.colorName}>R G B </div>
            <div className={classes.clickToCopy}>Copy</div>
          </div>
        </div>

        {/* hex */}
        <div
          className={classes.itemBlock}
          style={{ background: `rgb(${r},${g},${b},${a})` }}
          onClick={() => copyColor(hexColor)}
        >
          <div>
            <div className={classes.colorName}>Hex Code</div>
            <div className={classes.clickToCopy}>Copy</div>
          </div>
        </div>
      </div>

      <SketchPicker
        width={500}
        disableAlpha={false}
        color={rgbaColor}
        onChangeComplete={(color) => {
          setRgbaColor(color.rgb);
          console.log(color);
          setHexColor(color.hex);
        }}
      />
    </div>
  );
};

export default CustomColors;
