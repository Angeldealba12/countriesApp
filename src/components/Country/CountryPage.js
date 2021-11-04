import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Weather from './Weather'

export const CountryPage = () => {

    const { username } = useParams()
    const [flag, setFlag] = useState();
    const [nativeName, setNativeName] = useState();
    const [officialName, setOfficialName] = useState();
    const [spellings, setSpellings] = useState();
    const [region, setRegion] = useState();
    const [subRegion, setSubRegion] = useState();
    const [capital, setCapital] = useState();
    const [Demonym, setDemonym] = useState();
    const [borders, setBorders] = useState([]);
    const [code2, setCode2] = useState();
    const [code3, setCode3] = useState();
    const [numericCode, setNumericCode] = useState();
    const [interCallingCode, setInterCallingCode] = useState();


    useEffect(() => {
        if(username){
            const logic = async () => {
                const data = await fetch(`https://restcountries.com/v3.1/name/${username}`);
                const response = await data.json();
                setFlag(response[0].flags.png)
                setNativeName(response[0].name.common)
                setOfficialName(response[0].name.official)
                setSpellings(response[0].altSpellings[0])
                setRegion(response[0].region)
                setSubRegion(response[0].region)
                setCapital(response[0].capital)
                setDemonym(response[0].demonyms.eng.f)
                setBorders(response[0].borders)
                setCode2(response[0].cca2)
                setCode3(response[0].cca3)
                setNumericCode(response[0].ccn3)
                setInterCallingCode(response[0].ccn3)
                
            }
            logic();
        }
        
    }, [username])

    

    return (
        <div className="container-country" >
           <h1>{username}</h1> 
           <div className="boxes">
               <div className="box">
                <img src= {flag} alt={username} />
               </div>
               <div className="box">
                <h2>Names</h2>
                <div className="box-info">
                    <h3>Common</h3>
                    <p>{username}</p>
                    <h3>Official</h3>
                    <p>{officialName}</p>
                    <h3>Common(Native)</h3>
                    <p>{nativeName}</p>
                    <h3>Official(Native)</h3>
                    <p>{officialName}</p>
                    <h3>Alternative Spellings</h3>
                    <p>{spellings}, {nativeName}, {officialName}</p>
                </div>
               </div>
               <Weather city={capital} />
               <div className="box">
               <h2>Codes</h2>
               <div className="box-info">
                    <h3>ISO 3166-1 alpha-2</h3>
                    <p>{code2}</p>
                    <h3>ISO 3166-1 alpha-3</h3>
                    <p>{code3}</p>
                    <h3>ISO 3166-1 numeric</h3>
                    <p>{numericCode}</p>
                    <h3>International calling code</h3>
                    <p>{interCallingCode}</p>
                    <h3>Top level domain</h3>
                </div>
               </div>
               <div className="box">
               <h2>Geography</h2>
               <div className="box-info">
                    <h3>Region</h3>
                    <p>{region}</p>
                    <h3>Continent</h3>
                    <p>{subRegion}</p>
                    <h3>Capital</h3>
                    <p>{capital}</p>
                    <h3>Demonym</h3>
                    <p>{Demonym}</p>
                    <h3>Borders</h3>
                     {
                         borders.map((value) =>{
                             return(
                                <p key={value}>{value}</p>
                             )
                         })
                     }  
                </div>
               </div>        
           </div>
        </div>
    )
}
