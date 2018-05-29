import React, { Component } from "react";

class Table extends Component {
  render_table_rows() {
    // Will eventually populate rows from mongodb
    return (
      <tbody class="">
        <tr class="">
          <td class="">EA8500</td>
          <td class="">111111111111111</td>
          <td class="">111111111111111</td>
          <td class="">Duy Tong</td>
          <td class="">AH SKU</td>
          <td class="">
            <div class="ui buttons">
              <button class="ui button">REQUEST</button>
              <div class="or">
              </div>
              <button class="ui positive button">SEND</button>
            </div>
          </td>
        </tr>
        <tr class="">
          <td class="">EA8500</td>
          <td class="">222222222222222</td>
          <td class="">222222222222222</td>
          <td class="">Duy Tong</td>
          <td class="">AH SKU</td>
          <td class="">
            <div class="ui buttons">
              <button class="ui button">REQUEST</button>
              <div class="or">
              </div>
              <button class="ui positive button">SEND</button>
            </div>
          </td>
        </tr>
      </tbody>
    )
  }
  render(){
    return (
      <div style={{ padding: 10 }}>
        <table class="ui striped table">
          <thead class="">
            <tr class="">
              <th class="">SKU</th>
              <th class="">UID</th>
              <th class="">SERIAL NUMBER</th>
              <th class="">OWNER</th>
              <th class="">COMMENT</th>
              <th class="">ACTIONS</th>
            </tr>
          </thead>
          {this.render_table_rows()}
        </table>
      </div>
    )
  }
}

export default Table;
