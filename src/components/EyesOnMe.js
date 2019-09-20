import React from 'react';

class EyesOnMe extends React.Component {
  notFocused = () => {
    console.log('Hey! Eyes on me!')
  }

  focused = () => {
    console.log('Good!')
  }

  render() {
    return(
      <button onFocus={this.focused} onBlur={this.notFocused} />
    )
  }
}

export default EyesOnMe
