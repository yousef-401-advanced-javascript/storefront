const initialState = {
  categories: [
    { name: 'electronics', displayName: 'Elecronics', description: 'hi im electronics' },
    { name: 'food', displayName: 'Food', description: 'hi im food' },
    { name: 'clothing', displayName: 'Clothing', description: 'hi im clothes' },
  ],
  products: [
    { name: 'TV', category: 'electronics', price: 699.00, inStock: 5, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQTdcx9FC2S7pKSfOYFXNa6pSId1RcLH25cfg&usqp=CAU' },
    { name: 'Radio', category: 'electronics', price: 99.00, inStock: 15, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQTdcx9FC2S7pKSfOYFXNa6pSId1RcLH25cfg&usqp=CAU' },
    { name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQTdcx9FC2S7pKSfOYFXNa6pSId1RcLH25cfg&usqp=CAU' },
    { name: 'Socks', category: 'clothing', price: 12.00, inStock: 10, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQTdcx9FC2S7pKSfOYFXNa6pSId1RcLH25cfg&usqp=CAU' },
    { name: 'Apples', category: 'food', price: .99, inStock: 500, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQTdcx9FC2S7pKSfOYFXNa6pSId1RcLH25cfg&usqp=CAU' },
    { name: 'Eggs', category: 'food', price: 1.99, inStock: 12, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQTdcx9FC2S7pKSfOYFXNa6pSId1RcLH25cfg&usqp=CAU' },
    { name: 'Bread', category: 'food', price: 2.39, inStock: 90, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQTdcx9FC2S7pKSfOYFXNa6pSId1RcLH25cfg&usqp=CAU' },
  ],
  activeCategory: '',
};
export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
  case 'CATEGORY':
    const activeCategory = payload;
    // console.log('activeCategory',state.activeCategory);      
    return { ...state, activeCategory };

  default:
    return state;
  }
};


//Actions
export const triggerActive = (category) => {
  return {
    type: 'CATEGORY',
    payload: category,
  };
};

