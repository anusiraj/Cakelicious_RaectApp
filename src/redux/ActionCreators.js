import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';


export const fetchCakes = () => (dispatch) => {
    dispatch(cakesLoading(true));


    return fetch(baseUrl + 'cakes')
    .then(response => response.json())
    .then(cakes => dispatch(addCakes(cakes)));


}

export const cakesLoading = () => ({
    type: ActionTypes.CAKES_LOADING
});

export const cakesFailed = (errmess) => ({
    type: ActionTypes.CAKES_FAILED,
    payload: errmess
});

export const addCakes = (cakes) => ({
    type: ActionTypes.ADD_CAKES,
    payload: cakes

});



