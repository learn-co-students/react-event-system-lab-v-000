import React from 'react';
import ReactDOM from 'react-dom';

import Keypad from './components/Keypad.js';
import EyesOnMe from './components/EyesOnMe.js';

ReactDOM.render(
  <div>
    <Keypad />
    <EyesOnMe />
  </div>,
  document.getElementById('global')
);
