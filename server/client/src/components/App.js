import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom"
import Header from "./Header"
import Table from "./Table"

class App extends Component {
  render(){
    return (
      <div>
        <BrowserRouter>
          <div className="container">
            <Header />
            <Table />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
