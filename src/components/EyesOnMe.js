import React from 'react';

class EyesOnMe extends React.Component {
  onFocus = () => console.log('Good!')

  onBlur = () => console.log('Hey! Eyes on me!')

  render() {
    return (
      <button onFocus={this.onFocus} onBlur={this.onBlur}>
      Eyes on me, please!
      </button>
    )
  }
}

export default EyesOnMe;
