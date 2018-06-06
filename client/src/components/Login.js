import React, { Component } from 'react'

class Login extends Component {
  constructor(props){
<<<<<<< HEAD
    super(props)
    this.handleRegister = this.props.handleRegister.bind(this);
=======
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
      <div>Do not have an account? Please <a onClick={this.handleRegister}>Register</a></div>
    )
  }

  renderNameFields = () => {
    return (
      <div>
        <div className="field">
          <label>First Name</label>
          <input type="text" placeholder="First Name" name="firstName"/>
        </div>
        <div className="field">
          <label>Last Name</label>
          <input type="text" placeholder="Last Name" name="lastName"/>
        </div>
      </div>
    )
>>>>>>> 770bba96fd82c47b0df71dee9345aebcc041b518
  }
  render(){
    return (
      <div>
          <form action="/auth/login" method="post" className="ui form">
            <div className="field">
              <label>Email</label>
              <input type="text" placeholder="Email" name="email"/>
            </div>
            <div className="field">
              <label>Password</label>
              <input type="password" placeholder="Password" name="password"/>
            </div>
            <button type="submit" className="ui button">Submit</button>
          </form>
          <div style={{paddingTop:20}}>
            <div>Do not have an account? Please <a onClick={this.handleRegister}>Register</a></div>
          </div>
      </div>

    )
  }
}
export default Login;
