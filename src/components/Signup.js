import React from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";

const SignUp = () => (
  <Modal trigger={<Button>SignUp</Button>}>
    <Modal.Header>SignUp</Modal.Header>
    <Modal.Content image>
      <Modal.Description>
        <Header>
            <div className="ui form">
          <div class="field">
            <label>First Name</label>
            <input placeholder="First Name" />
          </div>
          <div class="field">
            <label>Last Name</label>
            <input placeholder="Last Name" />
          </div>
          <div class="field">
            <label>Email</label>
            <input placeholder="First Name" />
          </div>
          <div class="field">
            <label>Password</label>
            <input placeholder="Last Name" />
          </div>
          <div class="field">
            <div class="ui checkbox">
              <input type="checkbox" class="hidden" readonly="" tabindex="0" />
              <label>I agree to the Terms and Conditions</label>
            </div>
          </div>
          <button type="button" class="ui button">
            Submit
          </button>
          </div>
        </Header>
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

export default SignUp;