import { useState, useEffect } from 'react'
import { getCountry } from '../helpers/getCountry'


export const useFetchCountry = ( country ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {

        setState({
            data: [],
            loading: true
        })

        getCountry(country)
        .then( countries => {
            setTimeout(() => {
                setState({ 
                    data: countries,
                    loading: false,
                })
            }, 1000)
        })


    }, [country])

    return state;

}