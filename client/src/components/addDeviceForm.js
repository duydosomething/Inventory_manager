import React, { Component } from "react";
import {fetchDBUsers, addNewDevice} from "../actions";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import _ from "lodash";
import deviceCategories from "./deviceCategories";

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
    return _.map(ownerList, ({key, text}) =>{
      return <option key={key} value={key}> {text} </option>
    });
  }

  renderDeviceCategories(){
    return _.map(deviceCategories, (device) => {
      return <option key={device} value={device}> {device} </option>
    });
  }
  renderField(field){
    const { meta: {touched, error}} = field;
    return(
      <div className="form-group">
        <h3><label><strong>{field.label}</strong></label></h3>
        <input
          className="form-control"
          type="text"
          placeholder={field.placeholder}
          {...field.input}
          style={{marginBottom: "5px"}}
        />
        {touched && error ?
          (<div className="ui pointing red basic label" style={{marginBottom: "5px"}}>
            {error}
          </div>) : ""}
      </div>

    )
  }
  render() {

    // Need to make a list of all users

    const {handleSubmit } = this.props;
    return (
      <div className="container" style={{padding:45}}>
        <h2>Add a new device</h2>
        <form onSubmit={handleSubmit(this.props.addNewDevice)} className="ui form">
            <Field component={this.renderField} label="SKU" name="sku" placeholder="SKU"/>
            <Field component={this.renderField} label="Unique Identifier" name="uid" placeholder="UID"/>
            <Field component={this.renderField} label="Serial Number" name="serialNumber" placeholder="Serial Number"/>
            <h3><label><strong>Device Categories</strong></label></h3>
            <Field component="select" name="deviceCategory" className="ui dropdown" style={{marginBottom: "5px"}}>
              {this.renderDeviceCategories()}
            </Field>
            <h3><label><strong>Owner</strong></label></h3>
            <Field component="select" name="owner" className="ui dropdown" style={{marginBottom: "5px"}}>
              {this.renderOwnerDropdown()}
            </Field>
            <h3><label><strong>Comment</strong></label></h3>
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
  if(!values.uid){
    errors.uid = "Enter a unique identifier";
  }
  if(!values.sn){
    errors.sn = "Enter a serial number";
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
