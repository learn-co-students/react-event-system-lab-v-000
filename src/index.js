import React from 'react';
import ReactDOM from 'react-dom';
import Keypad from './components/Keypad';
import EyesOnMe from './components/EyesOnMe';
 
const MOUNT1 = document.querySelector('#global1')
const MOUNT2 = document.querySelector('#global2')

ReactDOM.render(
    <Keypad />,
  MOUNT1
);

ReactDOM.render(
    <EyesOnMe />,
  MOUNT2
);
