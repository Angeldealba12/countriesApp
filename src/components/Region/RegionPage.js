import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { CountriesRegion } from './CountriesRegion'


const RegionPage = () => {

    const { region } = useParams()
    const [countries, setCountries] = useState([])

    useEffect(() =>{
        if(region){
            const logic = async () => {
                const data = await fetch(`https://restcountries.com/v2/continent/${region}`)
                const response = await data.json();
                setCountries(response)
            }
            logic();
        }
        
    }, [region])

    const list = countries.map((country) => (
    <CountriesRegion
      key={country.name}
      name={country.name}
      capital={country.capital}
      region={country.region}
      alpha2Code={country.alpha2Code}
      flag={country.flags.svg}
    />
  ));

    return (
        <>
        <div className="child-container">
        <div className="world2 title">
            <h1 className="animate__animated animate__backInDown" >{region}</h1>
        </div>
        {
            region === 'Africa' ? <div className="world image">
                <img src="https://www.pngkit.com/png/full/292-2923642_many-country-in-africa.png"  alt={region} />
            </div> : region === 'Europe' ? <div className="world image">
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Europe_flags.png"  alt={region} />
            </div> : region === 'Americas' ? <div className="world image">
                <img src="https://userscontent2.emaze.com/images/fc30f2a8-ad97-4818-85b8-731809aecce8/d403ebb290272494fe8c7ec6cb086f43.png"  alt={region} />
            </div> : region === 'Asia' ? <div className="world image">
                <img src="https://i.pinimg.com/originals/77/36/5c/77365cf0540aeb6b625ac65e076c9574.png"  alt={region} />
            </div> : region === 'Oceania' ? <div className="world image">
                <img src="https://www.allbusinesstemplates.com/thumbs/7cd984a3-1632-40f2-8777-c7d10f637f38.png"  alt={region} />
            </div> : null
        }
        </div>
        <div className="title-all" >
      <h2 style={{margin: '3rem'}} >Explore countries in {region}</h2>
      </div>
        <div className="countriesContainer">
            {list}
        </div>
        </>
        
    )
}

export default RegionPage