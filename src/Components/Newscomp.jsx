import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Newsitem from './Newsitem'

export default class Newscomp extends Component {
    static defaultProps={
        country:'in',
        category:'General',
        pageSize:5
    }
    static propTypes={
        country:PropTypes.string,  
        category:PropTypes.string,
        pageSize:PropTypes.number
    }
    handlePrv = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        })
    }
    handleNex = async () => {
        if(this.state.page+1 > Math.ceil(this.state.totalResults/12)){}
        else{ 
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles
        })}
       
    }
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }
    async getFirstApiResposnse(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults })
    }
    async getSecondApiResponse(){
        let url = `https://newsapi.org/v2/everything?domains=${this.props.domains}&apiKey=${this.props.apiKey} &pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults })
    }
    componentDidMount() {
        this.getFirstApiResposnse();
        this.getSecondApiResponse();
    }
    render() {
        return (
            <div className='container my-3'>
                <h2>Top headlines of the day - {this.props.category}</h2>
                <div className='row'>
                    {this.state.articles.map((element) => {
                        return <div className='col-md-4' key={element.url}>
                            <Newsitem title={element.title ? element.title.slice(0, 40) : ""}
                                description={element.description ? element.description.slice(0, 50) : ""} newsUrl={element.url} imageUrl={element.urlToImage} />
                        </div>
                    })}
                </div>
                <div className='container d-flex justify-content-between my-3'>
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrv}>Previous</button>
                    <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/10)} type="button" className="btn btn-dark" onClick={this.handleNex}>Next</button>
                </div>
            </div>
        )
    }
}
