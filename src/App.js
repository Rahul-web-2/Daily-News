import React,{Component} from 'react';
import { BrowserRouter as Router,Routes,  Route } from 'react-router-dom'
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
        <Routes>
          <Route  path="/" element={<Navbar title="Welcome" />}/>
           <Route  path="/" element={<Newscomp  pageSize={this.pageSize} apiKey={this.apiKey} country={this.country} category="General" />}/>
          <Route  path="/Business" element={<Newscomp pageSize={this.pageSize} apiKey={this.apiKey} country={this.country} category="Business" />}/>
          <Route  path="/Entertainment" element={<Newscomp pageSize={this.pageSize} apiKey={this.apiKey} country={this.country} category="Entertainment" />}/>
      <Route  path="/Health" element={<Newscomp pageSize={this.pageSize} apiKey={this.apiKey} country={this.country} category="Health" />}/>
      <Route  path="/Science" element={<Newscomp pageSize={this.pageSize} apiKey={this.apiKey} country={this.country} category="Science" />}/>
      <Route  path="/Sports" element={<Newscomp pageSize={this.pageSize} apiKey={this.apiKey} country={this.country} category="Sports" />}/>
      <Route  path="/Technology" element={<Newscomp pageSize={this.pageSize} apiKey={this.apiKey} country={this.country} category="Technology" />}/>
      <Route  path="/MoneyControl" element={<Newscomp pageSize={this.pageSize} apiKey={this.apiKey} domains={'moneycontrol.com'} category="MoneyControl" />}/>
      <Route  path="/Aajtak" element={<Newscomp pageSize={this.pageSize} apiKey={this.apiKey} domains={'aajtak.in'} category="Aajtak" />}/> 
      <Route exact path="/India" element={<Newscomp pageSize={this.pageSize} apiKey={this.apiKey} domains={'indiatoday.in'} category="India Today" />}/>
      
      </Routes>
       
      </Router>
        
        
  
      </>
    )
  }
  
}
