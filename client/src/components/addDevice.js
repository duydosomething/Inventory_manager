import React, { Component } from "react";

class addDevice extends Component {
  render() {
    return (
      <div class="container" style={{padding:45}}>
        Add a new device
        <form action="/api/adddevice" method="post" class="ui form">
          <div className="field">
            <label>SKU</label>
            <input type="text" placeholder="SKU" name="sku"/>
          </div>
          <div className="field">
            <label>Unique Identifier</label>
            <input type="text" placeholder="UID" name="uid"/>
          </div>
          <div className="field">
            <label>Serial Number</label>
            <input type="text" placeholder="Serial Number" name="serialnumber"/>
          </div>
          <div className="field">
            <label>Comment</label>
            <textarea placeholder="Comment..." name="commment" style={{height: 100}}/>
          </div>
        </form>
      </div>
    )
  }
}

export default addDevice;
