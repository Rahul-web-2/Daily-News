import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Newscomp from './Components/Newscomp';
import Navbar from './Components/Navbar';
import './App.css';

export default class App extends Component {
  pageSize = 6;
  apiKey = process.env.REACT_APP_NEWS_API_KEY;
  country = 'in';

  render() {
    return (
      <>
        <Router>
          {/* Navbar is placed outside of Routes so that it appears on every page */}
          <Navbar title="Welcome" />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Newscomp
                  pageSize={this.pageSize}
                  apiKey={this.apiKey}
                  country={this.country}
                  category="General"
                />
              }
            />
            <Route
              exact
              path="/Business"
              element={
                <Newscomp
                  pageSize={this.pageSize}
                  apiKey={this.apiKey}
                  country={this.country}
                  category="Business"
                />
              }
            />
            <Route
              exact
              path="/Entertainment"
              element={
                <Newscomp
                  pageSize={this.pageSize}
                  apiKey={this.apiKey}
                  country={this.country}
                  category="Entertainment"
                />
              }
            />
            <Route
              exact
              path="/Health"
              element={
                <Newscomp
                  pageSize={this.pageSize}
                  apiKey={this.apiKey}
                  country={this.country}
                  category="Health"
                />
              }
            />
            <Route
              exact
              path="/Science"
              element={
                <Newscomp
                  pageSize={this.pageSize}
                  apiKey={this.apiKey}
                  country={this.country}
                  category="Science"
                />
              }
            />
            <Route
              exact
              path="/Sports"
              element={
                <Newscomp
                  pageSize={this.pageSize}
                  apiKey={this.apiKey}
                  country={this.country}
                  category="Sports"
                />
              }
            />
            <Route
              exact
              path="/Technology"
              element={
                <Newscomp
                  pageSize={this.pageSize}
                  apiKey={this.apiKey}
                  country={this.country}
                  category="Technology"
                />
              }
            />
            <Route
              exact
              path="/MoneyControl"
              element={
                <Newscomp
                  pageSize={this.pageSize}
                  apiKey={this.apiKey}
                  country={this.country}
                  domains="moneycontrol.com"
                  category="MoneyControl"
                />
              }
            />
            <Route
              exact
              path="/Aajtak"
              element={
                <Newscomp
                  pageSize={this.pageSize}
                  apiKey={this.apiKey}
                  country={this.country}
                  domains="aajtak.in"
                  category="Aajtak"
                />
              }
            />
            <Route
              exact
              path="/India"
              element={
                <Newscomp
                  pageSize={this.pageSize}
                  apiKey={this.apiKey}
                  domains="indiatoday.in"
                  category="India Today"
                />
              }
            />
          </Routes>
        </Router>
      </>
    );
  }
}
