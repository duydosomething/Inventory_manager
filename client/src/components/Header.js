import React, { Component } from "react";
import ModalModalExample from "./Login";
import logo from "../assets/linksys-logo.png"

class Header extends Component {
  renderLogo() {
    return (
      <div id="container">
        <img src={logo} style=
          {{
            maxWidth: "30%",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto"
        }}/>
      </div>
    )
  }
  render() {
    
    return (
      <div>

        {this.renderLogo()}

        <div className="ui menu hover" style={{ padding: 0}}>
          <a className="item">All Devices</a>
          <a className="item">My Devices</a>

          <div className="right menu">
            <ModalModalExample />
          </div>
        </div>
    </div>


    )
  }
}

export default Header;
