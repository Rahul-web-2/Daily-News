import React,{Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Newscomp from './Components/Newscomp'
import Navbar from './Components/Navbar'
//import './App.css'

export default class App  extends Component {
  pageSize= 6;
  apiKey= process.env.REACT_APP_NEWS_API_KEY
  country='in';
  
  render(){
    return (
      <>
      <Router>
      <Navbar title="Welcome" />
      <Route exact path="/">
      <Newscomp  pageSize={this.pageSize} apiKey={this.apiKey} country={this.country} category="General" />
      </Route>
      <Route exact path="/Business">
      <Newscomp pageSize={this.pageSize} apiKey={this.apiKey} country={this.country} category="Business" />
      </Route>
      <Route exact path="/Entertainment">
      <Newscomp pageSize={this.pageSize} apiKey={this.apiKey} country={this.country} category="Entertainment" />
      </Route>
      <Route exact path="/Health">
      <Newscomp pageSize={this.pageSize} apiKey={this.apiKey} country={this.country} category="Health" />
      </Route>
      <Route exact path="/Science">
      <Newscomp pageSize={this.pageSize} apiKey={this.apiKey} country={this.country} category="Science" />
      </Route>
      <Route exact path="/Sports">
      <Newscomp pageSize={this.pageSize} apiKey={this.apiKey} country={this.country} category="Sports" />
      </Route>
      <Route exact path="/Technology">
      <Newscomp pageSize={this.pageSize} apiKey={this.apiKey} country={this.country} category="Technology" />
      </Route>
      <Route exact path="/MoneyControl">
      <Newscomp pageSize={this.pageSize} apiKey={this.apiKey} domains={'moneycontrol.com'} category="MoneyControl" />
      </Route>
      <Route exact path="/Aajtak">
      <Newscomp pageSize={this.pageSize} apiKey={this.apiKey} domains={'aajtak.in'} category="Aajtak" />
      </Route>
      <Route exact path="/India">
      <Newscomp pageSize={this.pageSize} apiKey={this.apiKey} domains={'indiatoday.in'} category="India Today" />
      </Route>
       
      </Router>
        
        
  
      </>
    )
  }
  
}
