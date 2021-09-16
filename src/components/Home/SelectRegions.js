import React from "react";
import { useState } from "react";
import Regions from "./Regions";



const SelectRegions = () => {

  const [region, setRegion] = useState('Americas')  
  const [regions] = useState([
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
  ]);

  
  return (
    <div className="region-section">
      <div className="select">
      <div className="title-all all2">
        <h2>{region}</h2>
      </div>
      {
         regions.map((region => {
             return (
                 <button onClick={() => setRegion(region)} className="region" key={region}>{region}</button>
         )
         })) 
      }
        </div>  
        <Regions region={region}/>
    </div>
  );
};

export default SelectRegions;
