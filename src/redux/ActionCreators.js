import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';



export const addCart = (cart) => ({

    type: ActionTypes.ADD_CART,

    payload: {
        cart: cart
    }
});


export const addReview = (review ) => ({

    type: ActionTypes.ADD_REVIEW,

    payload: {
        review: review
    }
});

export const postReview = (cakeId, rating, author, review) => (dispatch) => {

    const newReview = {
        cakeId: cakeId,
        rating: rating,
        author: author,
        review: review
    };
    newReview.date = new Date().toISOString();
    
    return fetch(baseUrl + 'reviews', {
        method: "POST",
        body: JSON.stringify(newReview),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            throw error;
      })

      .then(response => response.json())
      .then(response => dispatch(addReview(response)))
      .catch(error =>  { console.log('post reviews', error.message); alert('Your review could not be posted\nError: '+error.message); });
  };
  export const fetchReviews = () => (dispatch) => {

    return fetch(baseUrl + 'reviews')
    
           
    .then(response => response.json())
    .then(reviews  => dispatch(addReviews(reviews)))
    .catch(error => dispatch(reviewsFailed(error.message)))

}
export const reviewsFailed = (errmess) => ({
    type: ActionTypes.REVIEWS_FAILED,
    payload: errmess
});
export const addReviews = (reviews) => ({
    type: ActionTypes.ADD_REVIEWS,
    payload: reviews
});

// For Cakes

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

// For Cart


export const postCart = (cakeId, cakeName, cakePrice) => (dispatch) => {

    const newCart = {
        cakeId: cakeId,
        cakeName: cakeName,
        cakePrice: cakePrice,
    };
    newCart.date = new Date().toISOString();
    
    return fetch(baseUrl + 'carts', {
        method: "POST",
        body: JSON.stringify(newCart),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            throw error;
      })

      .then(response => response.json())
      .then(response => dispatch(addCart(response)))
      .catch(error =>  { console.log('post carts', error.message); alert('Your item could not be posted\nError: '+error.message); });
   };
  
  export const fetchCarts = () => (dispatch) => {

    return fetch(baseUrl + 'carts')
    
           
    .then(response => response.json())
    .then(carts  => dispatch(addCarts(carts)))
    .catch(error => dispatch(cartsFailed(error.message)))

}
export const cartsFailed = (errmess) => ({
    type: ActionTypes.CARTS_FAILED,
    payload: errmess
});
export const addCarts = (carts) => ({
    type: ActionTypes.ADD_CARTS,
    payload: carts
});




