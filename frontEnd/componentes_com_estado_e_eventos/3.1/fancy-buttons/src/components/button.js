import React from 'react';


class Button extends React.Component {
  constructor() {
    super()
    this.state = {
      numberOfClicks: 0,
    }
  }
  
  printMsg = () => {
    this.setState((state) => ({
      numberOfClicks: state.numberOfClicks + 1,
    }))
  }
  render() {
    const { headline, print } = this.props;
    return (
      <button onClick={ this.printMsg }>{ this.state.numberOfClicks }</button>
    );
  }
}

export default Button; 