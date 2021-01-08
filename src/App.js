import React, { useState } from "react";
import ColorShades from "./Components/ColorShades/ColorShades";
import CustomColors from "./Components/CustomColors/CustomColors";
import RandomColors from "./Components/RandomColors/RandomColors";
import classes from "./App.module.css";

function App() {
  const [view, setView] = useState({
    colorShades: false,
    customColors: false,
    randomColors: true,
  });

  const { colorShades, customColors, randomColors } = view;

  const switchToColorShades = () => {
    setView({ colorShades: true, customColors: false, randomColors: false });
  };
  const switchToCustomColors = () => {
    setView({ colorShades: false, customColors: true, randomColors: false });
  };
  const switchToRandomColors = () => {
    setView({ colorShades: false, customColors: false, randomColors: true });
  };

  return (
    <div className={classes.mainDiv}>
      <h1 className={classes.appName}> Colorly</h1>
      <p>
        a product by{" "}
        <a
          href="https://www.linkedin.com/in/suraj-biswas-824bb4176/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Suraj Biswas
        </a>
      </p>

      <div className={classes.buttonsDiv}>
        {window.innerWidth > 560 ? (
          <button
            style={
              colorShades
                ? { backgroundColor: "rgb(72, 68, 97)", color: "#fff" }
                : null
            }
            onClick={switchToColorShades}
          >
            Color Shades{" "}
            <span role="img" aria-label="emoji">
              🍫
            </span>{" "}
          </button>
        ) : null}
        <button
          style={
            randomColors
              ? { backgroundColor: "rgb(72, 68, 97)", color: "#fff" }
              : null
          }
          onClick={switchToRandomColors}
        >
          Top{" "}
          <span role="img" aria-label="emoji">
            🔝
          </span>
          selected Colours
        </button>
        {window.innerWidth > 560 ? (
          <button
            style={
              customColors
                ? { backgroundColor: "rgb(72, 68, 97)", color: "#fff" }
                : null
            }
            onClick={switchToCustomColors}
          >
            Make{" "}
            <span role="img" aria-label="emoji">
              👨‍🏭
            </span>{" "}
            your own colour
          </button>
        ) : null}
      </div>

      {colorShades && <ColorShades />}
      {customColors && <CustomColors />}
      {randomColors && <RandomColors />}
    </div>
  );
}

export default App;
