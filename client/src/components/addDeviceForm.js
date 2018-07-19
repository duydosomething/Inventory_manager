import React, { Component } from "react";
import {fetchDBUsers, addNewDevice} from "../actions";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import _ from "lodash";

class addDeviceForm extends Component {
  componentDidMount(){
    this.props.fetchDBUsers();
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
  renderOwnerDropdown(){
    const ownerList = this.getUsers();
    return _.map(ownerList, ({value, text}) =>{
      return <option key={value} value={value}> {text} </option>
    })
  }
  renderField(field){
    return(
      <div className="form-group">
        <label><strong>{field.label}</strong></label>
        <input
          className="form-control"
          type="text"
          placeholder={field.placeholder}
          {...field.input}
          style={{marginBottom: "5px"}}
        />
      </div>
    )
  }
  render() {

    // Need to make a list of all users
    const {handleSubmit } = this.props;
    return (
      <div className="container" style={{padding:45}}>
        Add a new device
        <form onSubmit={handleSubmit(this.props.addNewDevice)} className="ui form">
            <Field component={this.renderField} label="SKU" name="sku" placeholder="SKU"/>
            <Field component={this.renderField} label="Unique Identifier" name="uid" placeholder="UID"/>
            <Field component={this.renderField} label="Serial Number" name="sn" placeholder="Serial Number"/>
            <label><strong>Owner</strong></label>
            <Field component="select" name="owner" className="ui dropdown" style={{marginBottom: "5px"}}>
              
              {this.renderOwnerDropdown()}
            </Field>
            <label><strong>Comment</strong></label>
            <Field component="textarea" name="comment" placeholder="Comment..." style={{height: 100, marginBottom: "5px"}}/>

          <button type="submit" className="ui button">Submit</button>
        </form>
      </div>
    )
  }
}
function validate(values){
  const errors = {};
  console.log(values);

  if(!values.sku){
    errors.sku = "Enter a SKU";
  }

  return errors;
}
function mapStateToProps({users}){
  return { users };
}

addDeviceForm = connect(mapStateToProps, {fetchDBUsers, addNewDevice})(addDeviceForm);
export default reduxForm({
  form: "addDeviceForm",
  validate
})(addDeviceForm);
