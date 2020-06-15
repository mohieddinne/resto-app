import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getUserFromApi} from '../actions/action'

export class Connexion extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            emailConx :"",
            passwordConx :""
        }
        
    }
    handleChangeEmailConx=(e)=>{
        this.setState({
            emailConx:e.target.value
        })
        console.log(this.state.emailConx)
        
    }
    handleChangePasswordConx =(e)=>{
        this.setState({
            passwordConx:e.target.value
        })
        console.log(this.state.passwordConx)
    }
    handleClickConx=()=>{
        
        this.props.history.push('/client')

        alert('ddd')
        
    }
    componentDidMount= ()=>{
        this.props.getUserFromApi()
         console.log(this.props.getUserFromApi())
        
    }
    
   
    render() {
        const{showPlat}=this.props
        return (
            <div className='signIn'>
                <form onSubmit={this.handleClickConx} class="form-signin col-4">
                    <div class="form-label-group col-12">
                        <label for="inputEmail">Email address</label>
                        <input
                        onChange={this.handleChangeEmailConx}
                        name="emailConx"
                        type="email"
                        value={this.state.emailConx}
                        id="inputEmail" class="form-control"
                        placeholder="Email address"
                        required autofocus/>
                    </div>
                    <div class="form-label-group col-12">
                        <label for="inputPassword">Password</label>
                        {this.props.menu.map(el=>( <div> {el.email} </div> ))}

                        <input
                        type="password"
                        name="passwordConx"
                        onChange={this.handleChangePasswordConx}
                        value={this.state.passwordConx}
                        id="inputPassword"
                        class="form-control"
                        placeholder="Password"
                        required/>
                    </div>
                    <button  class="btn bt btn-lg btn-primary btn-block col-12" type="submit">connexion</button>
                    <p class="mt-5 mb-3 text-muted text-center">&copy;2020</p>

                </form>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {menu : state.menu};
};



export default connect(mapStateToProps,{getUserFromApi})(Connexion)
