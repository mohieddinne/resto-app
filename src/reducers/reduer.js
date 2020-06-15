import {getitem,ADDITEMS,DELETEITEMS,PUTITEMS,ADDUSER,GETCMD,ADDCMD,DELETECMD, GETUSER} from '../actions/types'
const initisalState = {menu :[],auth:[],panier:[]} 

const reducer = (state = initisalState , action)=>{
    if (action.type === getitem) {
        return action.payload
    }
    else if (action.type === ADDITEMS){
        return [...state,action.payload]
    }
    else if (action.type === DELETEITEMS){
        return [...state,action.payload]
    }
    else if (action.type === PUTITEMS){
        return [...state,action.payload]
    }
    else if(action.type === ADDUSER){
        return [...state,action.payload]
    }
    else if(action.type === GETUSER){
        return [...state,action.payload]
    }
    else if (action.type === GETCMD) {
        return action.payload
    }
    else if (action.type === ADDCMD) {
        return [...state,action.payload]
    }
    else if (action.type === DELETECMD){
        return [...state,action.payload]
    }
    return state.menu
    

}

export default reducer