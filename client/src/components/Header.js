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
          <ModalModalExample />
          <div className="right menu">
            <div className="ui right aligned category search item">
              <div className="ui transparent icon input">
                <input type="text" className="prompt" placeholder="Search animals..." />
                <i className="search link icon"></i>
              </div>
              <div className="results">
              </div>
            </div>
          </div>
        </div>

      </div>

    )
  }
}

export default Header;
