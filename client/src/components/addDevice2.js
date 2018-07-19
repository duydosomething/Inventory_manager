import React, { Component } from "react";
import { Form } from 'semantic-ui-react';
import {fetchDBUsers} from "../actions";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";

class addDevice extends Component {
  componentDidMount(){
    this.props.fetchDBUsers();
  }
  handleSubmit(){

  }
  getUsers(){
    let all_users = [];
    if(this.props.users){
      this.props.users.forEach(user => {
        all_users.push({key: user._id, value: user.email, text: user.firstName + " " + user.lastName})
      }
    );
    }
    return all_users;
  }

  render() {
    console.log(this.props);
    const { handleSubmit } = this.props;
    // Need to make a list of all users
    const testitems = this.getUsers();
    return (
      <div className="container" style={{padding:45}}>
        <Form action="/api/adddevice" method="POST">
          <Form.Input fluid label='SKU' name='sku' placeholder='SKU' />
          <Form.Input fluid label='Unique Identifier' name='uid' placeholder='UID' />
          <Form.Input fluid label='Serial Number' name='sn' placeholder='Serial Number' />
          <Form.Select fluid label='Owner' name='owner' options={testitems} placeholder='Owner' />
          <Form.TextArea label='Comment' name='comment' placeholder='Comments...' />
          <Form.Button>Submit</Form.Button>
      </Form>
      </div>
    )
  }
}

function mapStateToProps({users}){
  return { users };
}

addDevice = connect(mapStateToProps, {fetchDBUsers})(addDevice);
export default reduxForm({
  form: "addDeviceForm",
  fields: ["sku", "uid", "sn", "owner", "comment"]
})(addDevice);


//export default connect(mapStateToProps, {fetchDBUsers})(addDevice);
