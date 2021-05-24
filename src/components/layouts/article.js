import React from 'react'
import axios from 'axios'

export default class Article extends React.Component{
    state={
        article:[]
    }
    componentDidMount(){
        axios.get(`http://localhost:3001/articles/${window.location.pathname.slice(9)}`)
        .then(res => {
            this.setState({article: [res.data]})
        })
    }

    render(){
     const read = Object.keys(this.state.article).map(item => {
         return(
             <div>
                 <h1>{item.title}</h1>
                 {console.log(item.title)}
             </div>
         )
     })
     console.log(read)
        return(
            <div>{read}</div>
        )
    }
}