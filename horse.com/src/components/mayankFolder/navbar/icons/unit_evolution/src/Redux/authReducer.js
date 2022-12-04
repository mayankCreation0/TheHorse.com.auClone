import { USERSTATUS } from "./actionType";
const user={
    status:false
}

export const authReducer=(state=user,{type,payload})=>{
    console.log(payload);
    switch(type){
        case USERSTATUS:
            return{
            ...state,
            status:payload,
        }
        default :
        return state;
    }
    
}