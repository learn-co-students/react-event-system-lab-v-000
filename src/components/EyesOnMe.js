import React from 'react';

class EyesOnMe extends React.Component { 
    focus = () => {
        console.log("Good!")
    }

    blur = () => {
        console.log("Hey! Eyes on me!")
    }
   
    render() {
      
      return (
          <div>
            <button onFocus={this.focus} onBlur={this.blur}>Look Here!</button>
          </div>
      )
    }
  }
   
  export default EyesOnMe;
  