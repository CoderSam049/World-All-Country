import React, { useEffect, useState } from "react";
import "./country2.css";
import { Link, useLocation, useParams, useNavigate } from "react-router-dom";

import { useTheme } from "../../hooks/useTheme";

import CountryDetailShimar from "./CountryDetailShimar";

export default function CountryDetails() {
  const [Countryfound, setCountryfound] = useState(false);
  const useparam = useParams();
  const countryName = useparam.country;
  const [countryData, setCountryData] = useState(null);
  const { state } = useLocation();
  const [isdark] = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}/?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        setCountryData({
          names: data.name.common,
          flags: data.flags.svg,
          nativeName: Object.values(data.name.nativeName)[0].common,
          currencyName: Object.values(data.currencies)
            .map((currencies) => currencies.name)
            .join(""),
          populations: data.population,
          topLevelDomain: data.tld.join("_"),
          languageKey: Object.keys(data.languages)[0],
          borders: [],
          capital: data.capital[0],
          subrigion: data.subregion,
          region: data.region,
        });

        if (data.borders) {
          Promise.all(
            data.borders.map((border) =>
              fetch(`https://restcountries.com/v3.1/alpha/${border}`)
                .then((res) => res.json())
                .then(([data]) => data.name.common)
            )
          ).then((borders) =>
            setCountryData((prevstate) => ({ ...prevstate, borders }))
          );
        }
      })
      .catch((e) => {
        console.log(e);
        setCountryfound(true);
      });
  }, [countryName]);

  if (Countryfound) {
    return <div>Country not Found</div>;
  }

  return countryData === null ? (
    <CountryDetailShimar/>
  ) : (
    <div className={`countryDetails ${isdark ? "mode" : ""}`}>
      <div className="newcontainer">
        <button onClick={() => navigate(-1)} className="btn back">
          <i className="fa-solid fa-arrow-left"></i> &nbsp;Back
        </button>

        <div className="country-details-flex">
          <div className="countryimg">
            <img src={countryData.flags} alt="country" />
          </div>

          <div className="butt">
            <div className="allcountry">
              <div className="country-details country-details-gap">
                <h2 className="countryh2"> {countryData.names}</h2>
                <p>
                  <b>Native Name: </b> &nbsp;&nbsp;
                  <span> {countryData?.nativeName}</span>
                </p>
                <p>
                  <b>populations:</b> &nbsp;&nbsp;
                  <span>{countryData?.populations?.toLocaleString("en-IN")}</span>
                </p>
                <p>
                  <b>region:</b> &nbsp;&nbsp;<span>{countryData?.region}</span>
                </p>
                <p>
                  <b>sub-region:</b>&nbsp;&nbsp;{" "}
                  <span>{countryData?.subrigion}</span>
                </p>
                <p>
                  <b>capital:</b> &nbsp;&nbsp;<span>{countryData?.capital}</span>
                </p>
              </div>
              <div className="country-details">
                <p>
                  <b>top level domain:</b> &nbsp;&nbsp;
                  <span>{countryData.topLevelDomain} </span>
                </p>
                <p>
                  <b>currencies:</b> &nbsp;&nbsp;
                  <span> {countryData.currencyName} </span>
                </p>
                <p>
                  <b>language:</b> &nbsp;&nbsp;
                  <span>{countryData.languageKey}</span>
                </p>
              </div>
            </div>
            <div className="bordercountry">
              {countryData.borders.length !== 0 ? (
                <>
                  <h3>Border countries:</h3>
                  {countryData.borders.map((border) => (
                    <Link key={border} to={`/${border}`} className="btn">
                      {border}
                    </Link>
                  ))}
                </>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
