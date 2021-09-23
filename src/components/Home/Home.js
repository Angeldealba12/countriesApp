import React from "react";
import { useFetchAllCountries } from "../../hooks/useFetchAllCountries";
import Countries from "./Countries";
import SelectRegions from "./SelectRegions";

const Home = () => {
  
  const { data } = useFetchAllCountries()

  const list = data.map((country) => (
    <Countries
      key={country.alpha2Code}
      name={country.name}
      capital={country.capital}
      region={country.region}
      alpha2Code={country.alpha2Code}
      flag={country.flags[0]}
    />
  ));

  return (
    <>
    <div className="child-container"> 
      <div className="world2">
          <h2 className="animate__animated animate__backInDown" >
            Explore and learn about 
          </h2>
          <h1 className="animate__animated animate__bounceInDown">all the countries in the world</h1>
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
