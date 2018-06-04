import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom"
import Header from "./Header"
import Table from "./Table"

class App extends Component {
  render(){
    return (
      <div>
        <BrowserRouter>
          <div className="container">
            <Header />
            <Route exact path="/" component={Table} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
