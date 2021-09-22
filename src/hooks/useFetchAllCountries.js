import { useState, useEffect } from 'react';
import { getAllCountries } from '../helpers/getAllCountries';

export const useFetchAllCountries = () => {

    const [state, setState] = useState({
        data: []
    })

    useEffect(() =>{
        getAllCountries()
        .then((countries) => {
            setState({data: countries})
        })
    },[])

    return state
}