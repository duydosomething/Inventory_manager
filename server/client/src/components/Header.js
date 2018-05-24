import React, { Component } from "react";
import logo from "../assets/linksys-logo.png"

class Header extends Component {
  renderLogo() {
    return (
      <div id="container" style={{backgroundColor: "gray"}}>
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
        <div class="ui menu hover" style={{ padding: 0}}>
          <a class="item">Editorials</a>
          <a class="item">Reviews</a>
          <a class="item">Upcoming Events</a>
        </div>
      </div>

    )
  }
}

export default Header;
