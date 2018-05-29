import React from 'react'
import { Modal, Button } from 'semantic-ui-react'

const ModalModalExample = () => (
  <Modal size="small" trigger={<a class="item">Show Modal</a>}>
    <Modal.Header>Login</Modal.Header>
    <Modal.Content>
      <div class="ui input label teal">Email</div>
        <input type="text" name="email"/>
      <div class="ui input label teal">Password</div>
        <input type="text" name="email"/>
      <div style={{ padding: 10}}>
        <button class="ui left floated primary button">Submit</button>
        <button class="ui right floated primary button">Register</button>
      </div>


    </Modal.Content>

  </Modal>
)

export default ModalModalExample;
