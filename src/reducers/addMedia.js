import { ADD_MEDIA } from "../constants/actionTypes";


export default(state={open:false,data:null},action)=>{
    switch(action.type){
        case ADD_MEDIA:
        return{
            ...state,
            open:true,
            data:action.payload
        }
        default:
        return state
    }
}