import React from "react";

class EyesOnMe extends React.Component{

  render() {
    return (
      <button value="submit" onFocus={() => { console.log('Good!') }} onBlur={() => { console.log('Hey! Eyes on me!') }}  >
        Submit
      </button>
    )
  }
}

export default EyesOnMe;
