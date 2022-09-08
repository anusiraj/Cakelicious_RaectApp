import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import { Cakes } from './cakes';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// import { InitialFeedback } from './forms';


export const ConfigureStore = () => {

    const store = createStore(
       combineReducers({
           cakes: Cakes
           

       }),
       applyMiddleware(thunk, logger)
    );

    return store;
}