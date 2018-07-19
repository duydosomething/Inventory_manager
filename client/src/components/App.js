import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import Header from "./Header"
import Table from "./Table"
import addDeviceForm from "./addDeviceForm";
import * as actions from "../actions";


class App extends Component {
  componentDidMount(){
    this.props.fetchUser();
  }

  render(){
    return (
      <div>
        <BrowserRouter>
          <div className="container">
            <Header />
            <Route exact path="/" component={Table} />
            <Route exact path="/addNewDevice" component={addDeviceForm} />

          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default connect(null, actions)(App);
