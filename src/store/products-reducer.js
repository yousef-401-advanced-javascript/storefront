const initialState =  {
  products:[],
};
// [
//   { name: 'TV', category: 'electronics', price: 699.00, inStock: 5, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQTdcx9FC2S7pKSfOYFXNa6pSId1RcLH25cfg&usqp=CAU' },
//   { name: 'Radio', category: 'electronics', price: 99.00, inStock: 15, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQTdcx9FC2S7pKSfOYFXNa6pSId1RcLH25cfg&usqp=CAU' },
//   { name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQTdcx9FC2S7pKSfOYFXNa6pSId1RcLH25cfg&usqp=CAU' },
//   { name: 'Socks', category: 'clothing', price: 12.00, inStock: 10, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQTdcx9FC2S7pKSfOYFXNa6pSId1RcLH25cfg&usqp=CAU' },
//   { name: 'Apples', category: 'food', price: .99, inStock: 500, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQTdcx9FC2S7pKSfOYFXNa6pSId1RcLH25cfg&usqp=CAU' },
//   { name: 'Eggs', category: 'food', price: 1.99, inStock: 12, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQTdcx9FC2S7pKSfOYFXNa6pSId1RcLH25cfg&usqp=CAU' },
//   { name: 'Bread', category: 'food', price: 2.39, inStock: 90, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQTdcx9FC2S7pKSfOYFXNa6pSId1RcLH25cfg&usqp=CAU' },
// ];


///reducer
export default (state = initialState, action) => {
  const { type, payload } = action;
  
  switch (type) {
  case 'CATEGORYTYPE':
    return {...state};

    // case 'GET':
    //   console.log('GET', payload); // ==> {results:[...],count:num}
    //   return payload;
    
  case 'STOCKREDUCE':
    console.log(state);
    return{...state ,products:state.products.map(product=>{
      if(product.name === payload){
        return {...product, inStock:product.inStock-1};
      }else{
        return product;
      }
    })};
  case 'GETPRO':
    console.log('GET in produc', payload); // ==> {results:[...]}
    //its not returning the state!!! only the data from the API
    return{...state, products:payload.results};
  default:
    return state;
  }
};

////Actions
export const triggerActive = (category) => {
  console.log('im hear');
  return {

    type: 'CATEGORYTYPE',
    payload: category,
  };
};


export const triggerTheStock = (name) => {
  return {
    type: 'STOCKREDUCE',
    payload: name,
  };
};
  