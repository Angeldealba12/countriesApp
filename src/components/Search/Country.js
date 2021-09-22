import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'



const Country = ({ country }) => {

    const [data, setData] = useState([])

    useEffect(() => {
        if(country){
            const logic = async () => {

                const data = await fetch(`https://restcountries.eu/rest/v2/name/${ encodeURI( country )}`);
                const response = await data.json();
            
                const countryInfo = response.map(country => {
                    return {
                        name: country.name,
                        capital: country.capital,
                        alpha2Code: country.alpha2Code,
                        region: country.region,
                        flag: country.flag,
                    }
                })

               setData(countryInfo)
               

            }
            logic()
        }

    },[country])



    return (
        <>
     <div className="countries" >
         {
             data.map((data) => {
                 return (
                    <div className="img" key={data.name}>
                    <img src={data.flag} alt={data.name} />
                    <h3>{data.name}</h3>
                    <h3>{data.alpha2Code}</h3>
                    {
                        data.capital ? <div><h4>Capital: {data.capital}</h4>  <h4>Region: {data.region}</h4></div> : null
                    }
                    <div className="verMasButton">
                   <Link to={`/country/${data.name}`}>More info</Link> 
                </div>
                </div>
                 )
             })
         }
            
        </div>
        </>
    )
}

export default Country