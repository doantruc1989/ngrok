import { useState, useEffect } from 'react';
import paginate from './util';
import axios from 'axios';
const url = 'http://5049-115-79-210-160.ap.ngrok.io/product'

export const useFetch = () => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    const getProducts = async () => {
        try {
            await axios.get(url)
                .then((response) => {
                    setData(paginate(response.data))
                    setLoading(false)
                })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProducts()
    }, [])
    return { loading, data }
}