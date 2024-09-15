import React from "react";
import "./shimar.css";

export default function shimarEffect() {
  const cardArray = Array.from({ length: 10 }).map((e, i) => {
    return (
      <div key={i} className="firstcountry shimarcarddetails">
        <div className="shimarcard"></div>
        <h1></h1>
        <p></p>
        <p></p>
        <p></p>
      </div>
    );
  });

  // console.log(cardArray);

  return (
    <div className="container-container">
      <section id="countryboxes">{cardArray}</section>
    </div>
  );
}
