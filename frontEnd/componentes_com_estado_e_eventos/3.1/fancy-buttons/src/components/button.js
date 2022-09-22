import React from 'react';

function printMsg(print) {
  console.log(print);
}

class Button extends React.Component {
  render() {
    const { headline, print } = this.props;
    return (
      <button onClick={ () => printMsg(print) }>{ headline }</button>
    );
  }
}

export default Button; 