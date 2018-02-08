import React from 'react';

export default class EyesOnMe extends React.Component {
  isFocusing = (e) => {
    console.log('Good!')
  }

  isNotFocusing = (e) => {
    console.log('Hey! Eyes on me!')
  }

  render() {
    return(
      <div>
        <button onFocus={this.isFocusing} onBlur={this.isNotFocusing} >Attention!!</button>
      </div>
    )
  }
}
