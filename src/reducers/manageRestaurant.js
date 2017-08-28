
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {

  switch(action.type) {
    case 'ADD_RESTAURANT':
      let newId = cuid()
      return Object.assign({}, state, {restaurants: state.restaurants.concat({id: newId, text: action.restaurant})})
    case 'DELETE_RESTAURANT':
      return Object.assign({}, state, {restaurants: state.restaurants.filter((rest) => {return rest.id !== action.id})})
    case 'ADD_REVIEW':
      let newReviewId = cuid()
      return Object.assign({}, state, {reviews: state.reviews.concat({id: newReviewId, restaurantId: action.review.restaurantId, text: action.review.text})})
    case 'DELETE_REVIEW':
      return Object.assign({}, state, {reviews: state.reviews.filter((rev) => {return rev.id !== action.id})})
    default:
      return state;
  }

}
