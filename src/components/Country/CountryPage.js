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
    const [nativeLanguage, setNativelanguage] = useState();
    const [languages, setLanguages] = useState([]);
    const [region, setRegion] = useState();
    const [subRegion, setSubRegion] = useState();
    const [capital, setCapital] = useState();
    const [Demonym, setDemonym] = useState();
    const [borders, setBorders] = useState([]);
    const [code2, setCode2] = useState();
    const [code3, setCode3] = useState();
    const [numericCode, setNumericCode] = useState();
    const [interCallingCode, setInterCallingCode] = useState();
    const [topLevelDomain, setTopLevelDomain] = useState();


    useEffect(() => {
        if(username){
            const logic = async () => {
                const data = await fetch(`https://restcountries.com/v2/name/${username}`);
                const response = await data.json();
                setFlag(response[0].flags[0])
                setNativeName(response[0].nativeName)
                setOfficialName(response[0].altSpellings[1])
                setSpellings(response[0].altSpellings[0])
                setNativelanguage(response[0].languages[0].nativeName)
                setLanguages(response[0].languages)
                setRegion(response[0].region)
                setSubRegion(response[0].subregion)
                setCapital(response[0].capital)
                setDemonym(response[0].demonym)
                setBorders(response[0].borders)
                setCode2(response[0].alpha2Code)
                setCode3(response[0].alpha3Code)
                setNumericCode(response[0].numericCode)
                setInterCallingCode(response[0].callingCodes[0])
                setTopLevelDomain(response[0].topLevelDomain[0])
                
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
               <div className="box">
                <h2>Language</h2>
                <div className="box-info">
                    <h3>Native Language</h3>
                    <p>{nativeLanguage}</p>
                    <h3>Languages</h3>
                    {
                        languages.map((value) => {
                            return(
                                <p key={value.name}>{value.iso639_1}, {value.name}, {value.nativeName}</p>
                            )
                        })
                    }
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
                    <p>{topLevelDomain}</p>
                </div>
               </div>
               <div className="box">
               <h2>Geography</h2>
               <div className="box-info">
                    <h3>Region</h3>
                    <p>{region}</p>
                    <h3>Subregion</h3>
                    <p>{subRegion}</p>
                    <h3>Capital</h3>
                    <p>{capital}</p>
                    <h3>Demonym</h3>
                    <p>{Demonym}</p>
                    <h3>Borders</h3>
                     {
                         borders.map((value) =>{
                             return(
                                <p key={value} >{value}</p>
                             )
                         })
                     }  
                </div>
               </div>        
           </div>
        </div>
    )
}
