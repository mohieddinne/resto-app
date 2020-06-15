import React from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";
import { Component } from "react";
import { connect } from "react-redux";
import {chooseLayoutApi,getUserAPi,addSessionToApi} from "../../api/api"
class SignIn extends Component{
  componentDidMount(){
    this.props.getuser()
  }
  handlechange=(e)=>{
    this.setState({[e.target.name]:e.target.value})


  }
  submiting=()=>{
    if(this.state.mail==="admin@admin.com" && this.state.password==="topadmin"){
      this.props.choose(3)
      window.location.reload()
    }
    else if(this.props.getusers.filter(el=>el.mail===this.state.mail).length!==0 && this.props.getusers.filter(el=>el.password===this.state.password).length!==0){
      let arruser=this.props.getusers.filter(el=>el.mail===this.state.mail)
      this.props.addsession(arruser)
      this.props.choose(2)
      window.location.reload()
    }
    else 
    return alert('error ')
  }
  render(){
    const {getusers}=this.props;
    

  return (
  <Modal trigger={<Button>SignIn</Button>}>
    <Modal.Header>SignIn</Modal.Header>
    <Modal.Content image>
      <Modal.Description>
        <Header>
            <div className="ui form">
          <div class="field">
            <label>Email</label>
            <input placeholder="email" name="mail" onChange={this.handlechange} />
          </div>
          <div class="field">
            <label>Password</label>
            <input placeholder="password" name="password" onChange={this.handlechange}/>
          </div>
          <div class="field">
            <div class="ui checkbox">
              <input type="checkbox" class="hidden" readonly="" tabindex="0" />
              <label>I agree to the Terms and Conditions</label>
            </div>
          </div>
          <button type="button" class="ui button" onClick={this.submiting}>
            Submit
          </button>
          </div>
        </Header>
      </Modal.Description>
    </Modal.Content>
  </Modal>
  );
  };
};
const mapStateToProps = (state) => ({
  getusers:state.getusers,
  
  
});
const mapDispatchToProps = (dispatch) => ({
 choose: (data) => dispatch(chooseLayoutApi(data)),
 getuser:()=>dispatch(getUserAPi()),
 addsession:(data)=>dispatch(addSessionToApi(data))

});
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);


