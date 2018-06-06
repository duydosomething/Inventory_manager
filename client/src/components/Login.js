import React, { Component } from 'react'

class Login extends Component {
  constructor(props){
    super(props)
    this.handleRegister = this.props.handleRegister.bind(this);
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
