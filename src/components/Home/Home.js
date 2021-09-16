import React from "react";
import { useState, useEffect } from "react";
import Countries from "./Countries";
import SelectRegions from "./SelectRegions";

const Home = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const logic = async () => {
      const data = await fetch("https://restcountries.eu/rest/v2/all");
      const response = await data.json();
      setCountries(response);
    };
    logic();
  }, []);

  const list = countries.map((country) => (
    <Countries
      key={country.name}
      name={country.name}
      capital={country.capital}
      region={country.region}
      alpha2Code={country.alpha2Code}
      flag={country.flag}
    />
  ));

  return (
    <>
    <div className="child-container"> 
      <div className="world2">
          <h2>
            Explore and learn about 
          </h2>
          <h1>all the countries in the world</h1>
      </div>
      <div className="world"><img src="https://acegif.com/wp-content/gifs/globe-35.gif" alt="world"/></div>
    </div>
      <div>
          <SelectRegions/>
      </div>
      
      <div className="title-all" >
      <h2 >List of all countries</h2>
      </div>
      <div className="countriesContainer">{list}</div>
    </>
  );
};

export default Home;
