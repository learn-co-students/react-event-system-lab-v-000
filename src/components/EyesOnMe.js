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

/*
import React from 'react';

class EyesOnMe extends React.Component {
    
    focusEvent = () => console.log('Good!')
    blurEvent = () => console.log('Hey! Eyes on me!')

    
    render() {
        return (
            <button focusEvent={this.onFocus} blurEvent={this.onBlur}>
                    
                Eyes on me, please!
            </button>    
        )
    }
}

export default EyesOnMe


*/
