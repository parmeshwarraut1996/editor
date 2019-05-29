import { UPLOAD_IMAGE, REMOVE_COVER, ADD_COVER_IMAGE } from "../constants/actionTypes";




export default (state={upload:null,open:true},action)=>{
    switch(action.type){
        case UPLOAD_IMAGE:
        return{
            ...state,
            upload:action.payload
        }
        case REMOVE_COVER:
        return{
            ...state,
            open:false
        }
         case ADD_COVER_IMAGE:
         return{
             ...state,
             open:true
         }
        default:
        return state
    }
}