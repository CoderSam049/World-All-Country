import React, { useContext, useState } from "react";
import CountrySearch from "./CountrySearch";
import CountryFilter from "./CountryFilter";
import CountryCard from "./CountryCard";
// import { useOutletContext } from "react-router-dom";
import { Themecontext } from "./countryhelp";


export default function CountrySearchFilter() {
  const [query, setQuery] = useState("");
  const handleset = (e) => {
    setQuery(e.target.value);
  };

  // const[isdark]=  useOutletContext()   // avoid this useoutlet and use createcontext

  const [isdark] = useContext(Themecontext);

//  const windowwidth=  useWindowSize()   //example oshook

  return (
    <div className={`${isdark ? "mode" : "homepage"} `}>
      <main className="hero-section">
        <div className="search-container">
          <CountrySearch setcountryQuery={handleset}></CountrySearch>
          <CountryFilter setQuery={setQuery}></CountryFilter>
        </div>
       
        <CountryCard query={query}></CountryCard>
      </main>
    </div>
  );
}
