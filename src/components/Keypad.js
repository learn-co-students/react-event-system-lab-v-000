// Code Keypad Component Here
import React, { Component } from 'react';

function logMessage() {
    console.log('Entering password...')
}

function Keypad(props) {
    return <input onKeyUp={logMessage} type="password" />
};

export default Keypad;