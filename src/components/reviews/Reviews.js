import React, { Component } from 'react';
import Review from './Review';

// restaurants: [
//   { id: 1, text: 'hello' },
//   { id: 2, text: 'goodbye' },
//   { id: 3, text: 'ciao' }
// ],
// reviews: [
//   { id: 1, restaurantId: 1, text: 'it was good' },
//   { id: 2, restaurantId: 1, text: 'it was very good' },
//   { id: 2, restaurantId: 2, text: 'it was very bad' }
// ]

class Reviews extends Component {

  render() {

    let reviewsToDisplay = this.props.store.getState().reviews.filter((review) => {
      return review.restaurantId === this.props.restaurantId
    })
    console.log(reviewsToDisplay)

    return (
      <ul>
        {reviewsToDisplay.map((review) => {return (
          <Review store={this.props.store} review={review} restaurantId={review.restaurantId} key={review.id} text={review.text}/>
        )})}
      </ul>
    );
  }
};

export default Reviews;
