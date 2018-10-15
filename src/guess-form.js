import React from 'react';

export default class GuessForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    }
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(parseInt(this.state.value, 10));
    this.setState({value: ''});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="guess">Guess A Number</label>
        <input
          type="number"
          min="1"
          max="20"
          id="guess"
          name="guess"
          placeholder="1 - 20"
          value={this.state.value}
          onChange={this.handleChange}
          required
        />
        <button
          type="submit"
        >
          Guess
      </button>
      </form >
    );
  }
}
