import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR,
  ADD,
  ADD_TO_CART,
  SUBTRACT,
  REMOVE_ITEM_FROM_CART,
  getitem,
  ADDITEMS,
  DELETEITEMS,
  PUTITEMS,
  ADDUSER,
  GETCMD,
  ADDCMD,
  DELETECMD,
  GETUSER  
  
  
 
  
} from "./actionType";
import Axios from 'axios'


export function fetchDataRequest() {
  return {
    type: FETCH_DATA_REQUEST
  };
}

export function fetchDataSuccess(item) {
  return {
    type: FETCH_DATA_SUCCESS,
    item
  };
}

export function fetchDataError(error) {
  return {
    type: FETCH_DATA_ERROR,
    payload: { error }
  };
}

export function addToCart(itemname) {
  return {
    type: ADD_TO_CART,
    itemToBeAdded: itemname
  };
}

export function add(itemname) {
  return {
    type: ADD,
    itemInc: itemname
  };
}

export function subtract(itemname) {
  return {
    type: SUBTRACT,
    itemDec: itemname
  };
}

export function removeItemFromCart(itemname, amount) {
  return {
    type: REMOVE_ITEM_FROM_CART,
    itemToRemove: itemname,
    amount: amount
  };
}
export const getuser = (payload) => ({
  
  type:"Getuser",
  payload:payload,

});
//get user session
export const getusersession = (payload) => ({
  
  type:"user-session",
  payload:payload,
  

});
export const addItems = (payload) =>({
  type : ADDITEMS,
  payload,        
});
export const addItemsToApi=(res)=> {
return (dispatch) =>(
      Axios.post('http://localhost:3000/posts',res)
        .then((res) =>dispatch(addItems(res.data)))
        );
};

export const deleteItem = (payload) =>({
  type : DELETEITEMS,
  payload,
})
export const deleteItemFromApi=(res)=>{
  return (dispatch)=>(
        Axios.delete(`http://localhost:3000/posts/${res}`)
              .then((res)=>dispatch(deleteItem(res.data)),window.location.reload(true))
  )
}
export const putItems = (payload) =>({
  type : PUTITEMS,
  payload,    
})
export const putItemFromApi =(res)=>{
  return(dispatch)=>(
        Axios.put(`http://localhost:3000/posts/${res}`,{res})
              .then((res)=>dispatch(putItems(res.data)),window.location.reload(true))
  )
}

export const getAllUser = (payload) =>({
  type : GETUSER,
  payload        
});
export const getUserFromApi=()=> {
return (dispatch) =>
Axios.get('http://localhost:3000/comments')
      .then((res) =>dispatch(getAllUser(res.data))
);
};
export const addUser = (payload)=>({
  type : ADDUSER,
  payload
})

export const postUserToApi = (res) =>{
  return(dispatch)=>(
        Axios.post('http://localhost:3000/comments',res)
          .then((res) =>dispatch(addUser(res.data)))
          );
}