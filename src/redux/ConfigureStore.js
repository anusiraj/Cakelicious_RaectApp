import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Cakes } from './cakes';
import { Reviews } from './reviews';
import { Carts } from './carts';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


export const ConfigureStore = () => {

    const store = createStore(
       combineReducers({
           cakes: Cakes,
           reviews: Reviews,
           carts: Carts
           

       }),
       applyMiddleware(thunk, logger)
    );

    return store;
}