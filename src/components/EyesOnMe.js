import React from 'react';

class EyesOnMe extends React.Component {

  goodFocus = () => console.log('Good!')

  yoFocus = () => console.log('Hey! Eyes on me!')

  render() {
    return(
      <button
      onFocus={this.goodFocus}
      onBlur={this.yoFocus}>
      </button>
    )
  }
}

export default EyesOnMe;
