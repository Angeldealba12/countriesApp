import React from "react";
import { useState } from "react";
import Regions from "./Regions";
import { Link } from "react-router-dom";


const SelectRegions = () => {
  const [region, setRegion] = useState("");
  const [regions] = useState([
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
  ]);

  return (
    <div className="region-section">
      <div  style={{marginTop: '2rem'}} className="title-all all2">
        <h2>Explore by Region</h2>
      </div>
      <div className="select">
        {regions.map((region) => {
          return (
            <button
              onClick={() => setRegion(region)}
              className="region"
              key={region}
            >
              {region}
            </button>
          );
        })}
      </div>
      <div className="title-all all2">
        <h2>{region}</h2>
      </div>
      <Regions region={region} />
      {
        region.length !== 0 ? <Link className="moreRegion" to={`/regions/${region}`}>
        »︁
    </Link> : null
      }
      
      
    </div>
  );
};

export default SelectRegions;
