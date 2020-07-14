import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import categoryReducer from './reducer';
import productsReducer from './products-reducer';
import cartReducer from './cart-reducer';


const rootReducer = combineReducers({ categoryReducer, productsReducer, cartReducer });

const store = () => {
  return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
};

export default store();