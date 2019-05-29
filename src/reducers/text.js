import { SET_TEXT, CLICK_MEDIA, CLOSE_MEDIA } from "../constants/actionTypes";



export default(state={textData:[],open:false},action)=>{
    switch(action.type){
        case SET_TEXT:
        return{
            ...state,
            textData:action.payload
        }
        case CLICK_MEDIA:
        return{
            ...state,
            open:true
        }
        case CLOSE_MEDIA:
        return{
            ...state,
            open:false
        }
        default:
        return state;
    }
}