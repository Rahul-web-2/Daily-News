import React, { Component } from 'react'
export default class Newsitem extends Component {
    render() {
        let{ title ,description, imageUrl, newsUrl}= this.props;
        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
                    <img src={!imageUrl?"https://th.bing.com/th/id/OIP.iqiTarG6xoEVPavMLKjF_wHaHa?w=175&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7":imageUrl} className="card-img-top img-thumbnail" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}
