
import React, { Component } from 'react'
import './NewsItem.css'
export class NewsItem extends Component {
    
    render() {
        let {title,description,imageUrl,newsUrl} = this.props;
        return (
            <div className="card my-3" style={{width : "18rem"}}>
                <img src={!imageUrl?"https://cdn-icons-png.flaticon.com/512/16/16096.png":imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a rel='noreferrer' href={newsUrl} target={'_blank'} className="btn btn-sm btn-dark">Read more</a>
                    </div>
            </div>
        )
    }
}