import React from 'react';

  function good() {
    console.log("Good!")
  }

  function eyes() {
    console.log("Hey! Eyes on me!")
  }

export default class EyesOnMe extends React.Component {

  render() {
    return (
      <button onFocus={good} onBlur={eyes}/>
    )
  }
}
