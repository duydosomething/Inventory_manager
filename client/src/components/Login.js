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
      <Modal onClose={this.handleLogin} size="tiny" trigger={<a className="item">Login</a>}>
        <Modal.Header style={{backgroundColor: "#005ce6", color:"white"}}>{this.state.header}</Modal.Header>
        <Modal.Content>
          <div>
              <form action={this.state.login ? "/auth/login" : "/auth/register"} method="post" className="ui form">
                <div className="field">
                  <label>Email</label>
                  <input type="text" placeholder="Email" name="email"/>
                </div>
                <div className="field">
                  <label>Password</label>
                  <input type="password" placeholder="Password" name="password"/>
                </div>
                <button type="submit" className="ui button" role="button">Submit</button>
              </form>
              <div style={{paddingTop:20}}>
            {this.state.login ?
              this.renderToRegister() : this.renderToLogin()
              //<button onClick={this.handleRegister} className="ui right floated primary button">Register</button> :
              //<button onClick={this.handleLogin} className="ui right floated primary button">Login</button>
            }
            </div>
          </div>
        </Modal.Content>
      </Modal>
    )
  }
}
export default ModalModalExample;
