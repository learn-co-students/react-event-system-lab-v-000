// Code EyesOnMe Component Here

import React from 'react'

class EyesOnMe extends React.Component {

  p = () => {
    console.log('Good!')
  }

  p1 = () => {
    console.log('Hey! Eyes on me!')
  }

  render() {
    return (
      <button onFocus={this.p} onBlur={this.p1}>button</button>
      //<input type='button' onFocus={this.p} onBlur={this.p1} value='button'/>
    )
  }
}

export default EyesOnMe;
