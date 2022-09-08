import * as ActionTypes from './ActionTypes';

export const Cakes = (state = { isLoading: true,
    errMess: null,
    cakes:[]
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_CAKES:
            return {...state, isLoading: false, errMess: null, cakes: action.payload};

        case ActionTypes.CAKES_LOADING:
            return {...state, isLoading: true, errMess: null, cakes: []}

        case ActionTypes.CAKES_FAILED:
            return {...state, isLoading: false, errMess: action.payload, cakes: []};

        default:
            return state;
    }
};