import React, { Component } from "react";

class Table extends Component {
  render_table_rows() {
    // Will eventually populate rows from mongodb
    return (
      <tbody className="">
        <tr className="">
          <td className="">EA8500</td>
          <td className="">111111111111111</td>
          <td className="">111111111111111</td>
          <td className="">Duy Tong</td>
          <td className="">AH SKU</td>
          <td className="">
            <div className="ui buttons">
              <button className="ui button">REQUEST</button>
              <div className="or">
              </div>
              <button className="ui positive button">SEND</button>
            </div>
          </td>
        </tr>
        <tr className="">
          <td className="">EA8500</td>
          <td className="">222222222222222</td>
          <td className="">222222222222222</td>
          <td className="">Duy Tong</td>
          <td className="">AH SKU</td>
          <td className="">
            <div className="ui buttons">
              <button className="ui button">REQUEST</button>
              <div className="or">
              </div>
              <button className="ui positive button">SEND</button>
            </div>
          </td>
        </tr>
      </tbody>
    )
  }
  render(){
    return (
      <div style={{ padding: 10 }}>
        <table className="ui striped table">
          <thead className="">
            <tr className="">
              <th className="">SKU</th>
              <th className="">UID</th>
              <th className="">SERIAL NUMBER</th>
              <th className="">OWNER</th>
              <th className="">COMMENT</th>
              <th className="">ACTIONS</th>
            </tr>
          </thead>
          {this.render_table_rows()}
        </table>
      </div>
    )
  }
}

export default Table;
