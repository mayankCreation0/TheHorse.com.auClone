import { STOREDATA } from "./actionType";
const product={
    data:[],
}

export const productReducer=(state=product,{type,payload})=>{
    switch(type){
        case STOREDATA:
            return {
                ...state,
                data:payload,
            }
            default :
            return state;
    }
}