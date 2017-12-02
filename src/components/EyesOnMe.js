// Code EyesOnMe Component Here

import React from 'react';

class EyesOnMe extends React.Component {

   focusEvent = () => {
      console.log('Good!')
   }

   blurEvent = () => {
      console.log('Hey! Eyes on me!')
   }

   render() {
      return(
         <div>
            <button onBlur={this.blurEvent} onFocus={this.focusEvent}>Click Me!</button>
         </div>
      )
   }

}

export default EyesOnMe