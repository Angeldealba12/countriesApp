import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



const Country = ({ country }) => {

    const [ name, setName ] = useState()
    const [ capital, setCapital] = useState()
    const [ alpha2Code, setAlpha2Code] = useState()
    const [region, setRegion] = useState()
    const [flag, setFlag] = useState()
    


    useEffect(() => {
        if(country){
            const logic = async () => {

                const data = await fetch(`https://restcountries.eu/rest/v2/name/${country}?fullText=true`);
                const response = await data.json();
                setName(response[0].name)
                setCapital(response[0].capital)
                setAlpha2Code(response[0].alpha2Code)
                setRegion(response[0].region)
                setFlag(response[0].flag)

            }
            logic()
        }

    },[country])



    return (
        <div className="countries">
            <div className="img">
                <img src={flag} alt={name} />
                <h3>{name}</h3>
                <h3>{alpha2Code}</h3>
                {
                    capital ? <div><h4>Capital: {capital}</h4>  <h4>Region: {region}</h4></div> : null
                }
                <div className="verMasButton">
               <Link to={`/country/${name}`}>More info</Link> 
            </div>
            </div>
        
        </div>

    )
}

export default Country