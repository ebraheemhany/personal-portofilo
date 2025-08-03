import React, { useEffect, useState } from "react";
import { CiSettings } from "react-icons/ci";
import { PiMoonThin } from "react-icons/pi";
import "./Themes.css";
import { IoCloseOutline } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";
export const Themes = () => {
  const [showSwitcher, setShowSwitcher] = useState(false);
  const [theme , setTheme] = useState("dark-theme")

  const ChangeColor = (hueValue) => {
    document.documentElement.style.setProperty("--hue", hueValue);
  };

const toggleTheme = () => {
if(theme === "dark-theme") {
  setTheme("light-theme")
}else {
  setTheme("dark-theme")
}

}

useEffect(() => {
document.documentElement.className=theme;

}, [theme])

console.log(theme)
  return (
    <div
      className="style-switcher"
      style={{
        transform: showSwitcher ? "translateX(0%)" : "translateX(-100%)",
      }}
    >
      <div
        className="switcher-toggler"
        onClick={() => setShowSwitcher(!showSwitcher)}
        style={{ display: showSwitcher ? "none" : "block" }}
      >
        <CiSettings />
      </div>

      <div
        className="them-toggler"
        style={{ display: showSwitcher ? "none" : "block" }}
        onClick={toggleTheme}
      >
        {
          theme === "light-theme" ? (<IoSunnyOutline />) : (<PiMoonThin />)
        }
      </div>

      <div className="title_close">
        <h3 className="switcher-title">Style Switcher</h3>
        <IoCloseOutline onClick={() => setShowSwitcher(false)} />
      </div>

      <div className="switcher-items">
        <div
          onClick={() => ChangeColor(271)}
          className="item"
          style={{ backgroundColor: "hsl(271, 76%, 53%)" }}
        ></div>
        <div
          onClick={() => ChangeColor(20)}
          className="item"
          style={{ backgroundColor: "hsl(20, 76%, 53%)" }}
        ></div>
        <div
          onClick={() => ChangeColor(5)}
          className="item"
          style={{ backgroundColor: "hsl(5, 76%, 53%)" }}
        ></div>
        <div
          onClick={() => ChangeColor(320)}
          className="item"
          style={{ backgroundColor: "hsl(320, 76%, 53%)" }}
        ></div>
      </div>
    </div>
  );
};
