import React from 'react'
import { useState, useEffect } from 'react'
import CarouselComponent from './Carousel'
import '../Home/Regions.css'


const Regions = ({region}) => {
    
    const [regionsArr, setRegionArr] = useState([])

    useEffect(() =>{
        if(region){
            const logic = async () => {
                const data = await fetch(`https://restcountries.com/v3.1/region/${region}`)
                const response = await data.json();
                setRegionArr(response)
            }
            logic();
        }
        
    }, [region])

    const list = regionsArr.slice(0,4).map((country) => (<CarouselComponent
         key={country.name.common} 
         name={country.name.common}
         flag={country.flags.svg}
         alpha2Code={country.alpha2Code} 
         capital={country.capital} 
         region = {country.region}
         
         />))


    return (
       <div className="countriesContainer regions-container">
       {list}
       </div>      
    )
}

export default Regions