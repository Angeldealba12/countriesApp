import React from 'react'
import { useState, useEffect } from 'react';
import Countries from './Countries';

const Home = () => {

    const [countries, setCountries] = useState([])

    useEffect(() =>{
        const logic = async () => {
            const data = await fetch('https://restcountries.eu/rest/v2/all')
            const response = await data.json();
            setCountries(response)
        }
        logic();
    },[])


    const list = countries.map(country => <Countries 
    key={country.name}
    name={country.name}
    capital={country.capital}
    region={country.region}
    alpha2Code={country.alpha2Code}
    flag={country.flag}
    />)

    return (
        <div className="countriesContainer">
           {list}      
        </div>
    )
    
}

export default Home