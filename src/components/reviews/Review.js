import React, { Component } from 'react';

class Review extends Component {

  handleClick = () => {
    let idToDelete = this.props.review.id
    this.props.store.dispatch({
      type: 'DELETE_REVIEW',
      id: idToDelete
    })
  }

  render() {
    return (
      <div>
      <li>
        {this.props.text}
      </li>
      <button onClick={this.handleClick}>X</button>
    </div>
    );
  }
};

export default Review;
