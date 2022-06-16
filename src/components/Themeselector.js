import React from "react";
import "./Themeselector.css";
import { useTheme } from "../hooks/useTheme";
import modeIcon from "../assets/mode-icon.svg";

function Themeselector() {
  const { changeColor, changeMode, mode } = useTheme();
  const themeColors = ["#58249c", "#249c6b", "#b70233"];

  const toggleMode = () => {
    changeMode(mode === "dark" ? "light" : "dark");
  };

  console.log(mode);

  return (
    <div className="theme-selector">
      <div className="mode-toggler">
        <img
          onClick={toggleMode}
          src={modeIcon}
          alt="light/dark toggle icon"
          style={{
            filter: mode === "dark" ? "invert(100%)" : "invert(20%)"
          }}
        />
      </div>

      <div className="theme-buttons">
        {themeColors.map(color => (
          <div
            key={color}
            onClick={() => {
              changeColor(color);
            }}
            style={{ background: color }}
          />
        ))}
      </div>
    </div>
  );
}

export default Themeselector;
