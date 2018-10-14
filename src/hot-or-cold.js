import React from 'react';

import GuessResults from './guess-result';
import GuessForm from './guess-form';
import GuessList from './guess-list';

export default class HotOrCold extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secretAnswer: 0,
      guesses: [],
      feedBack: 'Cold'
    }
  }

  generateAnswer() {
    const answer = Math.floor(Math.random() * (20 - 1) + 1);
    this.setState({secretAnswer: answer});
  }

  guess = (value) => {
    if (value === this.state.secretAnswer) {
      this.setState({
        guesses: [],
        feedBack: 'Correct!'
      });
      this.generateAnswer();
    } else {
      this.setState({
        guesses: [...this.state.guesses, value],
        feedBack: 'Cold'
      });
      if (value > this.state.secretAnswer && value - 4 <= this.state.secretAnswer) {
        this.setState({
          feedBack: 'Hot'
        });
      }
      if (value < this.state.secretAnswer && value + 4 >= this.state.secretAnswer) {
        this.setState({
          feedBack: 'Hot'
        });
      }
    }
  }

  render() {
    if (this.state.secretAnswer === 0) {
      this.generateAnswer();
    }

    return (
      <main>
        <GuessResults results={this.state.feedBack} />
        <GuessForm onSubmit={this.guess} />
        <GuessList guesses={this.state.guesses} />
      </main>
    );
  }

}