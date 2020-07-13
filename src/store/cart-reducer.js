const initialState = {
  items:[],
  counter:0,
};
  

export default ((state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
  case 'ADDTOCART':
   
    let existedItem= state.items.find(item=> item.name === payload.name);

    if(existedItem){
      existedItem.quantity += 1; 
      return{
        ...state,
        counter: state.counter + 1, 
      };
    }else{
      payload.quantity = 1;
      return{
        ...state,
        items: [...state.items, payload],
        counter : state.counter + 1,
      };
        
    }
   

  default:
    return state;

  }

});

//Actions

export const addToCart = (item) => {
  return {
    type: 'ADDTOCART',
    payload: item,
  };
};
