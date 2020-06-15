import React, { Component } from 'react'
import { connect } from 'react-redux'
class Modal extends Component {
    constructor(props) {
        super(props)
    
      
    }
   
    
    render() {
        const{handleChangeImg,handleChangeIngredient,handleChangeTitle,handleClickAdd,handleChangequantity,handleChangePrix}=this.props
        return (
            <div>
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Ajouter</button>

                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">New plat</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                        <div class="form-group">
                            <input placeholder="title"onChange={handleChangeTitle}></input>
                        </div>
                        <div class="form-group">
                            <input placeholder='url Image' onChange={handleChangeImg}></input>
                        </div>
                        <div class="form-group">
                            <input placeholder='description' onChange={handleChangeIngredient}></input>
                        </div>
                        <div class="form-group">
                            <input placeholder='quantity' onChange={handleChangequantity}></input>
                        </div>
                        <div class="form-group">
                            <input placeholder='prix' onChange={handleChangePrix}></input>
                        </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" onClick={handleClickAdd}>Ajouter</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default connect(null,null)(Modal)
