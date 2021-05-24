import React, {useEffect, useState} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

export default function Flask(){

    const [articles, setArticles] = useState()

    useEffect(()=>{
        axios.get("http://localhost:3001/articles")
        .then(res => {
            setArticles(res.data)
        })
    },[])
    let news = null
    try{
        news = articles.map((article) => {
            return(
                <div key={article._id}>
                    <Link to={`/article/${article._id}`}><h1>{article.title}</h1></Link>
                    <p>{article.body.slice(0, 50)}</p>
                </div>
            )
        })
    } catch(err){
        console.log(err)
    }
   
    console.log(articles)
    return(<div>{news}</div>)
}