import { useEffect, useState } from "react";

import CountryList from "./CountryList";
import ShimarCard from "./ShimarCard";
export default function CountryCard({ query }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  let countryfilterdata = data.filter((data) => {
    return data.name.common.toLowerCase().includes(query) || data.region.toLowerCase().includes(query);
  });

  // console.log(data)

  return (
    <>
      {data.length === 0 ? <ShimarCard></ShimarCard> : ""}

      <div className="contary-container">
        <section id="countryboxes">
          {countryfilterdata.map((data) => {
            return (
              <CountryList
                key={data.name.common}
                name={data.name.common}
                flags={data.flags.svg}
                populations={data.population}
                region={data.region}
                capital={data.capital}
                countryData={data}
              />
            );
          })}
        </section>
      </div>
    </>
  );
}
