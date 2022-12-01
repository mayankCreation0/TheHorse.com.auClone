const initialdata = {
  carts: [],
};





const reducer = (state = initialdata, action) => {
  switch (action.type) {
    case "ADD_CART":
    
      const IteamIndex = state.carts.findIndex((item)=> item.id === action.payload.id);

      if(IteamIndex >= 0){
          state.carts[IteamIndex].quantity +=1
          return {
              ...state,
              carts:[...state.carts]
          }
      }else{
          const temp = {...action.payload,quantity:action.payload.quantity}
           return {
              ...state,
              carts: [...state.carts, temp]
          }
      }



      case "RMV_CART":
        const data = state.carts.filter((el)=>el.id !== action.payload); 
        // console.log(data);

        return {
            ...state,
            carts:data
        }

    case "RMV_ONE":
        const IteamIndex_dec = state.carts.findIndex((iteam)=> iteam.id === action.payload.id);

        if(state.carts[IteamIndex_dec].quantity >= 1){
            const dltiteams = state.carts[IteamIndex_dec].quantity -= 1
            console.log([...state.carts,dltiteams]);

            return {
                ...state,
                carts:[...state.carts]
            }
        }else if(state.carts[IteamIndex_dec].quantity === 1 ){
            const data = state.carts.filter((el)=>el.id !== action.payload);

            return {
                ...state,
                carts:data
            }
        }
    default:
      return state;
  }
};

export default reducer;
