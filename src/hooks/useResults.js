import {useEffect, useState} from 'react'

export default (apiKey) => {
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    // Getting the values from api
    const searchApi = async (term) => {
        try {
            return fetch(apiKey+term)
                    .then(response => response.json())
                    .then(results => {
                        setResults(results.meals)
                    })
        } catch (err) {
            setErrorMessage('Something went wrong')
        }

    }

    useEffect(() => {
        searchApi('')
    }, [])


    return [searchApi, results, errorMessage]
}