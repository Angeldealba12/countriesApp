import React from "react";
import { Link } from "react-router-dom"

const CarouselComponent = ({ name, flag, alpha2Code, capital, region }) => {
  return (
    <div className="countries">
            <div className="img">
            <img src={flag} alt={name}/>
            <h3>{name}</h3>
            <h3>{alpha2Code}</h3>
            <h4>Capital: {capital}</h4>
            <h4>Region: {region}</h4>
            <div className="verMasButton">
               <Link to={`/country/${name}`}>More info</Link> 
            </div>
            </div>
        </div>
  );
};

export default CarouselComponent;
