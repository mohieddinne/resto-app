import React, { Component } from 'react'
import { connect } from 'react-redux'
import {postUserToApi} from '../actions/action'


export class SigninPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email :"",
             password :"",
             role: "user"
        }
       
    }
    handleChangeEmail=(e)=>{
        this.setState({
            email:e.target.value
        })
        
    }
    handleChangePassword =(e)=>{
        this.setState({
            password:e.target.value
        })
        console.log(this.state.password)
    }
    handleClickSignUp=(e)=>{
        
        this.props.postUserToApi(this.state)
        this.props.history.push('/connx')

        console.log(this.state)
        
    }
        
    render() {
        
        return (
            <div className='signIn'>
                <form onSubmit={this.handleClickSignUp} class="form-signin col-4">
                    <div class="form-label-group col-12">
                        <label for="inputEmail">Email address</label>
                        <input
                        onChange={this.handleChangeEmail}
                        name="email"
                        type="email"
                        value={this.state.email}
                        id="inputEmail" class="form-control"
                        placeholder="Email address"
                        required autofocus/>
                    </div>
                    <div class="form-label-group col-12">
                        <label for="inputPassword">Password</label>
                        <input
                        type="password"
                        name="password"
                        onChange={this.handleChangePassword}
                        value={this.state.password}
                        id="inputPassword"
                        class="form-control"
                        placeholder="Password"
                        required/>
                    </div>
                    <button  class="btn bt btn-lg btn-primary btn-block col-12" type="submit">inscription</button>
                    <p class="mt-5 mb-3 text-muted text-center">&copy;2020</p>

                </form>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {menu : state.menu}
};
  const mapDispatchToProps = (dispatch) => ({
    
})

export default connect(null, {postUserToApi})( SigninPage)

