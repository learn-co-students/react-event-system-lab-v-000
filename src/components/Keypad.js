import React from 'react';

const keypad = (props) => {
  const keyUp = () => console.log('Entering password...');
  
  return(
    <div className="keypad">
      <input type="password" onKeyUp={keyUp} />
    </div>
  )
}


export default keypad;
