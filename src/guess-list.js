import React from 'react';

export default function GuessList(props) {
  return (
    <h3> {props.guesses.map(num => num + ' ')} </h3>
  )
}