import React, { useState } from "react";
import ColorShades from "./Components/ColorShades/ColorShades";
import CustomColors from "./Components/CustomColors/CustomColors";
import RandomColors from "./Components/RandomColors/RandomColors";

function App() {
  const [view, setView] = useState({
    colorShades: true,
    customColors: false,
    randomColors: false,
  });

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
    <div className="App">
      <h1> Colorly</h1>
      <div>
        <div>
          <button onClick={switchToColorShades}>ColorShades</button>
          <button onClick={switchToCustomColors}>CustomColors</button>
          <button onClick={switchToRandomColors}>RandomColors</button>
        </div>
      </div>

      {console.log(view)}
      {view.colorShades && <ColorShades />}
      {view.customColors && <CustomColors />}
      {view.randomColors && <RandomColors />}
    </div>
  );
}

export default App;
