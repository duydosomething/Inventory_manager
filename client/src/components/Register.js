import React, { Component } from 'react';

class Register extends Component {
  constructor(props){
    super(props)
    this.handleLogin = this.props.handleLogin.bind(this);
  }

  render() {
    return (
      <div>
        <div>
            <form action="/auth/register" method="post" className="ui form">
            <div className="field">
              <label>First Name</label>
              <input type="text" placeholder="First Name" name="firstName"/>
            </div>
            <div className="field">
              <label>Last Name</label>
              <input type="text" placeholder="Last Name" name="lastName"/>
            </div>
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
              <div>Already have account? Please <a onClick={this.handleLogin}>Login</a></div>
            </div>
        </div>
      </div>
    )
  }
}

export default Register;
