import React from 'react';

class Keyboard extends React.Component {

    entering = () => {
        console.log('Entering password...')
    }

    render () {
        return (
            <div className="keyboard">
              <input type="password" onKeyUp={this.entering} />
            </div>
        )
    }
};

export default Keyboard;
