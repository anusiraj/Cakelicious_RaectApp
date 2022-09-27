import * as ActionTypes from './ActionTypes';


export const Reviews = (state = { errMess : null, reviews : []}, action )  => {
    // state function contains DISHES(state) and actions as parameters

    switch(action.type) {
        case ActionTypes.ADD_REVIEWS:
            return {...state, isLoading: false, errMess: null, reviews: action.payload};
        case ActionTypes.REVIEWS_FAILED:
                return {...state, isLoading: false, errMess: action.payload, reviews: []};
        case ActionTypes.ADD_REVIEW:
            var review = action.payload;
            review.id = state.reviews.length;
            review.date = new Date().toISOString();

            return {...state, reviews: state.reviews.concat(review)};

        default:
            return state;
    }
}
