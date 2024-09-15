import React, { useState } from "react";

import "./Country.css";
import { useContext } from "react";
import { Themecontext } from "./countryhelp";

export default function Header({theme}) {

  const [isdark,setIsDark]= useContext(Themecontext)
  // console.log(isdark)
  return (
    <header className={isdark? 'mode' : ''}>
      <nav className="header">
        <h1>Where in the World</h1>
        <p className="lightmode">
          <i
            onClick={() => {
              setIsDark(!isdark);

              localStorage.setItem("isdark",!isdark);
            }}
            className={`fa-solid ${isdark ? "fa-moon" : "fa-sun"}`}
          ></i>
          &nbsp;&nbsp; {isdark ? "Light Mode" : "dark mode"}
        </p>
      
      </nav>
    </header>
  );
}
