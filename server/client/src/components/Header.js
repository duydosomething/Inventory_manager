import React, { Component } from "react";
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
        <div class="ui menu hover" style={{ padding: 0}}>
          <a class="item">Editorials</a>
          <a class="item">Reviews</a>
          <a class="item">Upcoming Events</a>
          <div class="right menu">
            <div class="ui right aligned category search item">
              <div class="ui transparent icon input">
                <input type="text" class="prompt" placeholder="Search animals..." />
                <i class="search link icon"></i>
              </div>
              <div class="results">
              </div>
            </div>
          </div>
        </div>

      </div>

    )
  }
}

export default Header;
