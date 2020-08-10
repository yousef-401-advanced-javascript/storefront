const initialState = {
  // categories: [
  //   { name: 'electronics', displayName: 'Elecronics', description: 'hi im electronics' },
  //   { name: 'food', displayName: 'Food', description: 'hi im food' },
  //   { name: 'clothing', displayName: 'Clothing', description: 'hi im clothes' },
  // ],

  categories:[],
  activeCategory: '',
};
export default (state = initialState, action) => {
  const { type, payload } = action;
  // console.log('payload',payload);
  switch (type) {
  case 'CATEGORYTYPE':
    const activeCategory = payload;
    // console.log('activeCategory',state.activeCategory);      
    return { ...state, activeCategory };
  case 'GETCAT':
    // console.log('GET', payload); // ==> {results:[...]}
    //its not returning the state!!! only the data from the API
    return{...state, categories:payload.results};

  default:
    return state;
  }
};


//Actions
export const triggerActive = (category) => {
  return {
    type: 'CATEGORYTYPE',
    payload: category,
  };
};

