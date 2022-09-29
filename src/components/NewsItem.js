
import React, { Component } from 'react'
import './NewsItem.css'
export class NewsItem extends Component {
    
    render() {
        let {title,description,imageUrl,newsUrl,date,author,source} = this.props;
        return (
            <div className="card my-3" >
                <div className="card">
                <span class="badge  text-bg-info">{source}</span>

                <img src={!imageUrl?"https://cdn-icons-png.flaticon.com/512/16/16096.png":imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text text-end badge bg-danger text-wrap fw-light" > By: {author}</p>
                        <p className="card-text">{description}...</p>
                        <p><small className="card-text text-muted " >Published on : {new Date(date).toGMTString()}</small></p>
                        <a rel='noreferrer' href={newsUrl} target={'_blank'} className="btn btn-sm btn-dark">Read more</a>
                    </div>
                    </div>
            </div>
        )
    }
}