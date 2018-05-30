import React, { Component } from 'react'
import { Modal, Button } from 'semantic-ui-react'

class ModalModalExample extends Component {
  constructor(props){
    super(props);
    this.state = { login: true,
                    header: "Login"}

  }

  handleRegister = () => {
    this.setState({ header: "Register"})
    this.setState({ login: false });
  }

  handleLogin = () => {
    this.setState({ header: "Login"})
    this.setState({ login: true });
  }

  renderToLogin = () => {
    return (
      <div>Already have account? Please <a onClick={this.handleLogin}>Log in</a></div>
    )
  }

  renderToRegister = () => {
    return (
      <div>Don't have an account? Please <a onClick={this.handleRegister}>Register</a></div>
    )
  }
  render(){
    //this.header = this.state.login ? "Login" : "Register";
    return (
      <Modal onClose={this.handleLogin} size="tiny" trigger={<a class="item">Login</a>}>
        <Modal.Header style={{backgroundColor: "#005ce6", color:"white"}}>{this.state.header}</Modal.Header>
        <Modal.Content>
          <div>
              <form class="ui form">
                <div class="field">
                  <label>Email</label>
                  <input placeholder="Email" />
                </div>
                <div class="field">
                  <label>Password</label>
                  <input placeholder="Password" />
                </div>
                <button type="submit" class="ui button" role="button">Submit</button>
              </form>
              <div style={{paddingTop:20}}>
            {this.state.login ?
              this.renderToRegister() : this.renderToLogin()

              //<button onClick={this.handleRegister} class="ui right floated primary button">Register</button> :
              //<button onClick={this.handleLogin} class="ui right floated primary button">Login</button>
            }
            </div>
          </div>
        </Modal.Content>
      </Modal>
    )
  }
}
export default ModalModalExample;
