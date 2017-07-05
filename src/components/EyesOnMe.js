import React from 'react'

function eyes() {
  console.log("Hey! Eyes on me!")
}

function good() {
  console.log("Good!")
}


export default class EyesOnMe extends React.Component {


  render() {
    return <button onBlur={eyes} onFocus={good}>click </button>
  }
}
