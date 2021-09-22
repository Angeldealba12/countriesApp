import React from 'react'
import { useState } from 'react'
import Country from './Country'


const Search = () => {

    const [inputValue, setInputValue] = useState('')
    const [country, setCountry] = useState('')

    const handleOnChange = (event) => {
        setInputValue(event.target.value)
    }

    const handleOnSubmit = (event) => {
        event.preventDefault()
            setCountry(inputValue)
            setInputValue('');
        
    }

    return (
        <div className="search-box-container">
            <form onSubmit={handleOnSubmit}>
             <h1 className="animate__animated animate__backInDown" >Search for a country</h1>   
            <input value={inputValue} type="text" className="input" placeholder="Type country..." onChange={handleOnChange}/>
            <button>Search</button>
            </form>
            {
                country.length > 0 ?  <Country country={country} /> : null
            }
            
        </div>
    )
}

export default Search;