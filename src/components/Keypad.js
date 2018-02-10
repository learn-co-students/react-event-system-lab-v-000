import React from 'react';

const Keypad = () => {

  const handlePassword = () => {
    console.log('Entering password...')
  }

  return(
    <input type="password" onKeyUp={handlePassword} />
  )
}

export default Keypad;
