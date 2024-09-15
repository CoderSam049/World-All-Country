import React from "react";
import { Link } from "react-router-dom";
export default function CountryList({
  name,
  flags,
  populations,
  region,
  capital,
  countryData,
}) {
  // console.log(countryData)
  return (
    <Link to={`/${name}`} className="firstcountry" state={{ countryData }}>
      <img src={flags} alt={name} />
      <div className="country-details">
        <h3 className="contry-name">{name}</h3>
        <p>
          <b>popultions: </b>
          <span>{populations}</span>
        </p>
        <p>
          <b>region:</b>
          <span> {region}</span>
        </p>
        <p>
          <b>capital :</b> <span> {capital}</span>
        </p>
      </div>
    </Link>
  );
}
