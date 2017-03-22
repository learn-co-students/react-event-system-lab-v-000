const React = require('react');

class EyesOnMe extends React.Component {
  constructor(){
    super();
    this.focus = this.focus.bind(this)
    this.blur = this.blur.bind(this)
  }

  focus(){
    console.log('Good!')
  }

  blur(){
    console.log('Hey! Eyes on me!')
  }

  render(){
    return(
      <button>test </button>
    )
  }
}

module.exports = EyesOnMe;
