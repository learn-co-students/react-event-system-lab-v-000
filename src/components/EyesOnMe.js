// Code EyesOnMe Component Here
import React, { Component } from 'react';

function focusLog() {
    console.log('Good!')
}

function blurLog() {
    console.log('Hey! Eyes on me!')
}

function EyesOnMe(props) {
    return <button onFocus={focusLog} onBlur={blurLog}></button>
}

export default EyesOnMe;