import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
    return(
      <ul>
        {this.props.store.getState().restaurants.map((restaurant) => {
          return (
            <Restaurant text={restaurant.text} restaurant={restaurant} id={restaurant.id} key={restaurant.id} store={this.props.store}/>
          )
        })}
      </ul>
    );
  }
};

export default Restaurants;
