import React from 'react';
import PropTypes from 'prop-types';

export default class EyesOnMe extends React.Component {
  focus = () => {
    console.log("Good!")
  }

  blur = () => {
    console.log("Hey! Eyes on me!")
  }

  render(){
    return (
      <button onFocus = {this.focus}  onBlur = {this.blur}> Are you focused or blurred? </button>
    )
  }
}
