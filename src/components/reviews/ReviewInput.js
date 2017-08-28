import React, { Component } from 'react';

class ReviewInput extends Component {

  constructor() {
    super()
    this.state = {
      text: ''
    }
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    let newReview = {
      type: 'ADD_REVIEW',
      review: {
        restaurantId: this.props.restaurantId,
        text: this.state.text
    }}
    console.log(newReview)

    this.props.store.dispatch(newReview)
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={(event)=>{this.handleSubmit(event)}}>
          <input type='text' value={this.state.text} onChange={(event)=>{this.handleChange(event)}} placeholder='review' />
          <input type='submit' onClick={(event)=>{this.handleSubmit(event)}} value='Submit' />
          </form>
          {this.props.children}
      </div>
    );
  }
};

export default ReviewInput;
