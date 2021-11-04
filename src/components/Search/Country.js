import React from 'react'
import { Link } from 'react-router-dom';
import { useFetchCountry } from '../../hooks/useFetchCountry';




const Country = ({ country }) => {

    
    const { data, loading } = useFetchCountry( country );


    return (
        <>
        {loading ? <p className="loading animate__animated animate__headShake">Loading...</p>:
        (
            <div className="countries animate__animated animate__heartBeat" >
            {
                data.map((data) => {
                    return (
                       <div className="img  " key={data.name.common}>
                       <img src={data.flag} alt={data.name.common} />
                       <h3>{data.name.common}</h3>
                       <h3>{data.fifa}</h3>
                       {
                           data.capital ? <div><h4>Capital: {data.capital}</h4>  <h4>Region: {data.region}</h4></div> : null
                       }
                       <div className="verMasButton">
                      <Link to={`/country/${data.name.common}`}>More info</Link> 
                   </div>
                   </div>
                    )
                })
            }
               
           </div>
        )
        }
        
    
        </>
    )
}

export default Country