import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getitemFromApi,deleteItemFromApi,addItemsToApi,putItemFromApi} from '../actions/action'
import './ContainerItems.css'
import Modal from './Modal';
    class ContainerItems extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
            title: "",
            img: "",
            Ingrédients: "",
            quantity : "",
            prix :""                       
        }
        
    }
    
    handleChangeTitle =(e)=>{
        this.setState({title:e.target.value})
        console.log(this.state.title)
    }
    handleChangePrix =(e)=>{
        this.setState({prix:e.target.value})
        console.log(this.state.prix)
    }   
    handleChangeImg =(e)=>{
       this.setState({img:e.target.value})
       console.log(this.state.img)
    }
    handleChangeIngredient =(e)=>{
        this.setState({Ingrédients:e.target.value})
        console.log(this.state.Ingrédients)
    }
    handleChangequantity =(e)=>{
        this.setState({quantity:e.target.value})
        console.log(this.state.quantity)
    }

    handleClickAdd = () =>{

            this.props.addItemsToApi (this.state)
    }
    

    componentDidMount =()=> {
        this.props.getitemFromApi();
    }

    
    render() {
        const {menu,deleteItemFromApi,putItemFromApi} = this.props
        return (
            <div className='main' >   

                <div className='deuxBtn'>
                <Modal  handleChangeImg = {this.handleChangeImg}
                        handleChangeTitle = {this.handleChangeTitle}
                        handleChangeIngredient ={this.handleChangeIngredient}
                        handleClickAdd ={this.handleClickAdd}
                        handleChangequantity={this.handleChangequantity}
                        handleChangePrix ={this.handleChangePrix} />
                <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Modifier</button>                    
                </div>
                

                <div className="row">
                {menu.map((el,i) => (
                    
                    <div className={'col-sm-4'}>                    
                        <div class="card" >                            
                            <img src={el.img}  class="card-img-top" alt="..."/>
                            <div class="row">                                
                            <div class="col">
                                <div class="collapse multi-collapse" id="multiCollapseExample2">
                                <div class="card card-body">
                                <input className='in'                                
                                onChange={this.handleChangeTitle}>
                                </input>
                                <input className='in'                                
                                onChange={this.handleChangeIngredient}>
                                </input>
                                <input className='in'                                
                                onChange={this.handleChangeImg}>
                                </input>
                                <button onClick = {()=>{putItemFromApi(el.id,this.state)}}
                                class="btn btn-primary">sauvgarder</button>   
                                </div>
                                </div>
                            </div>
                            </div>  
                            <div class="card-body">
                                <h5 class="card-title">{el.id}:  {el.title}</h5>
                                <h6> prix: {el.prix} dinars</h6>
                                <h6> quantity: {el.quantity}</h6>
                                <p class="card-text"> {el.Ingrédients} </p>
                                <div >
                                <button onClick = {()=>{deleteItemFromApi(menu[i].id)}}
                                class="btn btn-primary">
                                supprimer
                                </button>                               
                                                                                                                                                                                       
                                </div>                                
                            </div>
                        </div>
                         
                    </div> 
                     ))} 
                </div>
            </div>
            
        )
    }
}
const mapStateToProps = (state) => {
    return { menu: state.menu};
  };

/* const mapDispatchToProps = (dispatch) => ({
    getAll: () => dispatch (getitemFromApi()),
    deleteItem : (res) => dispatch(deleteItemFromApi(res))
}) */


export default connect(mapStateToProps, {getitemFromApi,deleteItemFromApi,addItemsToApi,putItemFromApi})(ContainerItems)
