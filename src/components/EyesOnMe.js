import React from 'react';
import PropTypes from 'prop-types';

class EyesOnMe extends React.Component {

  focus = () => {
    console.log('Good!')
  }

  blur = () => {
    console.log('Hey! Eyes on me!')
  }

  render() {
    return (
      <div className="eyes-on-me">
        <button onFocus={this.focus} onBlur={this.blur}>Focus</button>
      </div>
    )
  }
}

export default EyesOnMe;
