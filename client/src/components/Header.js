import React, { Component } from "react";
import Login from "./Login";
import Register from "./Register";
import logo from "../assets/logo.png"
import { connect } from "react-redux";
import { Modal } from "semantic-ui-react";

class Header extends Component {
  constructor(props){
    super(props);
    this.state = { userData: "", login: true, header: "Login"}
    this.handleRegister = this.handleRegister.bind(this);
    this.handleLogin = this.handleLogin.bind(this);

  }

  handleRegister = () => {
    this.setState({ login: false,
                    header: "Register"});
  }

  handleLogin = () => {
    this.setState({ login: true,
                    header: "Login"});
  }
  renderContent() {
    switch(this.props.auth){
      case null:
        return;
      case false:
        const showLogin = this.state.login ? (<Login handleRegister={this.handleRegister} />) : (<Register handleLogin={this.handleLogin} />);
        return (
          <Modal closeIcon closeOnDimmerClick={false} onClose={this.handleLogin} size="tiny" trigger={<a className="item">Login</a>}>
            <Modal.Header style={{backgroundColor: "#005ce6", color:"white"}}>{this.state.header}</Modal.Header>
            <Modal.Content>
              {showLogin}
            </Modal.Content>
          </Modal>
        )
      default:
        return(
        <a className="item"> Hello {this.props.auth.firstName}</a>
      )
    }
  }
  // for some reason did not work when being called. so i had to call move the contents into the switch statement in renderContent
  // renderModal () {
  //   const showLogin = this.state.login ? (<Login handleRegister={this.handleRegister} />) : (<Register handleLogin={this.handleLogin} />);
  //   return (
  //     <Modal closeIcon closeOnDimmerClick={false} onClose={this.handleLogin} size="tiny" trigger={<a className="item">Login</a>}>
  //       <Modal.Header style={{backgroundColor: "#005ce6", color:"white"}}>{this.state.header}</Modal.Header>
  //       <Modal.Content>
  //         {showLogin}
  //       </Modal.Content>
  //     </Modal>
  //   )
  // }
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


    //console.log(user);
    return (
      <div>
        {this.renderLogo()}
        <div className="ui menu hover" style={{ padding: 0}}>
          <a className="item">All Devices</a>
          <a className="item">My Devices</a>
          <div className="right menu">
            {this.renderContent()}
          </div>
        </div>
    </div>


    )
  }
}

function mapStateToProps({auth}){
  return { auth };
}

export default connect(mapStateToProps)(Header);
