import React, { Component } from 'react';

// restaurants: [
//   {id: 1, text: 'hello'},
//   {id: 2, text: 'goodbye'},
//   {id: 3, text: 'ciao'}
// ]

class RestaurantInput extends Component {

  constructor () {
    super ()
    this.state = {
      text: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_RESTAURANT',
      restaurant: this.state.text
    })
    this.setState({
      text: ''
    })
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <input type='text' value={this.state.text} onChange={this.handleChange} placeholder='restaurant name' />
        <input type='submit' value='Submit' />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
