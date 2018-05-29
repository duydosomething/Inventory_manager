import React, { Component } from 'react'
import { Modal, Button } from 'semantic-ui-react'

class ModalModalExample extends Component {
  constructor(props){
    super(props);
    this.state = { login: true }
  }

  handleRegister = () => {
    this.setState({ login: false });
  }

  handleLogin = () => {
    this.setState({ login: true });
  }

  render(){
    this.header = this.state.login ? "Login" : "Register";
    return (
      <Modal size="tiny" trigger={<a class="item">Show Modal</a>}>

        <Modal.Header>{this.header}</Modal.Header>
        <Modal.Content>
          <div class="ui input label teal">Email</div>
            <input type="text" name="email"/>
          <div class="ui input label teal">Password</div>
            <input type="text" name="email"/>
          <div style={{ padding: 10}}>
            <button class="ui left floated primary button">Submit</button>
            {this.state.login ?
              <button onClick={this.handleRegister} class="ui right floated primary button">Register</button> :
              <button onClick={this.handleLogin} class="ui right floated primary button">Login</button>
            }
          </div>
        </Modal.Content>
      </Modal>
    )
  }
}
export default ModalModalExample;
