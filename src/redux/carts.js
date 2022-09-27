import * as ActionTypes from './ActionTypes';


export const Carts = (state = { errMess : null, carts : []}, action )  => {

    switch(action.type) {
        case ActionTypes.ADD_CARTS:
            return {...state, isLoading: false, errMess: null, carts: action.payload};
        case ActionTypes.CARTS_FAILED:
                return {...state, isLoading: false, errMess: action.payload, carts: []};
        case ActionTypes.ADD_CART:
            var cart = action.payload;
            cart.id = state.carts.length;
            cart.date = new Date().toISOString();

            return {...state, carts: state.carts.concat(cart)};

        default:
            return state;
    }
}
