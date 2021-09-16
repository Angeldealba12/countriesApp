import React from "react";
import { useState } from "react";
import Regions from "./Regions";

const SelectRegions = () => {

  const [region, setRegion] = useState('')  
  const [regions] = useState([
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
  ]);

  const handleOnChange = (event) => {
      setRegion(event.target.value)
  }
  
  return (
    <div className="region-section">
      <div className="select">
      <input type="text" className="input-select" placeholder="Select Region" value={region} onChange={handleOnChange}/>
      {
         regions.map((region => {
             return (
                 <div onClick={() => setRegion(region)} className="region" key={region}><p>{region}</p></div>
         )
         })) 
      }
        </div>  
        <Regions region={region}/>
    </div>
  );
};

export default SelectRegions;
