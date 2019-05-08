import React from 'react';

const eyesOnMe = (props) => {
  const focused = () => console.log('Good!');
  const distracted = () => console.log('Hey! Eyes on me!');
  
  return(
    <div className='EyesOnMe'>
      <button
        onFocus={focused}
        onBlur={distracted}>Check Focus
      </button>
    </div>
  )
}

export default eyesOnMe;
