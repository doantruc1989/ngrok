import { useState, useEffect } from 'react';
import paginate from '../Product/util';
import axios from 'axios';
import { useParams } from 'react-router-dom';


export const useFetch = () => {
    const { categoryname } = useParams()
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    const getProducts = async () => {
        try {
            await axios.get(`http://5049-115-79-210-160.ap.ngrok.io/category/${categoryname}`)
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