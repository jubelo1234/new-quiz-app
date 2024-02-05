import React from "react";
import "../App.css";
import icon_CSS from "../images/icon-css.svg";
import icon_HTML from "../images/icon-html.svg";
import icon_Javascript from "../images/icon-js.svg";
import icon_Accessibility from "../images/icon-accessibility.svg";
import sunl from "../images/icon-sun-light.svg";
import sund from "../images/icon-sun-dark.svg";
import moond from "../images/icon-moon-dark.svg";
import moonl from "../images/icon-moon-light.svg";
import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const title = useSelector((state) => state.quiz.title);
  const location = useLocation();

  const subject = location.pathname === "/" ? "hidden" : "flex";
  const subjectCont =
    location.pathname === "/" ? "justify-end" : "justify-between";

  const [theme, setTheme] = useState(true);

  const sun = theme ? sunl : sund;
  const moon = theme ? moonl : moond;
  const [themeLoaded, setThemeLoaded] = useState(false);

  let titleImg;

  if (title === "HTML") {
    titleImg = icon_HTML;
  } else if (title === "CSS") {
    titleImg = icon_CSS;
  } else if (title === "Javascript") {
    titleImg = icon_Javascript;
  } else {
    titleImg = icon_Accessibility;
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem("selectedTheme");
    if (savedTheme) {
      applyTheme(savedTheme);
      setTheme(savedTheme === "dark");
    } else {
      applyTheme("light");
      setTheme(false);
      setThemeInLocalStorage("light");
    }

    setThemeLoaded(true);
  }, []);

  // Function to apply the selected theme
  function applyTheme(theme) {
    const rootElement = document.documentElement;
    rootElement.classList.toggle("dark", theme === "dark");
  }

  function handleChange() {
    const newTheme = theme ? "light" : "dark";
    setTheme(!theme);
    setThemeInLocalStorage(newTheme);
    applyTheme(newTheme);
  }

  // Function to set the theme in localStorage
  function setThemeInLocalStorage(theme) {
    localStorage.setItem("selectedTheme", theme);
  }

  return (
    <>
      <div
        className={`bg-light dark:bg-dbg w-screen min-h-screen text-dbg ${
          themeLoaded ? "" : "hidden"
        } dark:text-white`}
      >
        <div className="bg-mbgl dark:bg-mbgd mobile:bg-tbgl mobile:dark:bg-tbgd desktop:bg-dbgl desktop:dark:bg-dbgd bg-cover  w-full h-full min-h-screen">
          <div
            className={`flex items-center flex-wrap gap-3 max-w-[1400px] ${subjectCont} mx-auto  py-[16px] mobile:py-[40px] tablet:pb-[75px] tablet:pt-[70px]  px-[5vw] exsm:px-[24px] mobile:px-[44px]`}
          >
            <div
              className={`flex items-center gap-3 mobile:gap-[20px] ${subject}`}
            >
              <img
                src={titleImg}
                alt="option_icon"
                className=" w-[40px] h-[40px] mobile:w-[56px] mobile:h-[56px]"
              />
              <h3 className=" hidden capitalize exsm:block text-[18px] mobile:text-[28px] font-medium">
                {title}
              </h3>
            </div>
            <div className="flex items-center gap-3">
              <img src={sun} alt="light-mode-icon" />
              <div
                onClick={handleChange}
                className="flex w-[32px] h-[20px] px-[3px] mobile:w-[48px] mobile:h-[28px] mobile:px-[4px] bg-blue rounded-[50px]  transition-all duration-300"
              >
                <span
                  className={`mobile:h-[20px] h-[14px] w-[14px] mobile:w-[20px] ${
                    theme ? "mobile:ml-[20px] ml-[12px]" : ""
                  } bg-white rounded-[50%] my-auto transition-all duration-300 shadow-lg`}
                />
              </div>
              <img src={moon} />
            </div>
          </div>
          <div className="px-[5vw] exsm:px-[24px] py-[32px] mobile:px-[44px] max-w-[1400px] mx-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
