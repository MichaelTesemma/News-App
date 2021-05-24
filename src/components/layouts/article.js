import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Article = () => {

    const [articles, setArticles] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:3001/articles/${window.location.pathname.slice(9)}`)
        .then(res => {
            setArticles(res.data)
        })
    },[])
    console.log(articles)

    return(
        <div>
            <h1>{articles.title}</h1>
            <p>{articles.body}</p>
        </div>
    )
}

export default Article