import React from 'react'
import { useState, useEffect } from 'react'
import CarouselComponent from './Carousel'
import '../Home/Regions.css'


const Regions = ({region}) => {
    
    const [regionsArr, setRegionArr] = useState([])

    useEffect(() =>{
        if(region){
            const logic = async () => {
                const data = await fetch(`https://restcountries.eu/rest/v2/region/${region}`)
                const response = await data.json();
                setRegionArr(response)
            }
            logic();
        }
        
    }, [region])

    const list = regionsArr.map((country) => (<CarouselComponent
         key={country.name} 
         name={country.name}
         flag={country.flag}
         alpha2Code={country.alpha2Code} 
         capital={country.capital} 
         region = {country.region}
         
         />))


    return (
       <div className="countries-by-region">
       {list}
       </div>      
    )
}

export default Regions